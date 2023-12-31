

// 位置情報の取得と保存
function getLocationAndSaveData() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const data = {
          type: 'location',
          latitude,
          longitude
        };

        saveDataToLocalStorage(data);
      },
      error => {
        console.error('位置情報の取得に失敗しました:', error);
      }
    );
  } else {
    console.error('このブラウザは位置情報の取得をサポートしていません');
  }
}

// デバイス情報の取得と保存
function getDeviceInformationAndSaveData() {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;

  const deviceData = {
    type: 'device',
    userAgent,
    platform
  };

  saveDataToLocalStorage(deviceData);
}

// IPアドレスの取得と保存
async function getIPAddressAndSaveData() {
  try {
    const response = await fetch('https://api.ipify.org/?format=json');
    const responseData = await response.json();

    const ipAddress = responseData.ip;

    const ipData = {
      type: 'ip',
      ipAddress
    };

    saveDataToLocalStorage(ipData);
  } catch (error) {
    console.error('IPアドレスの取得に失敗しました:', error);
  }
}

// データの保存
function saveDataToLocalStorage(data) {
  const storedData = localStorage.getItem('storedData');
  let savedData = [];
  if (storedData) {
    savedData = JSON.parse(storedData);
  }
  const timestamp = new Date().getTime();
  data.timestamp = timestamp;
  savedData.push(data);
  localStorage.setItem('storedData', JSON.stringify(savedData));
}

// 日付と時間ごとに整理して表示する
function displayDataByTimestamp() {
  const storedData = localStorage.getItem('storedData');
  if (storedData) {
    const data = JSON.parse(storedData);

    // タイムスタンプでソート
    data.sort((a, b) => a.timestamp - b.timestamp);

    let currentTimestamp = null;
    let output = '';

    data.forEach(entry => {
      const timestamp = new Date(entry.timestamp);

      // タイムスタンプが変わった場合は新しいセクションを作成
      if (currentTimestamp !== timestamp.toDateString()) {
        currentTimestamp = timestamp.toDateString();
        output += `<h2>${currentTimestamp}</h2>`;
      }

      if (entry.type === 'location') {
        const latitude = entry.latitude;
        const longitude = entry.longitude;
        output += `<p>${timestamp.toLocaleTimeString()}: 位置情報 - 緯度 ${latitude}, 経度 ${longitude}</p>`;
      } else if (entry.type === 'device') {
        const userAgent = entry.userAgent;
        const platform = entry.platform;
        output += `<p>${timestamp.toLocaleTimeString()}: 本体情報 - ユーザーエージェント ${userAgent}, プラットフォーム ${platform}</p>`;
      } else if (entry.type === 'ip') {
        const ipAddress = entry.ipAddress;
        output += `<p>${timestamp.toLocaleTimeString()}: IPアドレス - ${ipAddress}</p>`;
      }
    });

    if (output === '') {
      output = '<p>保存されたデータがありません</p>';
    }

    dataContainer.innerHTML = output;
    dataContainer.style.overflowY = 'scroll';
    dataContainer.style.maxHeight = '400px';
    dataContainer.style.display = 'block'; // コンテナを表示

    buttonDisplayData.textContent = 'データを隠す'; // ボタンのテキストを変更
  } else {
    alert('保存されたデータがありません');
  }
}

// データ取得と保存の実行
function executeAndSaveData() {
  getLocationAndSaveData();
  getDeviceInformationAndSaveData();
  getIPAddressAndSaveData();
}

// データコンテナの作成
const dataContainer = document.createElement('div');
dataContainer.id = 'data-container';
dataContainer.style.backgroundColor = 'lightgray';
dataContainer.style.padding = '20px';
dataContainer.style.position = 'fixed';
dataContainer.style.left = '20px';
dataContainer.style.top = '20px';
dataContainer.style.width = '300px';
dataContainer.style.zIndex = '99999';
dataContainer.style.display = 'none'; // コンテナを非表示に設定
document.body.appendChild(dataContainer);

// 「データを表示/隠す」ボタンの追加と動作
const buttonDisplayData = document.createElement('button');
buttonDisplayData.id = 'button-display-data';
buttonDisplayData.textContent = 'データを表示';
buttonDisplayData.style.backgroundColor = 'black';
buttonDisplayData.style.color = 'purple';
buttonDisplayData.style.border = 'none';
buttonDisplayData.style.position = 'fixed';
buttonDisplayData.style.right = '20px';
buttonDisplayData.style.transform = 'translateX(-50%)';
buttonDisplayData.style.top = '135px';
buttonDisplayData.style.transform = 'translateY(-50%)';
buttonDisplayData.style.zIndex = '99999';

// ボタンのクリックイベントの追加
buttonDisplayData.addEventListener('click', () => {
  if (dataContainer.style.display === 'block') {
    // コンテナが表示されている場合は隠す
    dataContainer.style.display = 'none';
    buttonDisplayData.textContent = 'データを表示';
  } else {
    // コンテナが隠れている場合は表示する
    displayDataByTimestamp();
    dataContainer.style.display = 'block';
    buttonDisplayData.textContent = 'データを隠す';
  }
});

document.body.appendChild(buttonDisplayData);

// ページが読み込まれたときにデータを保存する
window.addEventListener('load', function() {
  executeAndSaveData();
});

// ページがアンロードされるときにデータを保存する
window.addEventListener('beforeunload', function() {
  executeAndSaveData();
});


  
  
  //here
  
  const text1 = document.createElement('div');
  text1.textContent = 'This code is written by p. ver3.0';
  
  // スタイルを設定
  text1.style.position = 'fixed';
  text1.style.top = '540px';
  text1.style.left = '0px';
  text1.style.color = 'red';
  text1.style.backgroundColor = 'black';
  text1.style.padding = '3px';
  
  // 要素を一番下に移動する
  document.body.appendChild(text1);
  
  
  const button1 = document.createElement('button');
  button1.textContent = '1. short typing の実行';
  button1.style.backgroundColor = 'black';
  button1.style.color = 'red';
  button1.style.border = 'none';
  button1.style.position = 'fixed';
  button1.style.right = '20px';
  button1.style.transform = 'translateX(-50%)';
  button1.style.top = '63px';
  button1.style.transform = 'translateY(-50%)';
  button1.style.zIndex = '99999';
  button1.addEventListener('click', () => {
    const boxedChars = document.querySelectorAll('.boxed-char');
  
    async function typeCharacters() {
      for (const boxedChar of boxedChars) {
        const text = boxedChar.textContent.trim();
        await new Promise(resolve => {
          window.core.record_keydown_time(text);
          setTimeout(resolve, 50); // 50ミリ秒待機
        });
      }
    }
  
    typeCharacters();
  });
  
  const button3 = document.createElement('button');
  button3.textContent = '3. auto click';
  button3.style.backgroundColor = 'black';
  button3.style.color = 'green';
  button3.style.border = 'none';
  button3.style.position = 'fixed';
  button3.style.right = '20px';
  button3.style.transform = 'translateX(-50%)';
  button3.style.top = '111px';
  button3.style.transform = 'translateY(-50%)';
  button3.style.zIndex = '99999';
  button3.addEventListener('click', () => {
    const minDelay = 18; // 18
    const maxDelay = 35; // 35
  
    const keyOverrides = {
      [String.fromCharCode(160)]: ' ',
    };
  
    function getTargetCharacters() {
      const els = Array.from(document.querySelectorAll('.token span.token_unit'));
      const chrs = els
        .map(el => {
          if (el.firstChild?.classList?.contains('_enter')) {
            return '\n';
          }
          let text = el.textContent[0];
          return text;
        })
        .map(c => keyOverrides.hasOwnProperty(c) ? keyOverrides[c] : c);
      return chrs;
    }
  
    function recordKey(chr) {
      window.core.record_keydown_time(chr);
    }
  
    function sleep(ms) {
      return new Promise(r => setTimeout(r, ms));
    }
  
    function calculateDelay(currentIndex, numChars) {
      const progress = currentIndex / numChars;
      const speedMultiplier = 1 + progress;
      const delay = Math.random() * (maxDelay - minDelay) + minDelay;
      return delay * speedMultiplier;
    }
  
    function clickButtonWhenVisible() {
      const button = document.querySelector('.btn.navbar-continue');
      if (button) {
        button.click();
        console.log('ボタンをクリックしました');
      } else {
        console.log('ボタンが見つかりません');
        setTimeout(clickButtonWhenVisible, 1000);
        console.clear(); // 1秒ごとに再試行
      }
    }
  
    function checkAndClickCloseButton() {
      var closeButtons = document.querySelectorAll('.edmodal-x');
      if (closeButtons.length > 0) {
        for (var i = 0; i < closeButtons.length; i++) {
          closeButtons[i].click();
        }
      }
    }
  
    setInterval(checkAndClickCloseButton, 1000); //広告バツボタン
  
    async function autoPlay(finish) {
      const chrs = getTargetCharacters();
      const numChars = chrs.length;
      let delay = maxDelay;
      for (let i = 0; i < numChars - (!finish); ++i) {
        const c = chrs[i];
        recordKey(c);
        await sleep(delay);
        if (i > 0 && i % 10 === 0) {
          delay = calculateDelay(i, numChars);
        }
      }
  
      // 自動再生が完了した後、5秒後に再度実行
      setTimeout(() => {
        clickButtonWhenVisible();
        autoPlay(true);
      }, 5000);
    }
  
    clickButtonWhenVisible();
    autoPlay(true);
    console.log('新しいモードが実行されました');
  });
  
  document.body.appendChild(button3);
  
  // ここまで3
  
  const button2 = document.createElement('button');
  button2.textContent = '2. long typing の実行';
  button2.style.backgroundColor = 'black';
  button2.style.color = 'blue';
  button2.style.border = 'none';
  button2.style.position = 'fixed';
  button2.style.right = '20px';
  button2.style.transform = 'translateX(-50%)';
  button2.style.top = '87px';
  button2.style.transform = 'translateY(-50%)';
  button2.style.zIndex = '99999';
  button2.addEventListener('click', () => {
    const password = 'p-san';
    let isPasswordEntered = false;
  
    function clickButtonWhenVisible() {
      const button = document.querySelector('.btn.navbar-continue');
      if (button) {
        button.click();
        console.log('ボタンをクリックしました');
      } else {
        console.log('ボタンが見つかりません');
        setTimeout(clickButtonWhenVisible, 1000); // 1秒ごとに再試行
      }
    }
  
    clickButtonWhenVisible();
    // ここまで
  
    function executeCode() {
      const minDelay = 400; // 最小待機時間 18
      const maxDelay = 600; // 最大待機時間 50
  
      const keyOverrides = {
        '\u00A0': ' ',
      };
  
      function getTargetCharacters() {
        const els = Array.from(document.querySelectorAll('.token span.token_unit'));
        const chrs = els.map(el => {
          if (el.firstChild?.classList?.contains('_enter')) {
            return '\n';
          }
          return el.textContent[0];
        }).map(c => keyOverrides[c] || c);
        return chrs;
      }
  
      function recordKey(chr) {
        window.core.record_keydown_time(chr);
      }
  
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
  
      async function autoPlay(finish) {
        const chrs = getTargetCharacters();
        const numChars = chrs.length;
        for (let i = 0; i < numChars - (!finish); ++i) {
          const c = chrs[i];
          recordKey(c);
          const delay = calculateDelay(numChars, i, minDelay, maxDelay);
          await sleep(delay);
        }
      }
  
      function calculateDelay(numChars, currentIndex, minDelay, maxDelay) {
        const progress = currentIndex / numChars;
        const speedMultiplier = 1 + progress;
        const delay = Math.random() * (maxDelay - minDelay) + minDelay;
        return delay * speedMultiplier;
      }
  
      autoPlay(true);
      console.log('コードが実行されました');
    }
  
    function checkPassword() {
      if (isPasswordEntered) {
        executeCode();
      } else {
        const storedPassword = localStorage.getItem('enteredPassword');
        if (storedPassword === password) {
          isPasswordEntered = true;
          executeCode();
        } else {
          const input = prompt('パスワードを入力してください:');
          if (input === password) {
            isPasswordEntered = true;
            localStorage.setItem('enteredPassword', input);
            alert('ver2.0\nhamanan typing club cheat. please press OK to start!\nDo not copy this code for your own benefit!');
            executeCode();
          } else {
            alert('パスワードが違います');
          }
        }
      }
    }
  
    checkPassword();
  });
  
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '10px';
  container.style.right = '10px';
  container.appendChild(button1);
  container.appendChild(button2);
  
  document.body.appendChild(container);
  container.style.zIndex = '99999'; //手前に持ってくる
  // 1押したら非表示になってしまう

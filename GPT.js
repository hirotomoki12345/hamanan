// APIのURLを設定
var apiUrl = 'https://free.churchless.tech/v1/chat/completions';

// iframeを作成
var iframe = document.createElement('iframe');
iframe.setAttribute('src', 'https://bettergpt.chat');
iframe.style.position = 'fixed';
iframe.style.top = '50%';
iframe.style.left = '50%';
iframe.style.transform = 'translate(-50%, -50%)';
iframe.style.border = '8px solid Aquamarine';
iframe.style.width = '80%';
iframe.style.height = '80%';
iframe.style.zIndex = '9999';
iframe.style.resize = 'both';
iframe.style.overflow = 'auto';
iframe.style.display = 'none';

// ドラッグ用の境界線を作成
var border = document.createElement('div');
border.style.position = 'fixed';
border.style.top = 'calc(50% - 8px)';
border.style.left = 'calc(50% - 8px)';
border.style.width = 'calc(80% + 16px)';
border.style.height = 'calc(80% + 16px)';
border.style.border = '8px solid transparent';
border.style.cursor = 'move';
border.style.zIndex = '9998';
border.setAttribute('draggable', 'true');
border.style.display = 'none';

// 閉じるボタンを作成
var closeButton = document.createElement('button');
closeButton.style.position = 'fixed';
closeButton.style.top = '5px';
closeButton.style.right = '5px';
closeButton.style.fontSize = '20px';
closeButton.style.color = 'white';
closeButton.style.backgroundColor = 'Aquamarine';
closeButton.style.border = 'none';
closeButton.style.borderRadius = '50%';
closeButton.style.width = '30px';
closeButton.style.height = '30px';
closeButton.style.cursor = 'pointer';
closeButton.style.zIndex = '10000';
closeButton.textContent = 'X';
closeButton.addEventListener('click', function() {
  iframe.style.display = 'none';
  border.style.display = 'none';
  closeButton.style.display = 'none';
});

// チャットをトグルするボタンを作成
var toggleButton = document.createElement('button');
toggleButton.style.position = 'fixed';
toggleButton.style.top = '5px';
toggleButton.style.left = '5px';
toggleButton.style.fontSize = '16px';
toggleButton.style.color = 'white';
toggleButton.style.backgroundColor = 'Aquamarine';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.padding = '5px 10px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '10000';
toggleButton.textContent = 'Toggle Chat';
toggleButton.addEventListener('click', function() {
  if (iframe.style.display === 'none') {
    iframe.style.display = 'block';
    border.style.display = 'block';
    closeButton.style.display = 'block';
  } else {
    iframe.style.display = 'none';
    border.style.display = 'none';
    closeButton.style.display = 'none';
  }
});

// ドラッグ用変数の初期化
var isDragging = false;
var startX, startY, startLeft, startTop;

// ドラッグイベントの設定
border.addEventListener('mousedown', function(e) {
  e.preventDefault();
  startX = e.clientX;
  startY = e.clientY;
  startLeft = iframe.offsetLeft;
  startTop = iframe.offsetTop;
  isDragging = true;
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    var newLeft = startLeft + (e.clientX - startX);
    var newTop = startTop + (e.clientY - startY);
    iframe.style.left = newLeft + 'px';
    iframe.style.top = newTop + 'px';
  }
});

// HTMLに要素を追加
document.body.appendChild(iframe);
document.body.appendChild(border);
document.body.appendChild(closeButton);
document.body.appendChild(toggleButton);

// APIがセットされたことを示すフラグを立てる
window.gptApiSet = true;

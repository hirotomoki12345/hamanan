function executeCode(option) {
  const password = 'p-san';
  let isPasswordEntered = false;

  const minDelay = 15; // 最小待機時間
  const maxDelay = 50; // 最大待機時間

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

function checkOptionAndExecuteCode() {
  const option = prompt('実行するオプションを選んでください:\n1. short typing\n2. auto typing long');

  if (option === '1') {
    executeCode('short');
  } else if (option === '2') {
    executeCode('long');
  } else {
    alert('正しいオプションを選んでください');
    checkOptionAndExecuteCode(); // 正しいオプションが選択されるまで再帰的に処理を繰り返す
  }
}

checkOptionAndExecuteCode();

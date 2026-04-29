const playNative = document.getElementById('playNative');
const mainAction = document.getElementById('mainAction');

if (playNative) {
  playNative.addEventListener('click', () => {
    playNative.textContent = '❚❚';
    setTimeout(() => {
      playNative.textContent = '▶';
    }, 900);
  });
}

if (mainAction) {
  mainAction.addEventListener('click', () => {
    mainAction.textContent = 'Listening…';
    setTimeout(() => {
      mainAction.textContent = 'Try again';
    }, 1200);
  });
}

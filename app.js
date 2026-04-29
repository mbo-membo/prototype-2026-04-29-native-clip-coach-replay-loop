const mainAction = document.getElementById('mainAction');
const secondaryAction = document.getElementById('secondaryAction');
const skipAction = document.getElementById('skipAction');
const waveBars = document.getElementById('waveBars');
const waveLabel = document.getElementById('waveLabel');
const stateEyebrow = document.getElementById('stateEyebrow');
const stateTitle = document.getElementById('stateTitle');
const stateBadge = document.getElementById('stateBadge');
const stateCopy = document.getElementById('stateCopy');
const focusStatus = document.getElementById('focusStatus');
const focusText = document.getElementById('focusText');
const recoveryCard = document.getElementById('recoveryCard');
const peekHint = document.getElementById('peekHint');
const peekPanel = document.getElementById('peekPanel');
const replayFromRecovery = document.getElementById('replayFromRecovery');
const timelineAttempt = document.getElementById('timelineAttempt');
const timelinePinpoint = document.getElementById('timelinePinpoint');
const timelineRetry = document.getElementById('timelineRetry');

let step = 'entry';
let attemptCount = 0;

function setTimeline(current) {
  const map = {
    attempt: [timelineAttempt],
    pinpoint: [timelineAttempt, timelinePinpoint],
    retry: [timelineAttempt, timelinePinpoint, timelineRetry]
  };
  [timelineAttempt, timelinePinpoint, timelineRetry].forEach((item) => {
    item.classList.remove('active', 'done');
  });
  const items = map[current] || [];
  items.forEach((item, index) => item.classList.add(index === items.length - 1 ? 'active' : 'done'));
}

function renderEntry() {
  step = 'entry';
  stateEyebrow.textContent = 'Pronunciation coach';
  stateTitle.textContent = 'Now practice your pronunciation';
  stateBadge.textContent = 'Speak now';
  stateBadge.className = 'state-badge';
  stateCopy.textContent = 'Hold to speak. You’ll get one pinpointed pronunciation note and an immediate retry.';
  waveLabel.textContent = 'Hold to speak';
  waveBars.classList.remove('active');
  focusStatus.textContent = 'No issue flagged yet';
  focusText.innerHTML = 'If something trips you up, the coach will highlight just <strong>one word</strong> to fix.';
  recoveryCard.classList.add('hidden');
  secondaryAction.classList.add('hidden');
  mainAction.classList.remove('hidden');
  mainAction.textContent = 'Hold to speak';
  skipAction.textContent = 'Not now — just let me listen again';
  setTimeline('attempt');
}

function renderListening() {
  step = 'listening';
  stateEyebrow.textContent = 'Listening';
  stateTitle.textContent = 'Say the full line once';
  stateBadge.textContent = 'Mic on';
  stateBadge.className = 'state-badge warn';
  stateCopy.textContent = 'Keep going — natural pace matters more than perfection here.';
  waveLabel.textContent = 'Listening… release to submit';
  waveBars.classList.add('active');
  mainAction.textContent = 'Release to submit';
  recoveryCard.classList.add('hidden');
  setTimeline('attempt');
}

function renderFeedback() {
  step = 'feedback';
  stateEyebrow.textContent = 'Coach feedback';
  stateTitle.textContent = 'Nice rhythm. One word to clean up.';
  stateBadge.textContent = '1 pinpoint';
  stateBadge.className = 'state-badge';
  stateCopy.textContent = 'You landed most of it. The wobble is in one spot, not the whole phrase.';
  waveLabel.textContent = 'Your first attempt is in';
  waveBars.classList.remove('active');
  focusStatus.textContent = 'Flagged word: l’addition';
  focusText.innerHTML = 'Try <strong>l’addition</strong> again without pausing before the ending. Think lighter, more connected.';
  mainAction.classList.add('hidden');
  secondaryAction.classList.remove('hidden');
  secondaryAction.textContent = 'Try again with that one word in mind';
  setTimeline('pinpoint');
}

function renderSuccess() {
  step = 'success';
  stateEyebrow.textContent = 'Coach replay';
  stateTitle.textContent = 'Yes — that landed more cleanly.';
  stateBadge.textContent = 'Improved';
  stateBadge.className = 'state-badge success';
  stateCopy.textContent = 'That second rep sounded more connected on l’addition. This is the kind of progress learners should feel.';
  waveLabel.textContent = 'Second attempt improved';
  focusStatus.textContent = 'Improvement heard';
  focusText.innerHTML = 'The flagged word now sounds smoother. You could move on, or take one more rep if you want it to feel automatic.';
  secondaryAction.classList.remove('hidden');
  secondaryAction.textContent = 'Do one more confidence rep';
  mainAction.classList.add('hidden');
  recoveryCard.classList.add('hidden');
  setTimeline('retry');
}

function renderRecovery() {
  step = 'recovery';
  stateEyebrow.textContent = 'Recovery';
  stateTitle.textContent = 'Didn’t quite catch you.';
  stateBadge.textContent = 'Try again';
  stateBadge.className = 'state-badge warn';
  stateCopy.textContent = 'This needs a softer failure path than “wrong”. Give the learner an easy way back in.';
  waveLabel.textContent = 'No usable attempt captured';
  waveBars.classList.remove('active');
  focusStatus.textContent = 'No pinpoint yet';
  focusText.textContent = 'When the model is uncertain, the experience should offer help instead of pretending it knows.';
  mainAction.classList.remove('hidden');
  mainAction.textContent = 'Try speaking again';
  secondaryAction.classList.add('hidden');
  recoveryCard.classList.remove('hidden');
  setTimeline('attempt');
}

mainAction.addEventListener('click', () => {
  if (step === 'entry' || step === 'recovery') {
    renderListening();
    setTimeout(() => {
      attemptCount += 1;
      if (attemptCount === 1) renderFeedback();
      else renderSuccess();
    }, 1200);
  } else if (step === 'listening') {
    attemptCount += 1;
    if (attemptCount === 1) renderFeedback();
    else renderSuccess();
  }
});

secondaryAction.addEventListener('click', () => {
  if (step === 'feedback') {
    renderListening();
    setTimeout(() => {
      attemptCount = 2;
      renderSuccess();
    }, 1200);
  } else if (step === 'success') {
    renderEntry();
    attemptCount = 0;
  }
});

skipAction.addEventListener('click', () => {
  if (step === 'entry') {
    renderRecovery();
  } else {
    renderEntry();
    attemptCount = 0;
  }
});

peekHint.addEventListener('click', () => {
  peekPanel.classList.toggle('hidden');
  peekHint.textContent = peekPanel.classList.contains('hidden') ? 'Peek hint' : 'Hide hint';
});

replayFromRecovery.addEventListener('click', () => {
  renderEntry();
});

renderEntry();

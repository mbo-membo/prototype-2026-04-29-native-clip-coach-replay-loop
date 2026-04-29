# Prototype Handoff — Coach Replay Loop

## Identity
- slug: `prototype-2026-04-29-native-clip-coach-replay-loop`
- repo: `byob/prototypes/prototype-2026-04-29-native-clip-coach-replay-loop/`
- pages url: _to be published_
- source issue / transcript / bet: BYOB channel rerun synthesis 2026-04-29 → bet “Native Clip → Speak Back Coach”

## Concept summary
- one sentence: A short, supportive coach loop that triggers right after a native clip — the learner says the line back once, gets one pinpointed pronunciation note, and retries until the flagged word lands more cleanly.
- strongest job: build real speaking confidence for real life.
- bet being tested: pinpointed, supportive feedback inside a behavior learners already do will increase speaking attempts, retries, and confidence.

## What is in the prototype
- primary flow: entry invitation → hold-to-speak listening → coach feedback with one pinpointed word → retry → improvement signal.
- key screens: single mobile surface that morphs through five states inside the same coach card.
- important states:
  - Entry: native clip just played, soft prompt to try it back.
  - Listening: hold-to-speak, live waveform, release to submit.
  - Coach feedback: one warm sentence + one pinpointed word with a soft retry CTA.
  - Retry / improvement: same line attempted again, flagged word now shown as cleaner, with a supportive “yes, that’s it” signal.
  - Recovery: “didn’t quite catch you” path with replay-native, slower-playback, peek-hint, and a low-friction exit.

## Why this version exists
This replaces the earlier broader speaking-feedback concept under this slug. That version showed too many metrics and obscured the narrow Coach Replay Loop bet. This version strips the surface back to the single moment the team actually needs to debate.

## Review notes
- strongest part: the pinpoint → retry → visible improvement loop is explicit and playable.
- weakest part: the prototype assumes speech analysis can reliably localise to one word; that is the real technical risk.
- likely product debate:
  - one pinpoint vs multiple
  - whether the loop gates progression
  - tone of feedback when retry is not better
  - whether to surface a score at all
- what to test next: low-fi version on 2–3 native clips per lesson; measure attempt rate, retry rate, loop completion, and qualitative confidence reports.

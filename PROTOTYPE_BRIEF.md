# Prototype Brief — Coach Replay Loop

## Context
- Source: BYOB synthesis of recurring "speaking with no feedback" blocker (Thuy, Kunal, batch synthesis).
- Goal of the prototype: make the Coach Replay Loop concrete enough for PM, design, and engineering to debate — the tight moment right after a native clip where the learner tries to say it back and gets one supportive, pinpointed correction.
- Primary audience: Memrise product team (PM, design lead, learning lead, mobile engineer).
- Important constraints: must feel supportive not judgmental; must not bury the native clip; must show the hard moment, not just the happy path.
- New prototype or iteration on existing one?: iteration replacing the older broader concept in this slug with a tighter Coach Replay Loop direction.
- If iteration, which existing repo/path?: `byob/prototypes/prototype-2026-04-29-native-clip-coach-replay-loop/`
- Preferred slug / topic name: `prototype-2026-04-29-native-clip-coach-replay-loop`

## User/job framing
- Strongest job: build real speaking confidence for real life.
- Supporting jobs: trust that practice is working; know specifically what to fix; not feel embarrassed when trying out loud.
- Key struggle / unmet need: learners already imitate native clips, but get no trusted, pinpointed feedback. They walk away unsure if they said it right.
- What Memrise currently solves: exposure to real human speech and meaning recognition.
- What Memrise currently blocks: closing the speaking loop — confirming “yes, that landed” or “this one syllable is what’s tripping you up”.

## Product bet
- Bet name: Native Clip → Speak Back Coach (Coach Replay Loop variant).
- What should this prototype help us explore: whether a tight 3-step loop (hear native → say it back → one pinpoint + retry) feels supportive, useful, and worth doing more than once per session.
- What should the team react to: the tone of the feedback, the choice of one pinpointed note instead of a full scorecard, the retry affordance, and the recovery path when the learner freezes or the mic fails.

## Experience direction
- Primary user flow:
  1. Native clip just played inside an existing Memrise lesson card.
  2. Coach surface invites a single speaking attempt.
  3. User holds to speak; live waveform; release to submit.
  4. Coach returns one warm overall reaction + one pinpointed pronunciation highlight.
  5. User retries the same line; coach shows an explicit improvement signal.
  6. User can replay native, slow it down, peek at a hint, or skip.
- Key screens / pages: single mobile surface with state transitions (entry → listening → coach feedback → retry → improvement).
- Important states:
  - entry / invitation
  - active listening (recording)
  - feedback with pinpointed note
  - retry success (improvement signal)
  - recovery: didn’t catch / hesitation / “I’m not ready”
- What should feel simple / magical / reassuring: only one thing to fix at a time; the retry feels like a friend nodding “yes, better”.
- What is the hardest UX moment this prototype must actually solve: making “you said this part wrong” feel encouraging instead of demoralising, and making the improvement on retry obvious so the learner trusts the loop.
- What error / hesitation / fallback state must be shown: the “didn’t catch you / try again or just listen once more” state when the user freezes or the mic returns nothing useful.

## Visual / brand direction
Use `byob/MEMRISE_DESIGN_GUIDELINES.md`.
- warm cream surface, dark navy text, yellow primary CTA
- Boing-style display feel via Fredoka, Open Sans for body
- roomy, friendly, single-focus layout — no dashboards

## Output requirements
- Built as a single static prototype page with light JS state transitions.
- Conversation-starting fidelity, not production design.
- Paired with `PROTOTYPE_HANDOFF.md`.

## Open questions
- Is one pinpoint per attempt the right dose, or do learners want two?
- Does the loop need to gate progression, or stay opt-in?
- How do we handle phrases longer than ~6 words without overwhelming the coach card?
- What’s the right tone when the second attempt is not better?
- Should the pinpointed note ever be phoneme-level, or always the whole word?

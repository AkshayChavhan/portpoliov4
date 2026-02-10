# Contact Form

## What
A full-featured contact form with Formspree backend integration, state machine for submission states, validation, and sound feedback.

## How It Works

### Form State Machine
```
idle → submitting → success → idle (after 5s)
idle → submitting → error → idle (after 4s)
```

| State | Button Text | Icon | Sound |
|-------|-----------|------|-------|
| `idle` | Send Message | `Send` | Click beep |
| `submitting` | Sending... | `Loader2` (spinning) | — |
| `success` | Message Sent! | `CheckCircle` | Success beep (dual tone) |
| `error` | Try Again | `Send` | Error beep (low tone) |

### Formspree Integration
- `POST` to `FORMSPREE_ENDPOINT` with JSON body
- Fields: name, email, subject, message
- User needs to replace `YOUR_FORM_ID` in `lib/constants.ts` with real Formspree ID

### Form Layout
- Two-column grid on desktop (3:2 ratio using `lg:grid-cols-5`)
- Left (3 cols): Form with Name/Email side-by-side, Subject, Message, Send button
- Right (2 cols): Contact info card, social links card, "Schedule a Call" CTA

### Sound Feedback
- `playClickBeep()` on form submit
- `playSuccessBeep()` on successful submission (dual ascending tone)
- `playErrorBeep()` on failed submission (low tone)

## Dark Mode
- Form card uses `var(--card-bg)` and `var(--border)`
- Input focus glow uses accent color
- "Schedule a Call" gradient CTA stays accent-colored

## File Path
`src/components/sections/ContactSection.tsx`

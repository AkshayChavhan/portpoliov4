# Click Feedback & Beep Sounds

## What
Every interactive element provides tactile click feedback through visual scale changes and audible beep sounds using the Web Audio API.

## Visual Feedback
- **Buttons**: `scale: 0.98` on tap via Framer Motion `whileTap`
- **Cards**: `scale: 0.97` on mobile tap
- **All interactive elements**: Brief shadow reduction on press to simulate depth

## Sound System (`lib/sounds.ts`)

### How It Works
1. Creates a shared `AudioContext` instance (singleton pattern)
2. `playBeep(frequency, duration, volume)` creates an oscillator + gain node
3. Oscillator generates sine wave at specified frequency
4. Gain node controls volume with exponential ramp-down to avoid click artifacts
5. Sound plays for specified duration then auto-stops

### Sound Variants
| Function | Frequency | Duration | Volume | Used For |
|---------|----------|---------|--------|---------|
| `playClickBeep()` | 800 Hz | 50ms | 0.08 | Button clicks, nav links |
| `playHoverBeep()` | 600 Hz | 30ms | 0.04 | Hover interactions (not used yet) |
| `playSuccessBeep()` | 1200→1600 Hz | 80ms×2 | 0.10 | Form success |
| `playErrorBeep()` | 300 Hz | 150ms | 0.10 | Form error |
| `playToggleBeep()` | 1000 Hz | 40ms | 0.06 | Theme toggle |

### Key Decision
Web Audio API chosen over audio files because:
- Zero loading time (generated in real-time)
- Tiny code footprint (~60 lines)
- Precise control over frequency, duration, volume
- No network requests

## File Path
`src/lib/sounds.ts`

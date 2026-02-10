/**
 * Sound utility for interaction feedback beeps.
 * Uses the Web Audio API to generate short beep sounds
 * on user interactions like button clicks, form submissions, etc.
 */

let audioContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
  }
  return audioContext;
}

export function playBeep(
  frequency: number = 800,
  duration: number = 50,
  volume: number = 0.1
): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  gainNode.gain.value = volume;

  // Quick fade out to avoid click
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);

  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + duration / 1000);
}

// Pre-configured beep variants for different interactions
export function playClickBeep(): void {
  playBeep(800, 50, 0.08);
}

export function playHoverBeep(): void {
  playBeep(600, 30, 0.04);
}

export function playSuccessBeep(): void {
  playBeep(1200, 80, 0.1);
  setTimeout(() => playBeep(1600, 80, 0.1), 100);
}

export function playErrorBeep(): void {
  playBeep(300, 150, 0.1);
}

export function playToggleBeep(): void {
  playBeep(1000, 40, 0.06);
}

'use client';

import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'Asia/Kolkata',
});

/**
 * Current time in Pune (IST), followed by a separator, e.g. "3:42 PM IST · ".
 * Renders nothing until mounted so server and client HTML match.
 */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();
    // Tick on the minute boundary, then every minute.
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      update();
      interval = setInterval(update, 60_000);
    }, 60_000 - (Date.now() % 60_000));
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, []);

  if (!time) return null;

  return (
    <>
      <time suppressHydrationWarning>{time} IST</time>
      <span aria-hidden="true">&middot;</span>
    </>
  );
}

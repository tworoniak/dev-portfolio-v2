import { useEffect, useRef, useState } from 'react';

type Phase = 'typing' | 'pausing' | 'deleting' | 'waiting';

type UseTypewriterOptions = {
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
  waitMs?: number;
};

type UseTypewriterResult = {
  displayText: string;
  isTyping: boolean;
};

export function useTypewriter(
  titles: string[],
  {
    typeSpeed = 70,
    deleteSpeed = 35,
    pauseMs = 1800,
    waitMs = 400,
  }: UseTypewriterOptions = {}
): UseTypewriterResult {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<Phase>('typing');
  const [titleIndex, setTitleIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = titles[titleIndex];

    const clear = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    if (phase === 'typing') {
      if (displayText.length < current.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('pausing'), pauseMs);
      }
    } else if (phase === 'pausing') {
      timeoutRef.current = setTimeout(() => setPhase('deleting'), 0);
    } else if (phase === 'deleting') {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      } else {
        timeoutRef.current = setTimeout(() => setPhase('waiting'), waitMs);
      }
    } else if (phase === 'waiting') {
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setPhase('typing');
    }

    return clear;
  }, [displayText, phase, titleIndex, titles, typeSpeed, deleteSpeed, pauseMs, waitMs]);

  return { displayText, isTyping: phase === 'typing' || phase === 'deleting' };
}

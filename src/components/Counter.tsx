import { useState, useEffect } from "react";
import { useInView } from "../hook";

interface CounterProps {
  target: number;
  suffix: string;
}

export default function Counter({ target, suffix }: CounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView(0.5);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(t);
      } else {
        setCount(start);
      }
    }, 20);
    return () => clearInterval(t);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="text-6xl font-black tabular-nums leading-none"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      {count}{suffix}
    </div>
  );
}
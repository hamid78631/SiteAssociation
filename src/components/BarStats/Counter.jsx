import React, { useEffect, useState } from 'react';

export default function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    },10);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}

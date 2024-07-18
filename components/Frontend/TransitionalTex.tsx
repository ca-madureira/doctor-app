'use client';
import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

export default function TransitionalText({
  TEXTS,
  className,
}: {
  TEXTS: string[];
  className: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </h1>
  );
}

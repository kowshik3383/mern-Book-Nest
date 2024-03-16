import React, { useEffect, useState } from 'react';

const Text = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const textToGenerate = 'Your text here'; // The text you want to generate

  useEffect(() => {
    const timer = setInterval(() => {
      if (index < textToGenerate.length) {
        setText((prevText) => prevText + textToGenerate[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust the delay between each letter (in milliseconds)
    return () => clearInterval(timer);
  }, [index, textToGenerate]);

  return (
 
  );
};

export default Text;

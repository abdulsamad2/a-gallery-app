'use client'
import React, { useEffect, useState } from 'react';
import TypingAnimator from 'react-typing-animator';

interface WordsProps {
  words: string[];
}


function WordTyping({ words }: WordsProps): JSX.Element {
  const [isLoading,setisLoading] =useState(true)
  useEffect(()=>{
    setisLoading(false)
  },[])
  if(isLoading){
    return <></>;
  }
  return (
    <TypingAnimator
      textArray={words}
      cursorColor="#333"
      textColor="#555"
     
      loop
      typingSpeed={60}
      delaySpeed={1000}
      backspace
      height="60px"
    />
  );
}

export default WordTyping;

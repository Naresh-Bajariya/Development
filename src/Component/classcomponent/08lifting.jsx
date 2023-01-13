import React, { useState } from 'react'
import Childlifting from './08.1childlifting';

export default function Lifting(props) {
 // Child To Parent
 const [word, setWord] = useState('');
 const [parentToChild, setParentToChild] = useState('');
 const handleChildToParent = (words) => setWord(words);

 // Parent To Child
 const handleParentToChild = () => {
   setParentToChild('This data is coming from Parent');
 };


  return (
    <>
      <h1>"Parent Data"</h1>
      <h2>{word}</h2>
      <button onClick={handleParentToChild}>Data Parent To Child</button>

      {/* ---------------- child component -------------- */}

      <Childlifting
        // Without button Working Fine
        //---------- parent button click function child element {props.dataParentToChild} print---------

        dataParentToChild={parentToChild}
        
        // With button Working Fine
        dataChildToParent={handleChildToParent}
      /> 
    </>
  )
}

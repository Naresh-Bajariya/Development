import React from 'react';

const Childlifting = (props) => {
   // Parent To Child
  const handleChildToProp = () => {
    props.dataChildToParent('This data is coming from Child');
  };

  return (
    <>
      <h1>"Child Components"</h1>
      <h2>{props.dataParentToChild}</h2>
      <button onClick={handleChildToProp}>Data Child To Parent</button>
    </>
  );
};

export default Childlifting;
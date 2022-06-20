import React from "react";

const CallingButton =({onClick,color,text})=>{
  return (
    <button onClick={onClick} className={`ui ${color} button`}>{text}</button>
  )
};
export default CallingButton;

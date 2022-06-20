import React from "react";

const CustomButton =({idType,onClick,color,text,buttonType})=>{
 return (
     <button id={idType} onClick={onClick} className={`ui ${color} button ${buttonType}`} >{text}</button>
 )
}
export default CustomButton;
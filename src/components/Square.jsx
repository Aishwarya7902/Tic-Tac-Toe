import { useState } from "react"
import '../App';
export default function Square({value,onSqureClick}){
    
    
    return <>
       <button className="square" onClick={onSqureClick}>
         {value}
       </button>
    </>
}
"use client"

import { useState } from "react"

export default function ButtonNumber(){
    const [number,setNumber] = useState(1)

    
    return(
        <button onClick={()=>setNumber(number+1)}>
        click me! {number}                                      
        </button>
    )
}
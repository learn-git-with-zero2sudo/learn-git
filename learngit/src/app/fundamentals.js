import React from "react"
import getBullets from "./editablefiles/bullets"
export default function Fundamentals() {
    const data =getBullets()
    return(
    <ul>
    {data.map((item) => (
        <li>{item}</li>
    ))}
    </ul>
    )
    }



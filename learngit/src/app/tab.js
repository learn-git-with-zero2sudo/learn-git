//import { useState } from "react";
import vanilla from './vanillacss.css'
import Fundamentals from "./fundamentals";
import QuizQuestion from "./quizQuestion";
export default function Tab(props) {
    console.log(props.isFundamentalsPage)
if(props.isFundamentalsPage){
    return(<div>
    <h2 class="title1">Git Fundamentals</h2>
    <Fundamentals/>
</div>
    )
}
else{
    return(<div className='tab'>
    <QuizQuestion/>
    </div>)
}
}

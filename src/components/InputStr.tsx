import { useState } from "react";
import { calculateLCS } from "../functions/calcuateLCS";
import { Answer } from "./Answer";

export const InputStr = () => {
    const [str1, setStr1] = useState('');
    const [str2, setStr2] = useState('');

    const [isAnswer, setIsAnswer] = useState(false);
    const [answer, setAnswer] = useState('');

    const onCalLcsClick = () => {
        const newAnswer = calculateLCS(str1, str2);
        if (newAnswer) {
            setAnswer(newAnswer);
            setIsAnswer(true);
        }
    }

    return (
        <>
            <div className="Str">
                <span>str1 ： </span>
                <input type="text" onChange={(e) => {setStr1(e.target.value)}}/>
            </div>
            <div className="Str">
                <span>str2 ： </span>
                <input type="text" onChange={(e) => {setStr2(e.target.value)}}/>
            </div>
            <div className="Answer">
                <button className="AnswerButton" onClick={onCalLcsClick}>計算する</button>
            </div>
            {/* {isAnswer ? <div>{`=> ${answer.length} (最長共通部分列: "${answer}")`}</div> : null} */}
            {isAnswer ? <Answer str1={str1} str2={str2} lenAns={answer.length} answer={answer}/> : null}
        </>
    )
}
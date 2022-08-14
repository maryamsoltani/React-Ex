import "./eightBall.css";
import React, { useState } from "react";

function EightBall(props) {
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");
    const [redCount, setRedCount] = useState(0);
    const [greenCount, setGreenCount] = useState(0);
    const [goldCount, setGoldCount] = useState(0);

    function getAnswer() {
        let ind = Math.floor(Math.random() * props.answers.length);
        setMsg(props.answers[ind].msg);
        setColor(props.answers[ind].color);
        return props.answers[ind];
    }

    function resetBall() {
        setMsg("Think of a Question");
        setColor("black");
        setRedCount(0);
        setGreenCount(0);
        setGoldCount(0);
    }

    function colorCount(answer) {
        if (answer.color === "red") {
            setRedCount(redCount + 1);
        } else if (answer.color === "green") {
            setGreenCount(greenCount + 1);
        } else if (answer.color === "goldenrod") {
            setGoldCount(goldCount + 1);
        }
    }

    function handleClick() {
        let answer = getAnswer();
        colorCount(answer);
    }

    return (
        <>
            <div id="eightBall" onClick={() => handleClick()} style={{ backgroundColor: color }}>
                {msg}
            </div >
            <button onClick={() => resetBall()}>Reset</button>
            <table>
                <thead>
                    <tr>
                        <th>Red</th>
                        <th>Green</th>
                        <th>Goldenrod</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {redCount}
                        </td>
                        <td>
                            {greenCount}
                        </td>
                        <td>
                            {goldCount}
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default EightBall;
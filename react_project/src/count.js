import React, { useState } from "react";
import "./count.css";

function Counting(items) {
    const [count, setCount] = useState(items.count);

    const handleIncrease = () => {
        if (count < 10) {
            setCount(count + 1);
            items.onCountChange(count + 1);
        }
        else {
            alert("Cannot Vote more!!!");
        }
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
            items.onCountChange(count - 1);
        }
        else {
            alert("Cannot Unvote!");
        }
    };

    let count_time = () => {
        if (count == 0) {
            return "MIN";
        }
        else if (count == 10) {
            return "MAX";
        }
        return count;
    };

    return (
        <div className="buttons">
            <button className="vote" onClick={handleIncrease}>Click to Vote</button>
            <h2 className="count">{count_time()}</h2>
            <button className="vote" onClick={handleDecrease}>Click to Unvote</button>
        </div>
    );
}

export default Counting;
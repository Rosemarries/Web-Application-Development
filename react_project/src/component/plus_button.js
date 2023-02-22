import React from 'react';

const PlusButton = ({ count, increaseCount }) => {
    return (
        <button className="vote" onClick={() => {
            if(count < 10){
                increaseCount(count + 1)
            }
            else {
                alert("Cannot Vote more!!!");
            }
        }}>Click to Vote</button>
    )
};

export default PlusButton;
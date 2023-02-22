import React from 'react';

const MinusButton = ({ count, decreaseCount }) => {
    return (
        <button className="vote" onClick={() => {
            if(count > 0){
                decreaseCount(count - 1)
            }
            else {
                alert("Cannot Unvote!");
            }
        }}>Click to Unvote</button>
    )
}

export default MinusButton;
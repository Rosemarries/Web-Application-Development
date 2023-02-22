import React from "react";

function Counter({count}) {
    let count_time = () => {
        console.log(count);
        if (count <= 0) {
            count = 0;
            return "MIN";
        }
        else if (count >= 10) {
            count = 10;
            return "MAX";
        }
        return count;
    };

    return (
        <h2 className='count'>{count_time()}</h2>
    );
}

export default Counter;
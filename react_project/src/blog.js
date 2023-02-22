import React, { useState } from 'react';
import "./blog.css";

import PlusButton from './component/plus_button';
import MinusButton from './component/minus_button';

function Blog(food) {
    let [count, setCount] = useState(0);

    const handleCountChange = (newCount) => {
        setCount(newCount);
    };

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
        <div className="blog">
            <div className="food_blog">
                <div className="about_food">
                    <h2>{food.category}</h2>
                    <h3>{food.title}</h3>
                    <p>{food.info}</p>
                </div>
                <div className="pic">
                    <img src={food.pic}></img>
                </div>
            </div>

            <div className='buttons'>
                <PlusButton count={count} increaseCount={handleCountChange} />
                <h2 className='count'>{count_time()}</h2>
                <MinusButton count={count} decreaseCount={handleCountChange} />
            </div>
        </div>
    );
}

export default Blog;
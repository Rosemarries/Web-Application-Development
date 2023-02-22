import React, { useState } from 'react';
import "./blog.css";

import Counter from './component/counter';
import PlusButton from './component/plus_button';
import MinusButton from './component/minus_button';

function Blog(food) {
    let [count, setCount] = useState(0);

    const handleCountChange = (newCount) => {
        setCount(newCount);
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
                <Counter count={count} />
                <MinusButton count={count} decreaseCount={handleCountChange} />
            </div>
        </div>
    );
}

export default Blog;
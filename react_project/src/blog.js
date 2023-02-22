import React, { useState } from 'react';
import "./blog.css";
import Counting from "./count.js";

function Blog(food) {
    const [count, setCount] = useState(0);

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
            <Counting count={count} onCountChange={handleCountChange} />
        </div>
    );
}

export default Blog;
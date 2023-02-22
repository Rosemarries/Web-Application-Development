import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from "./blog.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <Blog category="อาหารคาว" 
          title="ข้าวผัด" 
          info="Lorem ipsum dolor sit amet. At illum aspernatur qui consequatur fuga aut aliquid alias rem sunt cupiditate. Et dolores voluptatem non ratione quam ut cupiditate eaque non quia dolor ea iusto nemo eos voluptas exercitationem rem excepturi quisquam. Ut galisum consequatur aut voluptatibus fugit ex voluptatem enim eos Quis dolor sit itaque atque." 
          pic="https://www.ajinomoto.co.th//storage/photos/shares/our-story/tips/friedrice/62ff47ff5a301.jpg" />
    <Blog category="อาหารหวาน" 
          title="บัวลอย" 
          info="Lorem ipsum dolor sit amet. At illum aspernatur qui consequatur fuga aut aliquid alias rem sunt cupiditate. Et dolores voluptatem non ratione quam ut cupiditate eaque non quia dolor ea iusto nemo eos voluptas exercitationem rem excepturi quisquam. Ut galisum consequatur aut voluptatibus fugit ex voluptatem enim eos Quis dolor sit itaque atque." 
          pic="http://lamphuonline.com/images/00-2022/bua-loi-kaiwan.jpg" />
  </div>
);

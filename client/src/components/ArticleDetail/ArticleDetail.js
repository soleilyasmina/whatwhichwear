import React from 'react';
import './ArticleDetail.css';

const ArticleDetail = ({ article }) => {
  return (
    <div className="ArticleDetail">
      <img src={require('../../assets/cat.png')} alt={article.description}/>
      <h3>{`${article.color} ${article.brand} ${article.type}`}</h3>
      <p>{article.description}</p>
      <p>You've worn this {article.times_worn} times.</p>
      <p>Fit: {article.fit}</p>
      <p>Season: {article.season}</p>
      <p>Occasion: {article.occasion}</p>
    </div>
  )
}

export default ArticleDetail;

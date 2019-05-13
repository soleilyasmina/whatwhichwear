import React from 'react';
import './ArticleItem.css';

// small version of article for articlelist 
const ArticleItem = ({ article, setCurrentArticle }) => {
  return (
    <div className="ArticleItem" onClick={() => setCurrentArticle(article)}>
      <img src={require('../../assets/cat.png')} alt={article.description} />
      <p>{`${article.color} ${article.brand} ${article.type}`}</p>
    </div>
  )
}

export default ArticleItem;

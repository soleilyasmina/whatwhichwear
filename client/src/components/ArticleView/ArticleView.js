import React from 'react';
import ArticleList from '../ArticleList/ArticleList';

const ArticleView = ({ articles }) => {
  return (
    <ArticleList articles={articles}/>
  )
}

export default ArticleView;

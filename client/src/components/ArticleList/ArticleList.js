import React, { Fragment } from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

const ArticleList = ({ articles, setCurrentArticle }) => {
  return (
    <Fragment>
      { articles.map((article, index) => {
        return (
          <ArticleItem key={index} article={article} setCurrentArticle={setCurrentArticle} />
        )
      }) } 
    </Fragment>
  )
}

export default ArticleList;

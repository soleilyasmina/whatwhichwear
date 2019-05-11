import React, { Fragment } from 'react';
import ArticleItem from '../ArticleItem/ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <Fragment>
      { articles.map((article, index) => {
        return (
          <ArticleItem key={index} article={article} />
        )
      }) } 
    </Fragment>
  )
}

export default ArticleList;

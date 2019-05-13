import React, { Fragment, useState } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const ArticleView = ({ articles }) => {
  const [currentArticle, setCurrentArticle] = useState(null);
  return (
    <Fragment>
    {
      currentArticle ?
      <ArticleList articles={articles} setCurrentArticle={setCurrentArticle}/> :
      <ArticleDetail article={currentArticle} />
    }
    </Fragment>
  )
}

export default ArticleView;

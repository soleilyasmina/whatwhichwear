import React, { Fragment, useState } from 'react';
import ArticleList from '../ArticleList/ArticleList';
import ArticleDetail from '../ArticleDetail/ArticleDetail';

const ArticleView = ({ articles }) => {
  const [currentArticle, setCurrentArticle] = useState(null);
  return (
    <Fragment>
    {
      currentArticle ?
      <ArticleDetail article={currentArticle} /> :
      <ArticleList articles={articles} setCurrentArticle={setCurrentArticle}/>
    }
    </Fragment>
  )
}

export default ArticleView;

import React, { useEffect, useState } from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;

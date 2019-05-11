import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleList from './components/ArticleList/ArticleList';
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      let resp = await axios.get('http://localhost:3001/articles');
      setArticles(resp.data);
    }
    getArticles();
  }, []);

  return (
    <div className="App">
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;

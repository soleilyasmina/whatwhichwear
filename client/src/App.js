import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import ArticleView from './components/ArticleView/ArticleView';
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
      <Route exact path="/" component={() => (<h1>Home</h1>)} />
      <Route path="/articles" component={() => (
        <ArticleView articles={articles}/>
      )}/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>
    </div>
  );
}

export default App;

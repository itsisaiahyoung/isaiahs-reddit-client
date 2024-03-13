import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Search from './components/Search/Search';
import Post from './components/Post/Post';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './Store.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Main />} />
          <Route path="/post/:postId" element={<Post />} />
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;

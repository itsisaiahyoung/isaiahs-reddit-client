import './App.css';
import React from 'react';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Provider } from 'react-redux';
import store from './Store.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Main />
    </div>
    </Provider>
  );
}

export default App;

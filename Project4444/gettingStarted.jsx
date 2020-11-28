import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';


import Example from './components/example/Example';
import Header from './components/header/header';

ReactDOM.render(
  <div>
    <div>
        <Header/>
    </div>
        <Example />
  </div>,
  document.getElementById('reactapp'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from'./components/STORE';

ReactDOM.render(<App STORE={STORE}/>, document.getElementById('root'));
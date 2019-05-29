import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'; // tutaj bez froma


//Chcemy wrzucic <div>App w miejsce gdzie jest 'root'
ReactDOM.render(<App></App>,  document.getElementById('root')); // to nie jest html lecz JSX (javaScriptXML) ktory  jest po prostu troche podobny



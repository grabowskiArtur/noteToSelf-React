import React from 'react';
import ReactDOM from 'react-dom';
import App, {color, number} from './components/App';


//Chcemy wrzucic <div>App w miejsce gdzie jest 'root'
ReactDOM.render(<App></App>,  document.getElementById('root')); // to nie jest html lecz JSX (javaScriptXML) ktory
// jest po
// prostu// troche podobny

/*
console.log(color,number);*/

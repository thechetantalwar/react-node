import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firstelement = <h1>Hello From Element </h1>
class Msg extends React.Component{
  render(){
    return <h2>Hello from Class</h2>
  }
}
function Msg2() {
  return <h2>Hello from Function</h2>
}

ReactDOM.render(<Msg />,document.getElementById('root'))
ReactDOM.render(firstelement,document.getElementById('element'))
ReactDOM.render(<Msg2 />, document.getElementById('func'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

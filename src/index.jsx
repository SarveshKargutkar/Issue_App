import React from 'react'
import ReactDOM from 'react-dom';
import './css/app.css';
import Login from './components/login'

class Main extends React.Component {


  render() {
    return (
      <Login />
    )
  }
}

ReactDOM.render(
  <Main />
  , document.getElementById('root'));
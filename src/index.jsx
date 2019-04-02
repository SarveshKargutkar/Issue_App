import React from 'react'
import ReactDOM from 'react-dom';
import './css/app.css';
import { Router, Route } from "react-router-dom";
import history from './history';
import Login from './components/login'
import MainPage from './components/mainPage'
import store from './store'
import { Provider } from 'react-redux'
import AddIssue from './components/addIssueContainer'
import Issue from './components/issueContainer'
import tags from './components/tagsContainer'

class Index extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path='/' component={Login}></Route>
            <Route path='/mainpage' component={MainPage}></Route>
            <Route path='/addissue' component={AddIssue}></Route>
            <Route path='/issue' component={Issue}></Route>
            <Route path='/tags' component={tags}></Route>
          </div>
        </Router>
      </Provider>


    )
  }
}

ReactDOM.render(
  <Index />
  , document.getElementById('root'));
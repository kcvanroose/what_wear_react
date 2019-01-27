import React, { Component } from 'react';
import Nav from './components/Nav'
import { Route, withRouter} from 'react-router-dom'
import API from './API'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {

  state={
    currentUser: '',
    outfitList: [],
    brandList: [],
    colorList: [],
    categoryList: []
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
      if (token) {
        API.validate(token)
      } else {
        this.props.history.push('/login')
      }
  }

  setItemData = () => {

  }
  

  render() {
    return (
      <div>
         <header>
           Logo
         </header>
        <Route exact path='/' component={ () => <Home /> } />
        <Route path='/login' component={ () => <Login /> } />
       
       
        <Nav />
        
      </div>
    )
  }
}

export default withRouter(App);

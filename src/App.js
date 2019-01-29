import React, { Component } from 'react';
import Nav from './components/Nav'
import { Route, withRouter} from 'react-router-dom'
import API from './API'
import Login from './components/Login'
import Home from './components/Home'

class App extends Component {

  state={
    currentUser: '',
    currentId: '',
    outfitList: [],
    brandList: [],
    colorList: [],
    categoryList: [],
    items: []
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
      if (token) {
        API.validate(token)
      } else {
        this.props.history.push('/login')
      }
  }

  setItemData = (data) => {
    if (data) {
     this.setState({
      currentUser: data.user.username,
      currentId: data.user.id,
      outfitList: data.user.oufits,
      items: data.user.items
      })
      this.setBrandData()
      this.setCategoryData()
      this.setColorData()
      this.setOutfitData(data)
    } else {
      console.log('no data received')
    }
  }

  setBrandData = () => {
    if (this.state.items.length > 0) {
      const brands = this.state.items.map(item => item.brand)
      const uniqueBrandList = brands.reduce((uniqueArray, brand) => {
        if (uniqueArray.map(brand => brand).includes(brand)) return uniqueArray
        uniqueArray.push(brand)
        return uniqueArray
      }, [])
      this.setState({brandList: uniqueBrandList})
      } else {
        console.log('no brand data found')
      }
  }

  setCategoryData = () => {
    if (this.state.items.length > 0) {
      const categories = this.state.items.map(item => item.category.name)
      const uniqueCategoryList = categories.reduce((uniqueArray, category) => {
        if (uniqueArray.map(category => category).includes(category)) return uniqueArray
        uniqueArray.push(category)
        return uniqueArray
      }, [])
      this.setState({categoryList: uniqueCategoryList})
    } else {
      console.log('no categories found')
    }
  }
  
  setColorData = () => {
    if (this.state.items.length > 0) {
      const colors = this.state.items.map(item => item.color)
      const uniqueColorList = colors.reduce((uniqueArray, color) => {
        if (uniqueArray.map(color => color).includes(color)) return uniqueArray
        uniqueArray.push(color)
        return uniqueArray
      }, [])
      this.setState({colorList: uniqueColorList})
    } else {
      console.log('no colors found')
    }
  }
  
  setOutfitData = (data) => {
    if (data.user.outfits.length > 0) {
      this.setState({outfitList: data.user.outfits})
      console.log(data.user.outfits)
    } else {
      console.logs('no outfits found')
    }
  }
  
  render() {
    return (
      <div>
         <header>
           Logo
         </header>
        <Route exact path='/' component={ () => <Home /> } />
        <Route path='/login' component={ () => <Login setData={this.setItemData} /> } />
       
       
        <Nav />
        
      </div>
    )
  }
}

export default withRouter(App);

import React from 'react'
import API from '../API'

class Login extends React.Component {

    state={
        username: '',
        password: ''
    } 
    
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        API.login(this.state.username, this.state.password)
        .then(data => {
            if (data.error) {
                console.log(data)
            } else {
                localStorage.setItem('token', data.jwt)
                this.props.setData(data)
                console.log(data)
            }
        })
    }

    render() {
        return(
            <div className="row">
                <div className="small-12 columns">
                    <form> 
                        <label>Username
                            <input type="text" name="username" onChange={this.handleChange}/>
                        </label>
                        <label>Password
                            <input type="password" name="password" onChange={this.handleChange}/>
                        </label>
                        <button onClick={(event) => this.handleSubmit(event) } className="button">Submit</button>
                        <span> or </span><a>Create an account</a>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
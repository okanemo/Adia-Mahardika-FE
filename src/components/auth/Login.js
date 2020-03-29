import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount(){
        if(localStorage.getItem('token')){
            this.props.history.push('/');
        }
    }

    onChange = (event) => {
        this.setState({ [event.target.name] : event.target.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        axios
            .post("http://localhost:5000/user/login", this.state)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('token', response.data.result.token);
                localStorage.setItem('user-id', response.data.result.id);
                localStorage.setItem('status', response.data.result.status);
                localStorage.setItem('isAuth', true);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        return(
            <div className="container">
                <h4 style={{ marginTop: '10px' }} align='center' style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif', fontSize:'20px', padding:'10px', color: '#4285f4', fontSize:'50px'}}>The Mahardika FnB</h4>
                <div className="row justify-content-md-center">
                    <div className="col-md-8">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={this.onChange} required/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.onChange} required/>
                            </div>
                            <button type="submit" className="btn btn-primary" align='right'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
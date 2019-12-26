import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            member_username: '',
            member_password: '',
        }
    }

    onChangeMemberUsername = (e) => {
        this.setState({
            member_username: e.target.value
        })
    }

    onChangeMemberPassword = (e) => {
        this.setState({
            member_password: e.target.value
        })
    }

    addMember = (e) => {
        e.preventDefault()

        const newMember = {

            username: this.state.member_username,
            password: this.state.member_password,
        }
        console.log(newMember)

        axios.post("http://localhost:1323/member/login", newMember)
            .then(res => {
                alert(res.data)
                if (res.data.username === newMember.username) {
                    this.props.dispatch({
                        type: "USER_LOGIN",
                        user_id: res.data.id,
                        username: res.data.username
                    })
                    console.log(this.props.isLogin)
                    this.props.history.push('/')
                } else {
                    this.props.history.push('/login')
                }

            })

        this.setState({
            member_username: '',
            member_password: '',

        })
    }

    render() {
        return (
            <div className="container cap">
                <body class="text-center">
                    <form class="form-signin">
                        <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal" >Please sign in</h1>
                        <label for="inputUsername" class="sr-only">Username</label>
                        <input type="text" id="inputEmail" class="form-control" placeholder="Username" required="" autofocus="" onChange={this.onChangeMemberUsername} />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={this.onChangeMemberPassword} />
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
    </label>
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.addMember} >Sign in</button>
                        <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
                    </form >


                </body >
            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isLogin: state.isLoggin
    }
}
export default connect(mapStateToProps)(Login)
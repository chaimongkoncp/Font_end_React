import React, { Component } from 'react'
import axios from 'axios';

export default class AddPage extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            member_id: '',
            member_username: '',
            member_password: '',
            member_fisrtname: '',
            member_lastname: '',
            member_email: '',
            member_phone: '',
        }
    }

    onChangeMemberId = (e) => {
        this.setState({
            member_id: e.target.value
        })
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

    onChangeMemberFisrtname = (e) => {
        this.setState({
            member_fisrtname: e.target.value
        })
    }
    onChangeMemberLastname = (e) => {
        this.setState({
            member_lastname: e.target.value
        })
    }
    onChangeMemberEmail = (e) => {
        this.setState({
            member_email: e.target.value
        })
    }
    onChangeMemberPhone = (e) => {
        this.setState({
            member_phone: e.target.value
        })
    }
    addMember = (e) => {
        e.preventDefault()

        const newMember = {
            
            username: this.state.member_username,
            password: this.state.member_password,
            fisrtname: this.state.member_fisrtname,
            lastname: this.state.member_lastname,
            email: this.state.member_email,
            phone: this.state.member_phone,
        }

        console.log(newMember)

        axios.post("http://localhost:1323/member/add", newMember)
        .then(res => {
            alert(res.data)
            this.props.history.push('/')
        })

        this.setState({
            member_id: '',
            member_username: '',
            member_password: '',
            member_fisrtname: '',
            member_lastname: '',
            member_email: '',
            member_phone: '',
        })
    }

    render() {
        return (
            <div className="container cap">
                <body class="text-center ">
                    <form class="form-signin">
                        <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
                        <label for="Username" class="sr-only">Username</label>
                        <input type="text" id="textPassword" class="form-control" placeholder="USERNAME" required="" onChange={this.onChangeMemberUsername} />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="text" id="textPassword" class="form-control" placeholder="PASSWORD" required="" onChange={this.onChangeMemberPassword} />
                        <label for="textFisrtname" class="sr-only">FisrtName</label>
                        <input type="text" id="name" class="form-control" placeholder="FISRT_NAME" required="" autofocus="" onChange={this.onChangeMemberFisrtname} />
                        <label for="inputLastName" class="sr-only">LastName</label>
                        <input type="text" id="text" class="form-control" placeholder="LAST_NAME" required="" onChange={this.onChangeMemberLastname} />
                        <label for="textEmail" class="sr-only">Email</label>
                        <input type="text" id="name" class="form-control" placeholder="EMAIL" required="" autofocus="" onChange={this.onChangeMemberEmail} />
                        <label for="inputPhone" class="sr-only">Phone</label>
                        <input type="text" id="text" class="form-control" placeholder="PHONE" required="" onChange={this.onChangeMemberPhone} />
                        <div class="checkbox mb-3">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.addMember}>Add</button>
                        <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
                    </form>


                </body>
            </div>
        )
    }
}

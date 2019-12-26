import React, { Component } from 'react'
import axios from 'axios';

export default class EditPage extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:1323/member/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    member_id: response.data.id,
                    member_username: response.data.username,
                    member_password: response.data.password,
                    member_fisrtname: response.data.fisrtname,
                    member_lastname: response.data.lastname,
                    member_email: response.data.email,
                    member_phone: response.data.phone,
                })
            })
            .catch(function (error) {
                console.log(error);
            })
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

    updateMember = (e) => {
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

        axios.put("http://localhost:1323/member/" + this.props.match.params.id, newMember)
            .then(res => {
                alert(res.data)
                this.props.history.push('/')
            })


    }
    render() {
        return (
            <div className="container cap">
                <body class="text-center ">
                    <form class="form-signin">
                        <img class="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 class="h3 mb-3 font-weight-normal">Edit Accout</h1>
                        <label for="Username" class="sr-only">Username</label>
                        <input type="text" id="textPassword" class="form-control" placeholder="USERNAME" required="" onChange={this.onChangeMemberUsername} />
                        <label for="inputPassword" class="sr-only">Password</label>
                        <input type="textPassword" id="textPassword" class="form-control" placeholder="PASSWORD" required="" onChange={this.onChangeMemberPassword} />
                        <label for="textFisrtname" class="sr-only">FisrtName</label>
                        <input type="textFisrtName" id="name" class="form-control" placeholder="FISRT_NAME" required="" autofocus="" onChange={this.onChangeMemberFisrtname} />
                        <label for="inputLastName" class="sr-only">LastName</label>
                        <input type="textLastName" id="text" class="form-control" placeholder="LAST_NAME" required="" onChange={this.onChangeMemberLastname} />
                        <label for="textEmail" class="sr-only">Email</label>
                        <input type="textEmail" id="name" class="form-control" placeholder="EMAIL" required="" autofocus="" onChange={this.onChangeMemberEmail} />
                        <label for="inputPhone" class="sr-only">Phone</label>
                        <input type="textPhone" id="text" class="form-control" placeholder="PHONE" required="" onChange={this.onChangeMemberPhone} />
                        <div class="checkbox mb-3">
                        </div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" onClick={this.updateEmployee}>Edit</button>
                        <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
                    </form>


                </body>
            </div>
        )
    }
}

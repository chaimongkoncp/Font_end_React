import React, { Component } from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Onepage from './Onepage';

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { member: [] }
    }

    componentDidMount() {
        this.getMember()
    }

    getMember = () => {
        axios.get('http://localhost:1323/member')
            .then(response => {
                console.log(response.data)
                this.setState({ member: response.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteMember = (id) => {
        axios.delete('http://localhost:1323/member/' + id)
            .then(response => {
                console.log(response.data)
                this.componentDidMount()
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="container cap">
                <div class="album py-5 bg-light">
                    <div class="container">

                        <div class="row">
                            {
                                this.state.member !== null && this.state.member.map((member) => (
                                    // <div class="col-md-4">
                                    //     <div class="card mb-4 shadow-sm">
                                    //         <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{member.username}</text></svg>
                                    //         <div class="card-body">
                                    //             <p class="card-text">{member.email}</p>
                                    //             <div class="d-flex justify-content-between align-items-center">
                                    //                 <div class="btn-group">
                                    //                     <button type="button" class="btn btn-sm btn-outline-secondary"
                                    //                         onClick={this.deleteMember.bind(this, member.id)}>Delete</button>
                                    //                     <button type="button" class="btn btn-sm btn-outline-secondary">
                                    //                         <Link to={"/edit/" + member.id}>Edit</Link>
                                    //                     </button>
                                    //                 </div>
                                    //                 <small class="text-muted">9 mins</small>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </div>
                                    <Onepage member_props={member} deleteMember={this.deleteMember} />

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

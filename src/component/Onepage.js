import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Onepage extends Component {

    render() {
        return (
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">{this.props.member_props.username}</text></svg>
                        <div class="card-body">
                            <p class="card-text">{this.props.member_props.email}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary"
                                        onClick={this.props.deleteMember.bind(this, this.props.member_props.id)}>Delete</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        <Link to={"/edit/" + this.props.member_props.id}>Edit</Link>
                                    </button>
                                </div>
                                <small class="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

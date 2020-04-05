import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div className="nav__admin">
                <div className="nav__wrap">
                    <div className="nav flex-column">
                        <NavLink className="nav-link" to="dashboard" role="tab">DashBoard</NavLink>
                        <NavLink className="nav-link" to="them-nguoi-dung" role="tab" ><i className="fas fa-edit m-2" />
                            Danh sách người dùng</NavLink>
                        <NavLink className="nav-link" to="add-film" ><i className="fas fa-folder m-2" />
Danh sách phim</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

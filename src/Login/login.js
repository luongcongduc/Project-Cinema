import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../redux/action/index"
class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            taiKhoan:"",
            matKhau:""
        }
    }

    handleChange = (e) =>{
        let {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleOnsubmit = (e) =>{
        e.preventDefault();
        this.props.LoginUser(this.state, this.props.history);
    }
    render() {
        return (
            <div className="login__wrap">
                <div className="login__box">
                    <div className="container loggin">
                    <NavLink to="/" className="login__logo">
                        <img src="https://tix.vn/app/assets/img/login/group@2x.png" className="img-fluid" alt="logo" />
                    </NavLink>
                    <h3 className="text-center">Đăng nhập</h3>
                    <div className="box">
                        <form onSubmit={this.handleOnsubmit}>
                            <div className="form-group">
                                <label htmlFor="">UserName</label>
                                <input type="text" className="form-control" name="taiKhoan" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <lable htmlFor="">password</lable>
                                <input type="text" className="form-control" name="matKhau" onChange={this.handleChange}/>
                            </div>
                            <button className="btn btn-success" type="submit">Dang nhap</button>
                            <NavLink to="/register" className="btn btn-primary">
                                Đăng Ký
                            </NavLink>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapDishpatchToprops= dispatch =>{
    return{
        LoginUser: (user,history) =>{
            dispatch(action.LoginUser(user,history))
        }
    }
}

export default connect(null, mapDishpatchToprops)(Login);


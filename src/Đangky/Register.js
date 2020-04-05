import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "../redux/action/index"
class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            user:{
                hoTen:"",
                taiKhoan:"",
                matKhau:"",
                email:"",
                soDt:"",
                maNhom:"GP01",
                maLoaiNguoiDung:"KhachHang"
            },
            errors:{
                hoTen:"",
                taiKhoan:"",
                matKhau:"",
                email:"",
            },
            hoTenValid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            formValid: false
        }
    }

    handleChange = e =>{
        let {name, value} = e.target;
        this.setState({
            user: {...this.state.user, [name]: value}
        })
    }

    handOnsubmit = e =>{
        e.preventDefault();
        this.props.RegisterUser(this.state.user, this.props.history);
    }

    handleError = e =>{
        let {name, value} = e.target;
        let message = value === "" ? name + " không được để trống!" : "";
        let {hoTenValid, taiKhoanValid, matKhauValid, emailValid} = this.state;
        switch(name){
            case "hoTen":
                hoTenValid = message === "" ? true : false;
                break;
            case "taiKhoan":
                taiKhoanValid = message === "" ? true : false;
                if(value && value.length < 6){
                    message = "Độ dài phải có hơn 6 ký tự";
                    taiKhoanValid = false;
                }
                break;
            case "matKhau":
                matKhauValid = message === "" ? true : false;
                if(value && value.length < 8) {
                    message = "Độ dài phải có hơn 8 ký tự";
                    matKhauValid = false;
                }
                break;
            case "email":
                emailValid = message === "" ? true: false;
                if(value && value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                    message = "Email không đúng định dạng";
                    emailValid = false;
                }
                break;
            default :
            break;
        };
        this.setState({
            errors: {...this.state.errors, [name]: message},
            hoTenValid,
            taiKhoanValid,
            matKhauValid,
            emailValid
        }, () =>{
            this.formValidation();
        })
    }

    formValidation = () =>{
        this.setState({
            formValid: this.state.hoTenValid && this.state.taiKhoanValid && this.state.matKhauValid && this.state.emailValid
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handOnsubmit}>
                        <h3>Đăng Ký</h3>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Họ và Tên" name="hoTen" onChange={this.handleChange}  onBlur = {this.handleError} />
                             {this.state.errors.hoTen === "" ? ("") : (<div className="alert alert-danger">{this.state.errors.hoTen}</div>)}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Tên đăng nhập" name="taiKhoan" onChange={this.handleChange} onBlur={this.handleError} />
                            {this.state.errors.taiKhoan === "" ? ("") : (<div className="alert alert-danger">{this.state.errors.taiKhoan}</div>)}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Mật Khẩu" name="matKhau" onChange={this.handleChange} onBlur={this.handleError}/>
                             {this.state.errors.matKhau === "" ? ("") : (<div className="alert alert-danger">{this.state.errors.matKhau}</div>)}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleChange}  onBlur = {this.handleError}  />
                            {this.state.errors.email === "" ? ("") : (<div className="alert alert-danger">{this.state.errors.email}</div>)}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Số điện thoại" name="soDt" onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Đăng Ký</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=  dispatch =>{
    return {
        RegisterUser: (user, history) =>{
            dispatch(action.RegisterUser(user,history))
        }
    }
}
export default connect(null, mapDispatchToProps) (Register);
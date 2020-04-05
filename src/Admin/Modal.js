import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "../redux/action/index"
class Modal extends Component {

    constructor(props){
        super(props);
        this.state={
            taiKhoan:"",
            matKhau:"",
            hoTen:"",
            email:"",
            soDt:"",
            maNhom:"GP01",
            maLoaiNguoiDung:""
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.user){
            this.setState({
                taiKhoan: nextProps.user.taiKhoan,
                matKhau: nextProps.user.matKhau,
                hoTen: nextProps.user.hoTen,
                email: nextProps.user.email,
                soDt: nextProps.user.soDt,
                maLoaiNguoiDung: nextProps.user.maLoaiNguoiDung,
            })
        }
    }

    handleonChange = e =>{
        let {name, value} = e.target;
        console.log(value);
        this.setState({
            [name] : value
        })
    }

    handleSubmit= e =>{
        e.preventDefault();
        console.log(this.state);
        this.props.editUser(this.state);
    }
    render() {
        return (
            <div>
                 <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Thay đổi thông tin</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">x</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Tài khoản:</label>
                                        <input type="text" className="form-control" name="taiKhoan"
                                        onChange={this.handleonChange}
                                        value={this.state.taiKhoan}
                                        disabled={true}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Mật khẩu:</label>
                                        <input type="text" className="form-control" name="matkhau"
                                        onChange={this.handleonChange}
                                        value={this.state.matKhau}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Họ tên:</label>
                                        <input type="text" className="form-control" name="hoTen"
                                       onChange={this.handleonChange}
                                       value={this.state.hoTen}
                                       />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input type="text" className="form-control" name="email"
                                        onChange={this.handleonChange}
                                        value={this.state.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại:</label>
                                        <input type="text" className="form-control" name="soDt"
                                        onChange={this.handleonChange}
                                        value={this.state.soDt}
                                        type="number"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success">
                                        Sửa
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps  = state =>{
    return {
        user : state.userReducer.userEdit,
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        editUser: user =>{
            dispatch(action.editUser(user))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Modal);
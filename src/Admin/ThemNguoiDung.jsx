import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../redux/action/index";
import User from "../Admin/user";
import Modal from "../Admin/Modal"
class ThemNguoiDung extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: ""
        }
    }

    handleonChange = e => {
        let { name, value } = e.target;
        console.log(value);
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addUser(this.state);
    }

    renderTable = () => {
        let { listUser, keyword } = this.props;
        listUser = listUser.filter(item => {
            return item.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        return listUser.map((item, index) => {
            return <User key={index} user={item} />
        })
    }
    render() {
        return (
            <div className="addUser">
            <div className="add__wrap">
                <h3 className="text-center">Thêm người dùng</h3>
                <form className="container" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <span>Tài khoản:</span>
                        <input className="form-control" name="taiKhoan" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <span htmlFor="">Mật khẩu:</span>
                        <input className="form-control" name="matKhau" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <span htmlFor="">Email:</span>
                        <input className="form-control" name="email" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <span htmlFor="">Họ tên:</span>
                        <input className="form-control" name="hoTen" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <span htmlFor="">Số điện thoại:</span>
                        <input className="form-control" name="soDt" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <span htmlFor="">Mã nhóm:</span>
                        <input className="form-control" name="maNhom" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group">
                        <span htmlFor="">Mã loại người dùng:</span>
                        <input className="form-control" name="maLoaiNguoiDung" onChange={this.handleOnchange} />
                    </div>
                    <div className="form-group form__button">
                        <button type="submit" className="btn btn-success">Thêm người dùng</button>
                    </div>
                </form>
                <div>
                    <div className="card">
                        <div className="card-header bg-dark text-white">Danh sách người dùng</div>
                        <div className="text-dark mt-3 ml-3" >Tìm kiếm người dùng:</div>
                        <input type="text" className="form-control m-3 w-50" onChange={e => { this.props.onFilter(e.target.value) }} />
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Tài khoản</th>
                                        <th>Mật khẩu</th>
                                        <th>Email</th>
                                        <th>Số điện thoại</th>
                                        <th>Mã loại người dùng</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTable()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </div>
        );
    }

    componentDidMount() {
        this.props.getlistUser();
    }
}

const mapStateToProps = state => {
    return {
        listUser: state.userReducer.listUser,
        keyword: state.userReducer.keyword,
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getlistUser: () => {
            dispatch(action.getlistUser())
        },
        addUser: (user) => {
            dispatch(action.addUser(user))
        },
        onFilter: keyword => {
            dispatch({
                type: "ON_FILTER",
                keyword
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThemNguoiDung);
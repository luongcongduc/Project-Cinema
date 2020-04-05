import React, { Component } from 'react';
import {connect} from "react-redux";
import * as action from "../redux/action/index"
class User extends Component {

    render() {
        let { user } = this.props;
        return (
            <tr>
                <td>{user.taiKhoan}</td>
                <td>{user.matKhau}</td>
                <td>{user.email}</td>
                <td>{user.soDt}</td>
                <td>{user.maLoaiNguoiDung}</td>
                <td>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modelId" onClick={() =>{this.props.editUser(user)}}>Sửa</button>
                    <button className="btn btn-danger" data-toggle="modal" data-target="#modelDelete">Xóa</button>
                    <div>
                        {/*Modal */}
                        <div className="modal fade" id="modelDelete" tabIndex={-1} role="dialog"    aria-labelledby="modelTitleId" aria-hidden="true">
                           <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Xóa người dùng!</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">x</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    Chắc chắn xóa người dùng ?
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-danger" onClick={() =>{this.props.deleteUser(user)}}>Delete</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

const mapDispatchToprops = dispatch =>{
    return{
        editUser: user =>{
            dispatch({
                type:"ON_EDIT",
                user
            })
        },
        deleteUser: user =>{
            dispatch(action.deleteUser(user))
        }
    }
}
export default connect(null,mapDispatchToprops) (User);
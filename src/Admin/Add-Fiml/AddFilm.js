import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/action/index"
class AddFilm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maPhim: '',
            tenPhim: '',
            biDanh: '',
            trailer: '',
            hinhAnh: '',
            moTa: '',
            maNhom: '',
            ngayKhoiChieu: '',
            danhGia: ''
        }
    }

    componentDidMount() {
        // let {film} = this.props;
        this.props.getListFiml();
        // this.props.deleteFilm(film);
        // this.props.addFilm(film)
    }

    handleOnchange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addFilm(this.state);
    }

    renderListFilm = () => {
        let { listFiml } = this.props;
        return listFiml.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maPhim}</td>
                    <td>{item.tenPhim}</td>
                    <td>{item.biDanh}</td>
                    <td>{item.trailer}</td>
                    <td>{item.hinhAnh}</td>
                    <td>{item.moTa}</td>
                    <td>{new Date(item.ngayKhoiChieu).toLocaleDateString()}</td>
                    <td>{item.danhGia}</td>
                    <td>
                        <button className="btn btn-danger" data-toggle="modal" data-target="#modelDeleteFilm">Xóa</button>
                        <div>
                            {/* Modal */}
                            <div className="modal fade" id="modelDeleteFilm" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Xóa phim!</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            Bạn muốn xóa phim này?
                                    </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger" onClick={() => { this.props.deleteFilm(item.maPhim) }}>DELETE</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="add__film">
                <h1 className="display-4 text-center my-3">Thêm phim</h1>
                <div className="container-fluid">
                    <form className="form__addfilm" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <span htmlFor="">Mã phim:</span>
                            <input type="number" className="form-control" name="maPhim" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Tên phim:</span>
                            <input type="text" className="form-control" name="tenPhim" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Bí danh:</span>
                            <input type="text" className="form-control" name="biDanh" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Trailer:</span>
                            <input type="url" className="form-control" name="trailer" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Hình Ảnh:</span>
                            <input type="url" className="form-control" name="hinhAnh" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Mô tả:</span>
                            <input type="text" className="form-control" name="moTa" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Mã nhóm:</span>
                            <input type="text" className="form-control" name="maNhom" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Ngày khởi chiếu:</span>
                            <input type="text" className="form-control" name="ngayKhoiChieu" onChange={this.handleOnchange} />
                        </div>
                        <div className="form-group">
                            <span htmlFor="">Đánh giá:</span>
                            <input type="number" className="form-control" name="danhGia" onChange={this.handleOnchange} />
                        </div>
                        <button type="submit" className="btn btn-success p-2">Thêm Phim</button>
                    </form>
                </div>
                <div className="list__film">
                    <div className="box">
                        <table className="table table-bordered mt-4">
                            <thead>
                                <tr>
                                    <th>Mã phim:</th>
                                    <th>Tên phim:</th>
                                    <th>Bí danh:</th>
                                    <th>Trailer:</th>
                                    <th>Hình ảnh:</th>
                                    <th>Mô tả:</th>
                                    <th>Ngày khởi chiếu:</th>
                                    <th>Đánh giá:</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderListFilm()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToprops = state => {
    return {
        listFiml: state.fimlsReducer.listFiml
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFilm: film => {
            dispatch(action.addFilm(film))
        },
        getListFiml: () => {
            dispatch(action.getListFiml())
        },
        deleteFilm: film => {
            dispatch(action.deleteFilm(film))
        }
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(AddFilm);
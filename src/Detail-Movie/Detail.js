import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Header from "../Home/header";
import Footer from "../Home/footer"
import DetailShowTimes from './DetailShowTimes';
import { connect } from "react-redux";
import * as action from '../../src/redux/action/index';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: {},
            error: null,
            loading: false,

        }
    }


    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getListShowTimes(id);
        axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
            .then(result => {
                this.setState({
                    loading: true,
                    film: result.data
                })
            })
            .catch(err => {
                this.setState({
                    error: err
                })
            })
    }
    componentWillMount() {
        window.scrollTo(0, 0);
    }

    // handleTraile = () => {
    //     let { Trailer } = this.props;
    //     return Trailer.map((film, index) => {
    //         return (
    //             <div key={index}>
    //                 <iframe width="840" height="315" src={film.trailer} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    //             </div>
    //         )
    //     })
    // }
    render() {
        let { listShowTimes } = this.props;
        let { film, error, loading } = this.state;
        // const [show, setShow] = useState(false);

        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        if (error) {
            return <div>Error:{this.state.error}</div>
        } else if (!loading) {
            return (<img className="loading" src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="" />
            )
        } else {
            return (
                <Fragment>
                    <Header />
                    <div className="detail__content">
                        <div className="detail__wrap" style={{ background: "rgb(10,32,41" }} >
                            <div className="detail__box">
                                <div className="detail__blur" >
                                    <img src={film.hinhAnh} alt="" className="img-fluid" />
                                </div>

                                <div className="shaded"></div>
                                <div className="detail__film">
                                    <div className="row">
                                        <div className="col-sm-3 img__film">
                                            <img src={film.hinhAnh} alt="" className="img-fluid" />

                                            <div className="trailer__film">
                            
                                                <a className="link__trailer" href={film.trailer}>
                                                    <img src="https://tix.vn/app/assets/img/icons/play-video.png" alt="" className="img-fluid" />
                                                </a>
                                               

                                               
                                            </div>
                                        </div>
                                        <div className="col-sm-7 info__film">
                                            <span className="text">{new Date(film.ngayKhoiChieu).toLocaleDateString()}</span>
                                            <span className="center">
                                                <span className="room__film">C16</span>
                                                <span className="name__film">{film.tenPhim}</span>
                                            </span>
                                            <span className="text">117 phút - 0 IMDb - 2D/Digital</span>
                                            <button className="btn">Mua vé</button>
                                        </div>
                                        <div className="col-sm-2 evaluate__film">
                                            <div className="evalute__content">8.5</div>
                                            <div className="evalute__start">
                                                <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                                <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                                <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                                <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                                <img src="https://tix.vn/app/assets/img/icons/star1.2.png" alt="" className="half__star" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="detail__info">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#lichChieu" role="tab" aria-controls="home" aria-selected="true">Lịch Chiếu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#thongTin" role="tab" aria-controls="profile" aria-selected="false">Thông Tin</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#danhGia" role="tab" aria-controls="contact" aria-selected="false">Đánh Giá</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane  fade show active" id="lichChieu" role="tabpanel" aria-labelledby="home-tab" >
                                        <DetailShowTimes movie={film} mangLichChieu={listShowTimes} />
                                    </div>
                                    <div className="tab-pane fade" id="thongTin" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="row">
                                            <div className="col-sm-6 table__info">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <td>Ngày Phát Hành</td>
                                                            <td>{new Date(film.ngayKhoiChieu).toLocaleDateString()}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Đạo diễn</td>
                                                            <td>...</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Diễn Viên</td>
                                                            <td>...</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Thể loại</td>
                                                            <td>...</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Định dạng</td>
                                                            <td>...</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Quốc gia sản xuất</td>
                                                            <td>...</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-sm-6 table__info">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Nội Dung</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> {film.moTa}</td>

                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="danhGia" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <Footer />
                </Fragment>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        listShowTimes: state.cinemaReducer.listShowTimes,
       
    }
}

const mapDispatchToprops = dispatch => {
    return {
        getListShowTimes: id => {
            dispatch(action.getListShowTimes(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToprops)(Detail);
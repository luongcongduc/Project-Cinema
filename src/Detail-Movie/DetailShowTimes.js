import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as action from '../../src/redux/action/index';
import { NavLink } from 'react-router-dom';

class DetailShowTimes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangRap: [],
            lichChieuTheoNgay: {},
            maRap: [],
            ngayChieu: '',
            isStatus: false,
            isTimes: false
        }
    }

    componentDidMount() {
        this.props.getCinema();
    }

    renderLogo = () => {
        let { cinema } = this.props;
        return cinema.map((item, index) => {
            return (
                <Fragment key={index}>
                    <button className="btn" onClick={() => { this.handleLogo(item) }}>
                        <img src={item.logo} alt="" style={{ width: 50 }} />
                        <span className="name__cinemas">{item.tenHeThongRap}</span>
                    </button>
                </Fragment>
            )
        })
    }

    handleLogo = propsItem => {
        let { mangLichChieu } = this.props;
        if (mangLichChieu.heThongRapChieu) {
            return mangLichChieu.heThongRapChieu.filter(item => item.maHeThongRap === propsItem.maHeThongRap)
                .map((item) => {
                    this.setState({
                        maRap: item
                    });
                    return item.cumRapChieu.map((isItem) => {
                        return (
                            this.setState({
                                mangRap: isItem,
                                isTimes: true
                            })
                        );
                    })
                })
        }
    }

    handleGioChieu = propsItem => {
        let { mangRap } = this.state;
        if(this.state.isTimes){
            return mangRap.lichChieuPhim.filter(item => (new Date(item.ngayChieuGioChieu).toLocaleDateString()) === propsItem)
            .map((item) => {
                return (
                    this.setState({
                        lichChieuTheoNgay: item,
                        isStatus: true
                    })
                );
            })
        }else{
            alert('Vui lòng chọn cụm rạp!')
        }
    }

    renderDays = () => {
        let { movie } = this.props;
        let { lichChieuTheoNgay, maRap } = this.state;
        let user = JSON.parse(localStorage.getItem('UserCustomer'));
        if(this.state.isStatus){
            if (movie.lichChieu) {
                return movie.lichChieu
                    .filter(item => (new Date(item.ngayChieuGioChieu).toLocaleDateString() === new Date(lichChieuTheoNgay.ngayChieuGioChieu).toLocaleDateString()) && (item.thongTinRap.maHeThongRap === maRap.maHeThongRap))
                    .map((item, index) => {
                        console.log(item)
                        return (
                            <div key={index} className="times__button">
                                <NavLink to={user ? `/seat/${item.maLichChieu}` : `/login`}>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</NavLink>
                            </div>
                        );
                    })
            }
        }else if(this.state.isTimes){
            return(
                <div className="alert alert-dark text-center">Vui lòng chọn ngày chiếu!</div>
            )
        }
        else{
            return(
                <div className="alert alert-dark text-center">Không có lịch chiếu!</div>
            )
        }
    }

    render() {
        return (
            <div className="detail__times">
                <div className="list__cinemas">
                    {this.renderLogo()}
                </div>
                <div className="detail__showtimes">
                    <div className="showtimes__wrap">
                        <div className="days__cinemas">
                            <button className="btn days" onClick={() => { this.handleGioChieu("1/1/2019") }}>
                                <p className="days__top">Thứ 2</p>
                                <p className="days__bot">01</p>
                            </button>
                            <button className="btn days" onClick={() => { this.handleGioChieu("2/1/2019") }}>
                                <p className="days__top">Thứ 3</p>
                                <p className="days__bot">02</p>
                            </button>
                            <button className="btn days" onClick={() => { this.handleGioChieu("3/1/2019") }}>
                                <p className="days__top">Thứ 4</p>
                                <p className="days__bot">03</p>
                            </button>
                            <button className="btn days" onClick={() => { this.handleGioChieu("4/1/2019") }}>
                                <p className="days__top">Thứ 5</p>
                                <p className="days__bot">04</p>
                            </button>
                            <button className="btn days" onClick={() => { this.handleGioChieu("5/1/2019") }}>
                                <p className="days__top">Thứ 6</p>
                                <p className="days__bot">05</p>
                            </button>
                            <button className="btn days" onClick={() => { this.handleGioChieu("6/1/2019") }}>
                                <p className="days__top">Thứ 7</p>
                                <p className="days__bot">06</p>
                            </button>
                            <button className="btn days" onClick={() => { this.handleGioChieu("7/1/2019") }}>
                                <p className="days__top">Chủ nhật</p>
                                <p className="days__bot">07</p>
                            </button>
                        </div>
                    </div>
                    <div className="times__cinemas">
                        {this.renderDays()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cinema: state.fimlsReducer.cinema
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCinema: () => {
            dispatch(action.logoCinema())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailShowTimes);

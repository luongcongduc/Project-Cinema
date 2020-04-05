import React, { Component } from 'react';
import axios from 'axios';
import * as action from "../redux/action/index";
import {connect} from "react-redux";
import ListSeat from "./ListSeat"
class Seat extends Component {

    constructor(props){
        super(props);
        this.state={
            danhSachGhe:[],
            seat:[],
            total:0,
            put: [],
            isStatus : false,
            loading: false,
            isModal: false,
            isMaGhe : '',
            mangChuCai : [
                { stt: "A"},
                { stt: "B"},
                { stt: "C"},
                { stt: "D"},
                { stt: "E"},
                { stt: "F"},
                { stt: "G"},
                { stt: "H"},
                { stt: "J"},
                { stt: "K"}
            ],
            minutes: 5,
            seconds: 0
        }
    }

    componentDidMount(){
        axios({
            method: 'GET',
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.props.match.params.id}`
        })
        .then(result =>{
            this.setState({
                seat: result.data,
                loading : true,
            })
        })
        .catch(err =>{
            console.log(err)
        });
        this.myInterval = setInterval(() =>{
            const {seconds, minutes} = this.state;

            if(seconds > 0){
                this.setState(({seconds}) =>({
                    seconds: seconds - 1
                }))
            }
            if(seconds === 0 ){
                if(minutes === 0){
                    clearInterval(this.myInterval)
                } else{
                    this.setState(({minutes}) =>({
                        minutes : minutes - 1,
                        seconds: 59
                    }))
                }
            }
        },1000)
    }
    
    renderListSeat= () =>{
        let {seat} = this.state;
        if(seat.danhSachGhe){
            return seat.danhSachGhe.map((item,index) =>{
                return (
                    <ListSeat key={index} seat={item} handleSeat={this.handleSeat} />
                )
            })
        }
    }

    handleSeat  = (obj) =>{
        let danhSachGhe = [...this.state.danhSachGhe];
        let {put, seat} = this.state;
        let user = JSON.parse(localStorage.getItem("UserCustomer"));
        const objGhe= {
            tenGhe: obj.ghe.tenGhe,
            giaVe : obj.ghe.giaVe,
            loaiGhe : obj.ghe.loaiGhe,
            stt: obj.ghe.stt,
            daDat : obj.ghe.daDat,
            taiKhoanNguoiDat: obj.ghe.taiKhoanNguoiDat,
            maGhe : obj.ghe.maGhe
        };

        const objPut = {
            maLichChieu : seat.thongTinPhim.maLichChieu,
            danhSachVe :[
                {
                    maGhe : obj.ghe.maGhe,
                    giaVe: obj.ghe.giaVe,
                }
            ],
            taiKhoanNguoiDung : user.taiKhoan,
        }
        const viTri = danhSachGhe.findIndex(item =>item.tenGhe === obj.ghe.tenGhe);
        if(obj.status){
            danhSachGhe.push(objGhe);
            put.push(objPut);
            this.setState({
                isStatus : true,
                total: this.state.total += obj.ghe.giaVe
            });
        } else {
            danhSachGhe.splice(viTri, 1);
            this.setState({
                total : this.state.total -= obj.ghe.giaVe,
            })
            if(this.state.total === 0){
                this.setState({
                    isStatus : false,
                })
            }
        }
        this.setState({
            danhSachGhe
        })
    }

    renderTicket = () =>{
        let {danhSachGhe} = this.state;
        return danhSachGhe.map((item,index) =>{
            if(item.stt <= 16 ){
                return <span key={index} className="sttGhe">{'A' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            } else if (item.stt > 16 && item.stt <= 32) {
            return <span key={index} className="sttGhe">{'B' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16 )},</span>
            }
            else if(item.stt > 32 && item.stt <= 48){
            return <span key={index} className="sttGhe">{'C' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            }
            else if ( item.stt > 48 && item.stt <= 64){
            return <span key={index} className="sttGhe">{'D' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            }
            else if( item.stt > 64 && item.stt <= 80) {
            return <span key={index} className="sttGhe">{'E' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16) },</span>
            }
            else if (item.stt > 80 && item.stt <= 96){
            return <span key = {index} className="sttGhe">{'F' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            }
            else if (item.stt > 94 && item.stt <= 112){
            return <span key={index} className="sttGhe">{'G' +(item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            }
            else if (item.stt > 112 && item.stt <= 128){
            return <span key={index} className="sttGhe">{'H' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            }
            else if (item.stt > 128 && item.stt <= 144){
            return <span key={index} className="sttGhe">{'I' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            }
            else if(item.stt > 144 && item.stt <= 166){
            return <span key={index} className="sttGhe">{'J' + (item.tenGhe % 16 === 0 ? item.tenGhe && 16 : item.tenGhe % 16)},</span>
            }
        })
    }
    handleBooking = res =>{
        return res.map((item) =>{
            return (
                this.props.Booking(item),
                this.setState({
                    isModal : true
                })
            )
        })
    }
  
    renderModal = () =>{
        if( this.state.isModal){
            return (
                <div className="card text-center">
                    <div className="card-body">
                        <h3 className="card-text">Đặt vé thành công!</h3>
                        <button className="btn btn-danger" onClick={() =>{this.handleModal()}}>Đóng</button>
                    </div>
                </div>
            )
        }
    }

    handleModal = () =>{
        window.location.reload();
    }

    renderAlphabet = () =>{
        return this.state.mangChuCai.map((item,index) =>{
            return (
            <div key={index}>{item.stt}</div>
            )
        })
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    handleReload = () =>{
        window.location.reload();
    }
    render() {
        let { seat, minutes, seconds } = this.state;
        if (!this.state.loading){
            return (
                <img className="loading" src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="" />
            )
        } else {
        return (
            <div className="booking">
                <div className="checkOut">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active text-danger" id="home-tab" data-toggle="tab" href="#chonGhe" role="tab" aria-controls="home" aria-selected="true">CHỌN GHẾ & THANH TOÁN</a>
                        </li>
                    </ul>
                </div>
                <div className="container booking__box">
                    <div className="address">
                        <div className="address__img">
                            <img src={seat.thongTinPhim.hinhAnh} className="img-fluid" alt="logo" />
                        </div>
                        <div className="address__box">
                            <p className="address__rap">{seat.thongTinPhim.tenCumRap}</p>
                            <p>{seat.thongTinPhim.ngayChieu}</p>
                        </div>
                        <div className="countdown">
                            <span> {minutes === 0 && seconds === 0 ? (
                               <div className="reload">
                               <div className="text-reload">
                                   Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn 5 phút. <span className="text-danger reload__times" onClick={() =>{this.handleReload()}}>Đặt vé lại</span>
                               </div>
                           </div>  
                            ) :<p className="text__times">Thời gian giữ ghế: <span className="countdown__times">{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</span></p>}

                            </span>
                           
                        </div>
                    </div>
                    <div className="screen__room">
                        <div className="alpha">
                                {this.renderAlphabet()}
                        </div>
                        <div className="mx-auto text-center room">
                            <div className="screen">
                                <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="sreen" />
                            </div>
                            <div className="list__seat">
                                {this.renderListSeat()}
                            </div>
                            <div className="types">
                                <span className="list__types">
                                    <span className="img__thuong"></span>
                                    <span>Ghế thường</span>
                                </span>
                                <span className="list__types">
                                    <span className="img__vip"></span>
                                    <span>Ghế vip</span>
                                </span>
                                <span className="list__types">
                                    <span className="img__dangchon"></span>
                                    <span>Ghế đang chọn</span>
                                </span>
                                <span className="list__types">
                                    <img src="https://tix.vn/app/assets/img/icons/notchoose.png" alt="" />
                                    <span>Ghế không thể chọn</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    {this.renderModal()}
                </div>
                <div className="booking__ticket">
                            <div className="booking__price">{this.state.total}Đ</div>
                    <hr />
                    <div className="booking__info">
                          <span className="name">Tên Phim:{seat.thongTinPhim.tenPhim}</span>
                            <p className="rap">{seat.thongTinPhim.tenCumRap}</p>
                            <p><span>Ngày: {seat.thongTinPhim.ngayChieu}</span> - <span>{seat.thongTinPhim.gioChieu}</span> - <span>{seat.thongTinPhim.tenRap}</span> </p>
                    </div>
                    <hr />
                    <div className="row booking__row">
                            <div className="col-sm-7 row__left">Ghế:{this.renderTicket()}</div>
                            <div className="col-sm-5 row__right">{this.state.total}Đ</div>
                    </div>
                    <hr />
                    <div className="put">
                        <button className="btn btn-info" data-toggle="modal" data-target="#modelSeat"
                        onClick = {() =>{this.handleBooking(this.state.put)}} disabled ={!this.state.isStatus}
                        >Đặt vé</button>
                    </div>
                </div>
            </div>
        );
    }
}
}

const mapdispatchToprops = dispatch=>{
    return{
        Booking : id =>{
            dispatch(action.Booking(id))
        }
    }
}

export default connect(null, mapdispatchToprops)  (Seat);
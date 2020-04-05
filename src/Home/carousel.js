import React,{Component} from 'react'
import axios from 'axios';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../redux/action/index"
class Carousel extends Component {
    constructor(props){
        super(props);
        this.state ={
            danhSachPhim: [],
            // danhSachRap: [],
            mangPhim:[],
            validFiml: false,
            validCinema: false,
            validDays: false,
            validTimes: false,
            validButton: false,
            isMaLichChieu : '',
            ngayChieu: '',
        }
    }
    componentDidMount(){
        axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07"
        })
        .then(result =>{
            this.setState({
                danhSachPhim: result.data,
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
    

    handleFiml = () =>{
        this.setState({
            validFiml: true
        })
    }

    handleChangFiml = e =>{
        if(e.target.value){
           this.props.getListShowTimes(e.target.value);
           this.setState({
               validCinema: true
           })
        }
    }

    handleChangeCinema = (e) =>{
      let {listShowTimes} = this.props;
      if(listShowTimes.heThongRapChieu) {
          return listShowTimes.heThongRapChieu.filter(item => item.cumRapChieu).map((item) =>{
              return item.cumRapChieu.filter(propsItem => propsItem.tenCumRap === e.target.value).map((propsItem) =>{
                  return (
                      this.setState({
                          mangPhim : propsItem,
                          validDays: true
                      })
                  );
              })
          })
      }
    }

    handleChangeDays = (e) =>{
        if(e.target.value){
            this.setState({
                validTimes: true,
                ngayChieu: e.target.value
            })
        }
    }

    handleChangeTimes = (e)=>{
        if(e.target.value){
            this.setState({
                validButton: true,
                isMaLichChieu: e.target.value
            })
        }
    }

    

    renderListFilm = () =>{
        let {danhSachPhim} = this.state;
        return danhSachPhim.map((item, index) =>{
            if(this.state.validFiml){
                return (
                <option key={index} value={item.maPhim} >{item.tenPhim} </option>
                )
            }
            else{
                return(
                    <option key={index} >Phim</option>
                )
             
            }
        })
    }

    renderCinema = () =>{
        // let {danhSachRap} = this.state;
        let{listShowTimes} = this.props;
        // console.log(danhSachRap);
        // if(danhSachRap.lichChieu) {
        //  return danhSachRap.lichChieu.map((item,index)=>{
        //         return (
        //             <option key={index} value={item.maLichChieu}>{item.thongTinRap.tenCumRap}</option>
        //         )
                
        //     })
        // }
        if(listShowTimes.heThongRapChieu){
            return listShowTimes.heThongRapChieu.filter(item => item.cumRapChieu).map((item) =>{
                return item.cumRapChieu.map((propsItem, propsIndex) =>{
                return <option key={propsIndex} value={propsItem.tenCumRap}>{propsItem.tenCumRap}</option>
                })
            }) 
                
            }
        }
    

    renderDays = () =>{
        // let {danhSachRap} = this.state;
        // if(danhSachRap.lichChieu){
        //     return danhSachRap.lichChieu.map((item,index) =>{
        //         return(
        //         <option key={index} value={new Date(item.ngayChieuGioChieu).toLocaleDateString()}>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</option>
        //         )
        //     })
        // }
        let { mangPhim } = this.state;
        const arrayOfUniques = [];
        mangPhim.lichChieuPhim.forEach((element) =>{
            if(!arrayOfUniques.includes(new Date(element.ngayChieuGioChieu).toLocaleDateString())){
                arrayOfUniques.push(new Date(element.ngayChieuGioChieu).toLocaleDateString())
            }
        });
        return arrayOfUniques.map((item, index) =>{
        return <option key={index} value={item}>{item}</option>
        })
    }

    renderTimes = () =>{
        // let {danhSachRap} = this.state;
        // if(danhSachRap.lichChieu){
        //     return danhSachRap.lichChieu.map((item,index) =>{
        //         return (
        //         <option key={index} value={new Date(item.ngayChieuGioChieu).toLocaleTimeString()}>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</option>
        //         )
        //     })
        // }
        let {mangPhim} = this.state;
        if(mangPhim.lichChieuPhim) {
            return mangPhim.lichChieuPhim.filter(item => new Date(item.ngayChieuGioChieu).toLocaleDateString() === this.state.ngayChieu).map((item, index) =>{
                return (
                <option key={index} value={item.maLichChieu}>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</option>
                )
            })
        }
    }
    render(){
        let user= JSON.parse(localStorage.getItem('UserCustomer'));
    return (
        <section id="carousel__showTimes">
            <div className="showTimes">
                <div className="showTimes_wrap">
                    <div className="bd-example">
                        <div id="myCarousel" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active" />
                                <li data-target="#myCarousel" data-slide-to="1" />
                                <li data-target="#myCarousel" data-slide-to="2" />
                                <li data-target="#myCarousel" data-slide-to="3" />
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <a href="">
                                        <img src="https://s3img.vcdn.vn/123phim/2020/02/invisible-durex-15828576232253.jpg" alt="" />
                                    </a>
                                    <div className="carousel-caption d-none d-md-block">
                                        <button>
                                            <img src="https://tix.vn/app/assets/img/icons/play-video.png" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <a href="">
                                        <img src="https://s3img.vcdn.vn/123phim/2020/02/zoo-15828587957886.jpg" alt=""/>
                                    </a>
                                    <div className="carousel-caption d-none d-md-block">
                                        <button>
                                            <img src="https://tix.vn/app/assets/img/icons/play-video.png" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <a href="">
                                        <img src="https://s3img.vcdn.vn/123phim/2020/02/joker-15822194058572.jpg" alt="" />
                                    </a>
                                    <div className="carousel-caption d-none d-md-block">
                                        <button>
                                            <img src="https://tix.vn/app/assets/img/icons/play-video.png" alt="" />
                                        </button>
                                    </div>
                                </div>  
                                <div className="carousel-item">
                                    <a href="">
                                        <img src="https://s3img.vcdn.vn/123phim/2020/02/invisible-durex-15828576232253.jpg" alt="" />
                                    </a>
                                    <div className="carousel-caption d-none d-md-block">
                                        <button>
                                            <img src="https://tix.vn/app/assets/img/icons/play-video.png" alt="" />
                                        </button>
                                    </div>
                                </div>                             
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="sr-only">Next</span>
                                </a>
                        </div>
                    </div>
                    <div className="movieDate">
                        <div className="movie movieDate_box">
                            <select onClick={this.handleFiml} onChange={this.handleChangFiml}>
                                {this.renderListFilm()}
                            </select>
                        </div>
                        <div className="times cinema movieDate_box">
                            <select onChange={this.handleChangeCinema}>
                           {this.state.validCinema ? this.renderCinema() :  <option>Rạp</option> } 
                            </select>
                        </div>
                        <div className="times movieDate_box">
                            <select onChange={this.handleChangeDays}>
                               {this.state.validDays ? this.renderDays() : <option>Ngày xem</option>} 
                            </select>
                        </div>
                        <div className="times movieDate_box">
                            <select onChange={this.handleChangeTimes}>
                              {this.state.validTimes ? this.renderTimes() : <option>Suất Chiếu</option>}  
                            </select>
                        </div>
                        <div className="times movieDate_box">
                            {this.state.validButton ? <NavLink className="btn btn-danger mr-3" to={user ? `/seat/${this.state.isMaLichChieu}`:`/login`}>Mua vé ngay</NavLink> : <button className="btn btn-success" disabled={true}>Đặt vé</button>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
    )
}
}


const mapStateToprops = state =>{
    return {
        listFiml : state.fimlsReducer.listFiml,
        fimls: state.fimlsReducer.fimls,
        listShowTimes: state.cinemaReducer.listShowTimes

    }
}

const mapDispatchToprops = dispatch =>{
    return {
        getListFiml: () =>{
            dispatch(action.getListFiml())
        },
        getThongTinPhim:(id) =>{
            dispatch(action.getThongTinPhim(id))
        },
        getListShowTimes: (id) =>{
            dispatch(action.getListShowTimes(id))
        }
    }
}
export default connect(mapStateToprops,mapDispatchToprops) (Carousel);
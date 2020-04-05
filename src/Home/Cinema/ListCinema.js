import React, { Component, Fragment } from 'react';
import Logo from "./Logo";
import TimeCinema from "./TimeCinema"
import {connect} from "react-redux";
import * as action from "../../redux/action/index";
import{ NavLink} from "react-router-dom"
class ListCinema extends Component {
        constructor(props){
            super(props);
            this.state={
                mangCumRap :[],
                mangPhimTheoRap: [],
                logo: [],
                danhSachRap: null,
                isCumRap: false,
                isLichChieu: false
            }
        }

        renderLogo = ()=>{
            let {cinema} = this.props;
            return cinema.map((item,index) =>{
                return <Logo key={index} cinema={item} handleLogo={this.handleLogo} />
            })
        }

        handleLogo = (logo)=>{
            let {dsCinema}  =this.props;
            return dsCinema.map((item)=>{
                if(item.maHeThongRap === logo.maHeThongRap){
                return(
                    this.setState({
                        mangCumRap: item,
                        danhSachRap :logo,
                        isCumRap: true,
                    })
                )
                }
            })
        }
        
        renderListCinema = () =>{
            let{mangCumRap, danhSachRap} = this.state;
            if(this.state.isCumRap){
            if(mangCumRap.lstCumRap){
                return mangCumRap.lstCumRap.map((item,index) =>{
                    return (
                        <TimeCinema key={index} mangRap={item} danhSachRap={danhSachRap} handleCumRap={this.handleCumRap}/>
                    )
                })
            }
        } else{
            return(
                <h6 className="text-center">Vui Lòng Chọn cụm Rạp!</h6>
            )
        }
        }
        handleCumRap = (mangPhim) =>{
            return mangPhim.danhSachPhim.map((item)=>{
                return(
                    this.setState({
                        mangPhimTheoRap: item,
                        isLichChieu: true
                    })
                )
            })
        }

        renderFilmCinema =() =>{
            let {listFiml} = this.props;
            let {mangPhimTheoRap} = this.state;
            if(this.state.isLichChieu){
                return listFiml.filter(item => item.maPhim === mangPhimTheoRap.maPhim)
                .map((item,index) =>{
                    return (
                        <Fragment key={index}>
                            <div className="name">
                                <img src={item.hinhAnh} alt="" className="img-fluid" />
                                <div>
                                    <p className="text-left">{mangPhimTheoRap.tenPhim}</p>
                                    <span>120 phut</span>
                                </div>
                            </div>

                        </Fragment>
                    )
                })
        } else{
            return (
                <h6 className="text-center">Vui Lòng chọn rạp chiếu!</h6>
            )
        }
    }
        renderTimes = () =>{
            let {mangPhimTheoRap}  =this.state;
            let user = JSON.parse(localStorage.getItem("UserCustomer"));
            if(mangPhimTheoRap.lstLichChieuTheoPhim){
                return mangPhimTheoRap.lstLichChieuTheoPhim
                .filter(item =>(new Date(item.ngayChieuGioChieu).toLocaleDateString()) === "1/1/2019")
                .map((item,index)=>{
                   
                        return(
                        <NavLink key={index} to={user ? `/seat/${item.maLichChieu}` : `/login`} className="btn">{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</NavLink>
                        )
                    
                })
            }
        }
       
    render() {
        return (
            
            <Fragment>
                <div className="cinema__logo">
                    {this.renderLogo()}
                </div>
                <div className="cinema__address">
                    {this.renderListCinema()}
                </div>
                <div className="cinema__times">
                    {this.renderFilmCinema()}
                    <div className="list__times">
                    {this.renderTimes()}
                    </div>
                </div>
            </Fragment>
        );
    }
    componentDidMount(){
        this.props.getListCinema();
        this.props.getListFiml()
    }
}

const mapStateToProps = state =>{
    return{
        dsCinema : state.cinemaReducer.listCinema,
        danhSachRap: state.cinemaReducer.movieCinema,
        listFiml : state.fimlsReducer.listFiml
    }
}

const mapDispatchToprops = dispatch =>{
    return {
        getListCinema: ()=>{
            dispatch(action.getListCinema())
        },
        getListFiml: () =>{
            dispatch(action.getListFiml())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops) (ListCinema);
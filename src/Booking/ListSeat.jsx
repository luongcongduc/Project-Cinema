import React, { Component, Fragment } from 'react';

class ListSeat extends Component {
        constructor(props){
            super(props);
            this.state={
                isStatus: true,
            }
        }

        handleBg = () =>{
            this.setState({
                isStatus: !this.state.isStatus
            })
        }
    render() {
        let {seat} = this.props; 
        const obj = {status : this.state.isStatus, ghe: seat};
        if(seat.loaiGhe === "Thuong"){
            if(seat.daDat){
                return(
                    <Fragment>
                        <div className="single__seat" onClick={() =>{this.handleBg()}}>
                             <button style={{backgroundImage: 'url(https://tix.vn/app/assets/img/icons/notchoose.png)'}} className="seat" onClick={() =>{this.props.handleSeat(obj)}}
                              disabled={seat.daDat}>{seat.tenGhe % 16 === 0 ? seat.tenGhe && 16 : seat.tenGhe % 16}</button>
                        </div>
                    </Fragment>
                )
            } else {
                return (
                    <Fragment>
                        <div className="single__seat" onClick={() =>{this.handleBg()}}>
                            <button style={{background: this.state.isStatus ? 'gray' : 'green'}} className="seat" onClick={() =>{this.props.handleSeat(obj)}}
                            disabled ={seat.daDat}>{seat.tenGhe % 16 === 0 ? seat.tenGhe && 16 : seat.tenGhe % 16}</button>
                        </div>
                    </Fragment>
                )
            }
        } else{
            if(seat.daDat){
                return (
                    <Fragment>
                        <div className="single__seat" onClick={() =>{this.handleBg()}}>
                            <button style={{backgroundImage: 'url(https://tix.vn/app/assets/img/icons/notchoose.png)'}} className="seat"
                disabled ={seat.daDat}      >{seat.tenGhe % 16 === 0 ? seat.tenGhe && 16 : seat.tenGhe % 16}</button>
                        </div>
                    </Fragment>
                )
            } else {
                return (
                    <Fragment>
                        <div className="single__seat" onClick ={() =>{this.handleBg()}}>
                            <button style={{background: this.state.isStatus ? 'purple' : 'green'}} className="seat"
                            onClick={() =>{this.props.handleSeat(obj)}}>{seat.tenGhe % 16 === 0 ? seat.tenGhe && 16 : seat.tenGhe % 16}</button>
                        </div>
                    </Fragment>
                );
            }
        }
       
    }
}

export default ListSeat;
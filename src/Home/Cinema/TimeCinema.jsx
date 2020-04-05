import React, { Component } from 'react';

class TimeCinema extends Component {

    render() {
        let {mangRap,danhSachRap} = this.props;
        return (
            <button className="btn" onClick={()=>{this.props.handleCumRap(mangRap)}}>
                <div className="cumRap">
                    <div className="cumRap__img">
                        <img src={danhSachRap.logo} alt="logoRap" />
                    </div>
                    <div className="cumRap__button">
                        <p className="tenCumRap">
                            {mangRap.tenCumRap}
                        </p>
                        <p className="maCumRap">
                            {mangRap.diaChi}
                        </p>
                    </div>
                </div>
            </button>
        );
    }
}

export default TimeCinema;
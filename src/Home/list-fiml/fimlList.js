import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom"
class FimlList extends Component {

    render() {
        let { film } = this.props;
        return (
            <div className="wap__film">
                <div className="film">
                <Link to={`/detail/${film.maPhim}`}>
                        <div className="film__content" style={{backgroundImage: "url(" + film.hinhAnh + ")"}}>
                            {/* <img src={film.hinhAnh} className="img-fluid image__film" alt="" /> */}
                            <div className="hover__film">
                            
                                <Link to={film.trailer}>
                                {/* <video tabindex="-1" class="video-stream html5-main-video" controlslist="nodownload" style="width: 898px; height: 505px; left: 0px; top: 12.4375px;" src="blob:https://www.youtube.com/b31f0e21-c685-4b15-866f-af205b15d447"></video> */}
                                    <img src="https://tix.vn/app/assets/img/icons/play-video.png" alt="" href={film.trailer} className="img-fluid" />
                                </Link>
                            </div>
                            <span className="room">C16</span>
                            <div className="point__film">
                                <p className="txtPoint">{film.danhGia}</p>
                                <p className="star">
                                    <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                    <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                    <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                    <img src="https://tix.vn/app/assets/img/icons/star1.png" alt="" className="smallStar" />
                                    <img src="https://tix.vn/app/assets/img/icons/star1.2.png" alt="" className="half__star" />
                                </p>
                            </div>
                        </div>
                    </Link>
                    <div className="info__film">
                        <h6>{film.tenPhim}</h6>
                        <p>117 phút</p>
                        <div className="hover__infoFilm">
                        <NavLink to={`/detail/${film.maPhim}`}>MUA VÉ</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FimlList;
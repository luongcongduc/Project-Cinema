import React, { Component } from 'react';
import CarouselAppHome from './CarouselAppHome'
class AppHome extends Component {

    render() {
        return (
            <section id="AppHome">
                <div className="appHome__wrap">
                    <div className="appHome__box">
                        <div className="row">
                            <div className="col-md-6 box__left">
                                <p className="text_top">Ưng dụng tiện lợi dành cho  </p>
                                <p className="text_top">người yêu điện ảnh.</p>
                                <p className="text_center">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                <button>App miễn phí - Tải về ngay!</button>
                                <p className="text_bottom">123phim có 2 phiên bản  <span><button>IOS</button></span><span><button>Android</button></span></p>
                            </div>
                            <div className="col-md-6 box__right">
                            <img src="https://tix.vn/app/assets/img/icons/phone_hand.png" alt="" />
                                <div className="carousel__themes">
                                <CarouselAppHome />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppHome;
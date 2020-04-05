import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <section id="news">
                <div className="news">
                    <div className="row news__wrap">
                        <div className="col-xs-12 news__center">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#dienAnh" role="tab" aria-controls="home" aria-selected="true">Điện ảnh 24h</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#review" role="tab" aria-controls="profile" aria-selected="false">Review</a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#khuyenMai" role="tab" aria-controls="profile" aria-selected="false">Khuyến mãi</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="dienAnh" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row news__box">
                                        <div className="col-sm-6 news__top">
                                            <div className="news__img">
                                                <button>
                                                    <img src="https://s3img.vcdn.vn/123phim/2019/12/2df113b424bb22cad063517e044cf0f4.jpg" className="img-fluid" alt="" />
                                                </button>
                                            </div>
                                            <button>
                                                <p className="title__news">Cụm rạp CGV chính thức có mặt trên 123Phim</p>
                                            </button>
                                            <p className="news__docs">Chào đón cụm rạp CGV trên hệ thống đặt vé trực tuyến 123Phim.
                </p>
                                        </div>
                                        <div className="col-sm-6 news__top">
                                            <div className="news__img">
                                                <button>
                                                    <img src="https://s3img.vcdn.vn/123phim/2019/12/bang-hoang-nhan-ra-diem-ca-chua-cua-the-rise-of-skywalker-thap-nhat-trong-loat-phim-star-wars-15768380710749.jpg" className="img-fluid" alt="" />
                                                </button>
                                            </div>
                                            <button>
                                                <p className="title__news">Bàng hoàng nhận ra, điểm Cà chua của The Rise of
                                                  Skywalker thấp nhất trong
                    loạt phim Star Wars</p>
                                            </button>
                                            <p className="news__docs">Sau khi trình chiếu tại Bắc Mỹ, hiện điểm Star Wars IX còn
                                              thấp hơn cả Star Wars
                                              II, khiến bộ phim trở thành bộ phim được đánh giá tệ nhất của thương hiệu đình
                  đám.</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4 news__bot">
                                            <div className="news__img">
                                                <button>
                                                    <img src="https://s3img.vcdn.vn/123phim/2019/12/900002a9d8d9d2169ab1505a630cb1c0.jpg" className="img-fluid" alt="" />
                                                </button>
                                            </div>
                                            <button>
                                                <p className="title__news">Hơn 40 năm tuổi nhưng thương hiệu điện ảnh Star Wars vẫn
                                                  có sức hút nhất mọi
                    thời đại</p>
                                            </button>
                                            <p className="news__docs">Chương cuối về gia tộc Skywalker chuẩn bị ra mắt khán giả,
                                              hãy cùng nhìn lại
                                              lịch sử phát triển và những lý do tạo nên sự thành công của thương hiệu điện ảnh
                  được yêu mến này.</p>
                                        </div>
                                        <div className="col-sm-4 news__bot">
                                            <div className="news__img">
                                                <button>
                                                    <img src="https://s3img.vcdn.vn/123phim/2019/12/ha-man-cuoi-nam-tom-holland-song-kiem-hop-bich-voi-will-smith-trong-diep-vien-an-danh-15766405119296.jpg" className="img-fluid" alt="" />
                                                </button>
                                            </div>
                                            <button>
                                                <p className="title__news">Hạ màn cuối năm, Tom Holland 'song kiếm hợp bích' cùng
                                                  Will Smith trong Điệp
                    Viên Ẩn Danh</p>
                                            </button>
                                            <p className="news__docs">Điệp viên siêu đẳng, phụ tá gà mờ, sự kết hợp sẽ đi về đâu??
                </p>
                                        </div>
                                        <div className="col-sm-4 news__bot">
                                            <div className="small__news">
                                                <div className="img__small">
                                                    <button>
                                                        <img src="https://s3img.vcdn.vn/mobile/123phim/2019/11/chi-chi-em-em-sister-sister-c18-15747394235000_60x60.jpg" alt="" />
                                                    </button>
                                                </div>
                                                <button>
                                                    <p className="small__docs">Chị Chị Em Em - Tràn ngập những bí ẩn, mưu mô và bạo
                      lực</p>
                                                </button>
                                            </div>
                                            <div className="small__news">
                                                <div className="img__small">
                                                    <button>
                                                        <img src="https://s3img.vcdn.vn/123phim/2019/12/diem-mat-chi-ten-nhung-bo-phim-kinh-di-khien-dem-giang-sinh-tro-thanh-con-ac-mong-15762661662090.jpg" alt="" />
                                                    </button>
                                                </div>
                                                <button>
                                                    <p className="small__docs">Gọi danh những bộ phim kinh dị khiến đêm Giáng Sinh
                      an lành trở thành cơn ác mộng</p>
                                                </button>
                                            </div>
                                            <div className="small__news">
                                                <div className="img__small">
                                                    <button>
                                                        <img src="https://s3img.vcdn.vn/123phim/2019/11/4-su-khac-biet-thu-vi-giua-ban-dien-anh-va-nguyen-tac-goc-cua-15738060148345.jpg" alt="" />
                                                    </button>
                                                </div>
                                                <button>
                                                    <p className="small__docs">4 sự khác biệt thú vị giữa bản điện ảnh và nguyên tác
                      gốc của Doctor Sleep</p>
                                                </button>
                                            </div>
                                            <div className="small__news">
                                                <div className="img__small">
                                                    <button>
                                                        <img src="https://s3img.vcdn.vn/123phim/2019/12/cum-rap-cgv-chinh-thuc-co-mat-tren-123phim-15761455729806.jpg" alt="" />
                                                    </button>
                                                </div>
                                                <button>
                                                    <p className="small__docs">Đầu năm 2020, Ju-On sẵn sàng chào đón bạn tại phòng
                      chiếu Việt</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade  " id="review" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid mix review">
                                        <a href="" className="new__item d-block">
                                            <figure className="effect-ruby ">
                                                <img src="https://s3img.vcdn.vn/123phim/2019/12/cum-rap-cgv-chinh-thuc-co-mat-tren-123phim-15761455729806.jpg" alt="" />
                                               
                                                <figcaption>
                                                    <h2>

                                                    </h2>
                                                    <p>Ruby did not need any help. Everybody knew that.</p>

                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>
                                    <div className="grid mix review">
                                        <a href="" className="new__item d-block">
                                            <figure className="effect-ruby ">
                                                <img src="https://s3img.vcdn.vn/123phim/2020/03/review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan-15834049872311.jpg" alt="" />
                                               
                                                <figcaption>
                                                    <h2>
                                                            Reveiw: Nang 3, loi hua cua cha
                                                    </h2>
                                                    <p>Nắng 3 tiếp tục mang đến câu chuyện tình cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính..</p>

                                                </figcaption>
                                            </figure>
                                        </a>
                                    </div>

                                </div>

                                <div className="tab-pane fade  " id="khuyenMai" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="grid mix review">
                                        <div className="ruby">
                                            <a href="" className="new__item d-block">
                                                <figure className="effect-ruby ">
                                                    <img src="https://s3img.vcdn.vn/123phim/2020/03/cgv-bhd-star-mua-2-ve-tinh-tien-1-khi-thanh-toan-qua-zalopay-15831471540618.jpg" height="500px" alt="" />
                                                    <figcaption>
                                                        <h2>
                                                            Áp dụng cho KH mới của ZaloPay khi mua tại CGV suất chiếu Thứ 7
                                                         </h2>
                                                        <p>CGV – Mua 2 vé tính tiền 1 khi thanh toán qua ZaloPay.</p>

                                                    </figcaption>

                                                </figure>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="grid mix review">
                                        <div className="ruby">
                                            <a href="" className="new__item d-block">
                                                <figure className="effect-ruby ">
                                                    <img src="https://s3img.vcdn.vn/123phim/2020/03/mua-ve-phim-bhd-star-nhan-ngay-hoan-tien-20-15832109446679.jpg" alt="" />
                                                    <figcaption>
                                                        <h2>
                                                        Mua vé phim BHD Star - Nhận ngay Hoàn Tiền 20%
                                                        </h2>
                                                        <p>Mua vé BHD, nhận ngay hoàn tiền xả láng 20% khi thanh toán qua ZaloPay..</p>
                                                   </figcaption>
                                              </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid mix review">
                                        <div className="ruby">
                                            <a href="" className="new__item d-block">
                                                <figure className="effect-ruby ">
                                                    <img src="https://s3img.vcdn.vn/123phim/2020/02/chao-ban-moi-bhd-star-mua-2-tinh-tien-1-15815658151639.png" alt="" />
                                                    <figcaption>
                                                        <h2>
                                                        Mua vé phim BHD Star - Mua 2 tính tiền 1
                                                        </h2>
                                                        <p>Ưu đãi cực chất: Mua 2 vé BHD chỉ cần trả tiền 1 vé khi thanh toán .</p>
                                                   </figcaption>
                                              </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="grid mix review">
                                        <div className="ruby">
                                            <a href="" className="new__item d-block">
                                                <figure className="effect-ruby ">
                                                    <img src="https://s3img.vcdn.vn/123phim/2020/01/vui-tet-cung-zalopay-cgv-mua-1-tang-1-15796786620561.jpg" alt="" />
                                                    <figcaption>
                                                        <h2>
                                                        Mua vé phim BHD Star - Mua 2 tính tiền 1
                                                        </h2>
                                                        <p>Ưu đãi cực chất: Mua 2 vé BHD chỉ cần trả tiền 1 vé khi thanh toán .</p>
                                                   </figcaption>
                                              </figure>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="news__more">
                            <button type="button" className="btn news__button">Xem thêm</button>
                        </div>
                    </div>
                </div>



            </section>
        )
    }
}

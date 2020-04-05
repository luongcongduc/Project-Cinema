import React, { Component } from 'react';

class CarouselAppHome extends Component {

    render() {
        return (
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
              
                    <div className="carousel-item active ">
                        <div className="item">
                            <img src="https://tix.vn/app/assets/img/icons/slide0.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item">
                            <img src="https://tix.vn/app/assets/img/icons/slide1.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item">
                            <img src="https://tix.vn/app/assets/img/icons/slide2.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item">
                            <img src="https://tix.vn/app/assets/img/icons/slide3.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="item">
                            <img src="https://tix.vn/app/assets/img/icons/slide4.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default CarouselAppHome;
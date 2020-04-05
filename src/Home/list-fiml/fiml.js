import React, { Component, Fragment } from 'react';
import Slick from "./slick";
class Films extends Component {

    render() {
        return (
            <Fragment>
                <section id="film__section">
                    <div className="film__section">
                        <div className="film__list">
                            <div className="container">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#dangchieu" role="tab" aria-controls="home" aria-selected="true">Đang Chiếu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#sapchieu" role="tab" aria-controls="profile" aria-selected="false">Sắp Chiếu</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="dangchieu" role="tabpanel" aria-labelledby="home-tab">
                                        <Slick />
                                    </div>
                                    <div className="tab-pane fade" id="sapchieu" role="tabpanel" aria-labelledby="profile-tab">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Films; 
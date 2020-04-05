import React, { Component, Fragment } from 'react';
import { NavLink } from "react-router-dom"
class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
        }
    }

    handleClear = () => {
        localStorage.clear();
        window.location.reload();
    }
    componentDidMount() {
        return this.state.isValid ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'visible');
    }
    renderLogin = () => {
        let user = JSON.parse(localStorage.getItem('UserCustomer'));
        if (localStorage.getItem('UserCustomer') && user.maLoaiNguoiDung === "KhachHang") {
            return (
                <Fragment>
                    <NavLink to="/" className="dang__nhap">
                        <img src="https://tix.vn/app/assets/img/avatar.png" alt="" className="img-fluid" />
                        <p style={{ display: 'inline-block' }} className="text-dark">{user.taiKhoan}</p>
                        <button className="btn btn-primary dang__xuat" onClick={() => { this.handleClear() }}>Đăng xuất</button>
                    </NavLink>
                </Fragment>
            )
        } else {
            return (
                <NavLink to="/login" className="dang__nhap">

                    <img src="https://tix.vn/app/assets/img/avatar.png" alt="" className="img-fluid" />
                    <p style={{ display: 'inline-block' }}>Đăng Nhập</p>
                </NavLink>
            )
        }
    }

    handleMenu = () => {
        this.setState({
            isValid: true
        })
    }

    handleCloseMenu = () => {
        this.setState({
            isValid: false
        })
    }

    renderMenu = () => {
        return (
            <div className="menu__section">
                <div className="menu__wrap">
                    <div className="menu__login">
                        <div className="account">
                            {this.renderLogin()}
                        </div>
                        <button className="close__menu" onClick={this.handleCloseMenu}><i className="fas fa-times" /></button>
                    </div>
                    <div className="list__section">
                        <a href="/#film__section">Lịch chiếu</a>
                        <a href="/#Cinema__wrap">Cụm rạp</a>
                        <a href="/#news">Tin tức</a>
                        <a href="/#AppHome">Ứng dụng</a>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="main__header">
                <div className="header">
                    <div className="header__logo">
                        <a href="/">
                            <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="header__center">
                        <a href="/#film__section">Lịch Chiếu</a>
                        <a href="/#Cinema__wrap">Cụm Rạp</a>
                        <a href="/#news">Tin Tức</a>
                        <a href="/#AppHome">Ứng Dụng</a>
                    </div>
                    <div className="header__login">
                        <div className="account">

                            {/* <a href="">
                            <img src="https://tix.vn/app/assets/img/avatar.png" alt="" />
                            <span>dang nhap</span>
                        </a> */}
                            {this.renderLogin()}
                        </div>
                        <div className="cham">
                            |
                    </div>
                        <div className="location">
                            <div>
                                <a href="">
                                    <img src="https://tix.vn/app/assets/img/icons/location-header.png" alt="" />
                                </a>
                            </div>
                            <div className="dropdown-toggle selectMenu white ng-binding" data-toggle="dropdown" aria-expanded="true" >
                                <a href="">
                                    Hồ Chí Minh
                                <ul className="dropdown-menu selectScroll" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Đà Nẵng</a>
                                        <a className="dropdown-item" href="#">Quảng Nam</a>
                                        <a className="dropdown-item" href="#">Hà Nội</a>
                                        <a className="dropdown-item" href="#">Long An</a>
                                        <a className="dropdown-item" href="#">Tây Ninh</a>
                                        <a className="dropdown-item" href="#">Hải Phòng</a>

                                    </ul>
                                </a>

                            </div>
                        </div>


                    </div>
                    <div className="menu__options">
                        <button onClick={this.handleMenu}><i className="fas fa-bars" /></button>
                    </div>
                    {this.state.isValid ? this.renderMenu() : ''}
                </div>

            </div>
        )
    }
}
export default Header;

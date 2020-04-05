import axios from "axios"

//lấy danh sách phim
export const getListFiml = () =>{
    return dispatch =>{
        axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
        .then(result =>{
            dispatch({
                type: 'GET_LIST_FILM',
                listFiml: result.data,
            })
        })
        .catch(err =>{
            console.log(err)
        })
    };
}

//lấy thông tin phim
export const getThongTinPhim=(id) =>{
    return dispatch =>{
        axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
        .then(result =>{
            dispatch({
                type:"GET_FILM",
                fimls: result.data
            })
        })
        .catch(err =>{
            console.log(err.response.data)
        })
    }
}

//lấy thông tin hệ thống Rạp
export const logoCinema = () =>{
    return dispatch=>{
        axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap"
        })
        .then(result =>{
            dispatch({
                type:"GET_CINEMA",
                cinema: result.data
            })
        })
        .catch(err =>{
            console.log(err.response.data)
        })
    }
}


// lấy thông tin lịch chiếu theo theo hệ thống rạp
export const getListCinema = () =>{
    return dispatch=>{
        axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
        })
        .then(result =>{
            dispatch({
                type:"GET_LIST_CINEMA",
                listCinema: result.data,
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
}


//lấy thông tin lịch chiếu Phim
export const getListShowTimes = id =>{
    return dispatch =>{
        axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}
            `
        })
        .then(result=>{
            dispatch({
                type:"LIST_SHOWTIMES",
                listShowTimes: result.data
            })
        })
        .catch(err =>{
            console.log(err);
        })
    }
}


/* Login */
// Đăng nhập khách hàng
export const LoginUser = (user, history) =>{
    return dispatch =>{
        axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap ",
            data: user
        })
        .then(result =>{
            if(result.data.maLoaiNguoiDung === "KhachHang"){
                localStorage.setItem("UserCustomer",JSON.stringify(result.data));
                history.push("/")
            } else {
                alert ("Đăng nhập không thành công")
            }
        })
        .catch(err =>{
            console.log(err.response.data)
        })
    }
}

// Đăng ký Người dùng
export const RegisterUser = (user, history) =>{
    return dispatch =>{
        axios ({
            method:"POST",
            url :"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: user
        })
        .then(result =>{
            dispatch({
                type:"REGISTER",
                user: result.data,
            })
            if(result.data === true){
                history.push("/")
            }
        })
        .catch(err =>{
            console.log(err.response.data);
        })
    }
}


// Đăng nhập Admin
export const LoginAdmin = (user, history) =>{
    return dispatch => {
        axios({
            method:"POST",
            url :"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap ",
            data: user
        })
        .then(result =>{
            if(result.data.maLoaiNguoiDung === "QuanTri"){
                localStorage.setItem("User",JSON.stringify(result.data));
                history.push("/dashboard")
            } else {
                alert("login errorr");
            }
        })
        .catch( err =>{
            console.log(err.response.data)
        })
    }
}

// Lấy danh sách người dùng

export const getlistUser = ()=>{
    return dispatch =>{
        axios({
            method:"GET",
            url : "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",

        })
        .then(result =>{
            dispatch({
                type:"GET_LIST_USER",
                listUser: result.data
            })
        })
        .catch(err =>{
            console.log(err.response.data)
        })
    }
}

/* THÊM NGƯỜI DÙNG */

export const addUser = user =>{
    let userLogin = JSON.parse(localStorage.getItem('User'));
    return dispatch =>{
        axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            data: user,
            headers: { "Authorization" : "Bearer " + userLogin.accessToken}
            
        })
        .then(result =>{
            alert("Thêm thành công!");
        })
        .catch(err =>{
            console.log(err.response.data)
        })
    }
}

/* CẬP NHẬT NGƯỜI DÙNG */

export const editUser = user =>{
    console.log(user);
    return dispatch =>{
        let userLogin = JSON.parse(localStorage.getItem("User"));
        axios({
            method:"PUT",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            data: user,
            headers: { "Authorization" : "Bearer " + userLogin.accessToken}
        })
        .then(result =>{
            alert("Thay đổi thành công!");
            window.location.reload();
        })
        .catch(err =>{
            console.log(err)
        })
    }
}

/* XOÁ NGƯỜI DÙNG */

export const deleteUser = userData =>{
    return dispatch =>{
        let userLogin = JSON.parse(localStorage.getItem("User"));
        axios({
            method:"DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userData.taiKhoan}`,
            headers: { "Authorization" : "Bearer " + userLogin.accessToken},
        })
        .then(result =>{
            window.location.reload();
        })
        .catch(err =>{
            console.log(err.response);
        })
    }
}
/* Đặt vé xem Phim */
export const Booking = id =>{
    return dispatch =>{
        let userLogin = JSON.parse(localStorage.getItem('UserCustomer'));
        axios({
            method:"http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
            data: id,
            headers :{"Authorization" :"Bearer" + userLogin.accessToken}
        })
        .then(result =>{

        })
        .catch(err=>{
            console.log(err.response)
        })
    }
}
/*Thêm trailer */
export const getTrailer=(id) =>{
    return dispatch =>{
        axios({
            method:"GET",
            url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
        .then(result =>{
            dispatch({
                type:"TRAILER",
                trailers: result.data
            })
        })
        .catch(err =>{
            console.log(err.response.data)
        })
    }
}

/* THÊM PHIM*/
 export const addFilm = film =>{
    return dispatch =>{
        let userLogin = JSON.parse(localStorage.getItem("User"));
        axios({
            method:"POST",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
            data: film,
            headers: {"Authorization" : "Bearer " + userLogin.accessToken}
        })
        .then(result =>{
            console.log(result);
            dispatch({
                type: "ADD_FILM",
                addFilm: result.data
            })
            alert("Thêm thành công")
        })
        .catch(err =>{
            console.log(err.response);
        })
    }
 }

 /* XÓA PHIM */
  export const deleteFilm = film =>{
      return dispatch =>{
          let userLogin = JSON.parse(localStorage.getItem("User"));
          axios({
              method:"DELETE",
              url:`http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${film}`,
           
              headers: { "Authorization" : "Bearer " + userLogin.accessToken}
          })
          .catch( result=>{
            alert("Xóa thành công!");
            window.location.reload();
          })
          .then(err =>{
              alert(err.response.data)
          })
      }
  }
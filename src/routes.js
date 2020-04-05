import Home from './Home/Home';
import Detail from "./Detail-Movie/Detail"
import Login from "./Login/login";
import Register from "./Đangky/Register";
import Seat from "./Booking/Seat";

import Dashboard from "./Admin/dash-board/dashboard"
import ThemNguoiDung from "./Admin/ThemNguoiDung";
import AddFilm from "./Admin/Add-Fiml/AddFilm";
const routesHome = [
    {
        path:"/",
        exact:true,
        component: Home
    },
    {
        path:"/detail/:id",
        exact: false,
        component: Detail
    },
    {
        path: "/login",
        exact: false,
        component: Login,
      
    },
    {
        path:"/register",
        exact: false,
        component: Register
    },
    {
        path:"/seat/:id",
        exact: false,
        component: Seat
    }
];

const routesAdmin = [
    {
        path: "/dashboard",
        exact: false,
        component: Dashboard
    },
    {
        path:"/them-nguoi-dung",
        exact: false,
        component: ThemNguoiDung
    },
    {
        path:"/add-film",
        exact: false,
        component: AddFilm
    }
]

export {routesHome, routesAdmin};
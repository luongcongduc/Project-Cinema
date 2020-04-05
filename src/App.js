import React, { Fragment } from 'react';
import './App.css';
import {BrowserRouter,Route,  Switch} from "react-router-dom";
import {routesHome, routesAdmin} from "./routes";
import Detail from "./Detail-Movie/Detail";
import Admin from "./Admin/Admin"
import HomeLayout from "./templates/HomeTemplate";
import AdminLayout from "./templates/AdminTemplate"
function App() {

  const pathHome = route =>{
    if(route && route.length > 0){
      return route.map((item,index)=>{
        return(
          <HomeLayout key={index} path={item.path} exact={item.exact} Component={item.component} />
        )
      })
    }
  }

  const pathAdmin = route => {
    if(route && route.length > 0) {
      return route.map((item,index) =>{
        return (
          <AdminLayout key={index} path={item.path} exact={item.exact} Component={item.component} />
        )
      })
    }
  }

  return (
   <BrowserRouter>
      <Fragment>
        <Switch>
          {pathHome(routesHome)}
          {pathAdmin(routesAdmin)}

          <Route path="/detail" component={Detail} />
          <Route path="/admin" component= {Admin} />
        </Switch>
      </Fragment>
   </BrowserRouter>
  );
}

export default App;

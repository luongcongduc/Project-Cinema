import React, { Fragment } from 'react'
import {Route, Redirect} from "react-router-dom";
import Nav from "../Admin/Nav"
const AdminLayout = props =>{
    return (
        <Fragment>
            <Nav />
            {props.children}
        </Fragment>
    )
}

export default function AdminTemplate({Component, ...props}) {
    return (
        
            <Route {...props} render={propsComponent =>{
                if(localStorage.getItem("User")) {
                    return(
                        <AdminLayout>
                            <Component {...propsComponent} />
                        </AdminLayout>
                    );
                }
                 else{
                    return <Redirect to="/admin" />;
                }
            }}/>
        
    )
}

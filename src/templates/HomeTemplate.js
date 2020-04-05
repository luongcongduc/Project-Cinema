import React, { Fragment } from 'react'
import {Route} from "react-router-dom"

const HomeLayout = props =>{
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default function HomeTemplate({Component, ...props}) {
    return (
        <div>
            <Route {...props} render={propsComponent =>(
                <HomeLayout>
                    <Component {...propsComponent} />
                </HomeLayout>
            )} />
        </div>
    )
}

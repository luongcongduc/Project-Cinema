import React, { Component, Fragment } from 'react';

class Logo extends Component {

    render() {
        let{cinema} = this.props;
        return (
            <Fragment>
                <button className="btn logo" onClick={()=>{this.props.handleLogo(cinema)}}> 
                    <img src={cinema.logo} alt="" className="img-fluid" style={{width:75}} />
                </button>
            </Fragment>
        );
    }
}

export default Logo;
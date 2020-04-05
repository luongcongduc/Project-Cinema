import React, { Component } from 'react';
import * as action from "../../redux/action/index";
import {connect} from "react-redux"
import FimlList from './fimlList';
import Slider from 'react-slick'
class Slick extends Component {
    componentDidMount(){
        this.props.getListFiml();
    }
    renderFiml = () =>{
        let {listFiml} = this.props;
        return listFiml.map((item,index) =>{
         return   <FimlList key={index} film={item} />
        })
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            rows: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
       return (
           <Slider {...settings}>
               {this.renderFiml()}
           </Slider>
       )
    };
  
}

const mapStateToProps = state =>{
    return{
        listFiml : state.fimlsReducer.listFiml
    }
}

const mapDispatchToprops= dispatch=>{
    return {
        getListFiml : () =>{
            dispatch(action.getListFiml());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops) (Slick);
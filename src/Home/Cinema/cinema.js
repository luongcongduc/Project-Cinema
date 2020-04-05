import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../../redux/action/index"
import ListCinema from "./ListCinema"
class Cinema extends Component {

    componentDidMount() {
        this.props.getThongTinRap()
    }
    render() {
        let { cinema } = this.props;
        return (
            <section id="Cinema__wrap">
                <div className="cinema__wrap">
                    <div className="cinema__main">
                        <ListCinema cinema={cinema} />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToprops = state => {
    return {
        cinema: state.fimlsReducer.cinema
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getThongTinRap: () => {
            dispatch(action.logoCinema())
        }
    }
}
export default connect(mapStateToprops, mapDispatchToProps)(Cinema);
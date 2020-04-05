import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../redux/action/index";
import $ from 'jquery';
class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: "",
        }
    }

    handleonChange = e => {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.LoginAdmin(this.state, this.props.history);
    }
    render() {
        return (

            <div class="container pandaa">
                <div class="panda">
                    <div class="ear"></div>
                    <div class="face">
                        <div class="eye-shade"></div>
                        <div class="eye-white">
                            <div class="eye-ball"></div>
                        </div>
                        <div class="eye-shade rgt"></div>
                        <div class="eye-white rgt">
                            <div class="eye-ball"></div>
                        </div>
                        <div class="nose"></div>
                        <div class="mouth"></div>
                    </div>
                    <div class="body"> </div>
                    <div class="foot">
                        <div class="finger"></div>
                    </div>
                    <div class="foot rgt">
                        <div class="finger"></div>
                    </div>
                </div>
                <form className="panda__form"  onSubmit={this.handleSubmit}>
                    <div class="hand"></div>
                    <div class="hand rgt"></div>
                    <h1 className="panda__title">Panda Login</h1>
                    <div class="form-group">
                        <input required="required" class="form-control panda__input " name="taiKhoan" onChange={this.handleonChange}  required />
                        <label class="form-label">Username    </label>
                    </div>
                    <div class="form-group">
                        <input id="password" type="password" required="required" class="form-control panda__input" name="matKhau" onChange={this.handleonChange} />
                        <label class="form-label">Password</label>
                        <p class="alert">Invalid Credentials..!!</p>
                        <button class="btn login">Login </button>
                    </div>
                </form>
            </div>

        );
    }

    componentDidMount(){
        $('#password').focusin(function(){
            $('form').addClass('up')
          });
          $('#password').focusout(function(){
            $('form').removeClass('up')
          });
          
          // Panda Eye move
          $(document).on( "mousemove", function( event ) {
            var dw = $(document).width() / 15;
            var dh = $(document).height() / 15;
            var x = event.pageX/ dw;
            var y = event.pageY/ dh;
            $('.eye-ball').css({
              width : x,
              height : y
            });
          });
          
          // validation
          
          
          $('.btn').click(function(){
            $('form').addClass('wrong-entry');
              setTimeout(function(){ 
                 $('form').removeClass('wrong-entry');
               },3000 );
          });
    }
}

const mapDispatchToProps = dispatch => {
    return {
        LoginAdmin: (user, history) => {
            dispatch(action.LoginAdmin(user, history))
        }
    }
}
export default connect(null, mapDispatchToProps)(Admin);
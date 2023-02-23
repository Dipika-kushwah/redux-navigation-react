import React, { Component } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "./Login.css";
import axios from "axios";
import { connect } from "react-redux";

import { RegisterPage } from "./action/Action";
import { LoginPage } from "./action/Action";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    let tarGet = event.target.name;

    this.setState({ [tarGet]: event.target.value });

    console.log(this.state);
  };

  submitDetails = async () => {
    const users = {
      email: this.state.email,
      password: this.state.password,
    };
    try {
      const resp = await axios.post(
        "http://localhost:8080/auth/sign_in/",
        users
      );

      console.log("=====resp===", resp.headers["uid"]);
      cookies.set("resp", resp);
      const newData = {
        Login: false,
        WelcomePage: true,
        register: false,
      };
      this.props.LoginPage([newData, resp]);
    } catch (error) {
      alert("Email and PassWord not valid");
    }
  };

  changePage = () => {
    const newData1 = {
      Login: false,
      WelcomePage: false,
      Register: true,
    };
    this.props.RegisterPage(newData1);
  };

  render() {
    return (
      <div>
        <MDBContainer className="my-5 gradient-form">
          <MDBRow>
            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column ms-5">
                <div className="text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: "185px" }}
                    alt="logo"
                  />
                  <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                </div>

                <p>Please login to your account</p>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <div className="text-center pt-1 mb-5 pb-1">
                  <MDBBtn
                    className="mb-4 w-100 gradient-custom-2"
                    onClick={() => {
                      this.submitDetails();
                    }}
                  >
                    Sign in
                  </MDBBtn>

                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>

                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                  <p className="mb-0">Don't have an account?</p>

                  <MDBBtn
                    outline
                    className="mx-2"
                    color="danger"
                    onClick={() => {
                      this.changePage();
                    }}
                  >
                    create an account
                  </MDBBtn>
                </div>
              </div>
            </MDBCol>

            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
const mapStateToprops = (state) => ({
  data: state,
});

export default connect(mapStateToprops, { LoginPage, RegisterPage })(Login);

import React, { Component } from "react";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
 
} from "mdb-react-ui-kit";
import "./Register.css";
import { connect } from "react-redux";
import { Welcome } from "./action/Action";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (event) => {
    
    let tarGet = event.target.name;
   

    this.setState({ [tarGet]: event.target.value });
    

    console.log(this.state);
    
  };

  handleSubmit = async () => {
    
    const newData = {
      full_name: this.state.full_name,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    };
    const newData1 = {
      Login: false,
      WelcomePage: true,
      Register: false,
    };
    try {
      const respLogin = await axios.post("http://localhost:8080/auth/", newData);
      
      console.log("=====resp===", respLogin);
      if (respLogin){
        this.props.Welcome([newData1,respLogin]);
      }
     
      
    } catch (error) {
      
      console.log("error");
    }
  };

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow className="justify-content-center align-items-center m-5">
          <MDBCard>
            <MDBCardBody className="px-4">
              <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">
                Registration Form
              </h3>

              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First Name"
                    size="lg"
                    id="form1"
                    type="text"
                    name="full_name"
                    value={this.state.full_name}
                    onChange={this.handleChange}
                  />
                </MDBCol>

                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last Name"
                    size="lg"
                    id="form2"
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    size="lg"
                    id="form2"
                    type="number"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Confirm Password"
                    size="lg"
                    id="form2"
                    type="number"
                    name="confirm_password"
                    value={this.state.confirm_password}
                    onChange={this.handleChange}
                  />
                </MDBCol>
              </MDBRow>

            
              <MDBBtn
                className="mb-4"
                size="lg"
                onClick={() => {
                  this.handleSubmit();
                }}
              >
                Submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
    );
  }
}
const mapStateToprops = (state) => ({
  data: state,
});
export default connect(mapStateToprops,{Welcome})(Register);

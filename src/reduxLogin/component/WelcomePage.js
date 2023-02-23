import React, { Component } from "react";
import { connect } from "react-redux";

import { get_data } from "./action/Action";

import { LoginPage } from "./action/Action";
import { Cookies } from "react-cookie";
import axios from "axios";

const cookie = new Cookies();

const data = cookie.get("resp");
class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  pageChange = () => {
    const deleteData = {
      access_token: data.headers["access-token"],
      uid: data.headers.uid,
      client: data.headers["client"],
    };

    const resp = axios.delete(
      "http://localhost:8080/auth/sign_out/",
      deleteData
    );
    console.log("=====resp===", resp);

    const newData1 = {
      Login: true,
      WelcomePage: false,
      Register: false,
    };

    this.props.LoginPage([newData1, "resp"]);
  };

  render() {
    return (
      <div>
        <h1>WELCOME-:{this.props.data.info.data.data.full_name}</h1>

        <h3>Name: {data.data.data.full_name}</h3>

        <button
          onClick={() => {
            this.pageChange();
          }}
        >
          Logout
        </button>
      </div>
    );
  }
}
const mapStateToprops = (state) => ({
  data: state,
});
export default connect(mapStateToprops, { get_data, LoginPage })(WelcomePage);

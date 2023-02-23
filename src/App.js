import React, { Component } from "react";
// import { Register } from "./reduxLogin/component/action/Action";
// import { Login } from "./reduxLogin/component/action/Action";
// import { WelcomePage } from "./reduxLogin/component/action/Action";
// import Main from "./main";
// import { reducer } from "./reduxLogin/component/Reducer/Reducer";
import Login from "./reduxLogin/component/Login";

// import { WelcomePage } from "./reduxLogin/component/action/Action";
import WelcomePage from "./reduxLogin/component/WelcomePage";
import Register from "./reduxLogin/component/Register";
import { get_page } from "./reduxLogin/component/action/Action";
import { connect } from "react-redux";

// import { withCookies } from "react-cookie";
// import { BrowserRouter ,Route,Routes } from "react-router-dom";
 class App extends Component {
  // constructor(){
  //   super()
    
  //   this.state={
      
  //   }
  // }
  render() {
    debugger
    return (
      <>
      {this.props ? <>
       {this.props.data.data.Login ? <Login/> : null}
        {this.props.data.data.Register ? <Register/> : null}
        {this.props.data.data.WelcomePage ? <WelcomePage/> : null}
        </>
        : <h1>No data Found</h1>}
        
        {/* <BrowserRouter>
         
         <Routes>
            <Route  exact path="/"  element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/welcomepage" element={<WelcomePage/>}/>
          </Routes>
         
        </BrowserRouter> */}
      </>
    );
  }
}

const mapStateToprops = (state) => ({
    data: state,
  });
  export default connect(mapStateToprops,{get_page})(App)
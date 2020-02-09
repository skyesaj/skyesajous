import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import axios from "axios";
// import axiosAuth from "../axios/axiosAuth";
// import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../actions/index";
import SignUpForm from "./SignUp/SignUpForm";

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 20%;
  width: 50%;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(195, 116, 51);
  color: rgb(195, 116, 51);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 2rem;
  border-radius: 15px;
`;
class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        `https://haircare-backend-dingo.herokuapp.com/customer/login`,
        this.state.credentials
      )
      .then(res => {
        console.log("login", res);
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("this is login error", err);
      });
    console.log(this.state.credentials);
  };

  render() {
    return (
      <div>
        <nav className="Navigation">
          <div class="navbar">
            <a href="https://bwhaircare02.github.io/MarketingPage/">Home</a>
            <a href="https://bwhaircare02.github.io/MarketingPage/about.html">
              About Us
            </a>
            <a href="https://haircare.skyesajous.now.sh/search">Search</a>
            <div class="dropdown">
              <button class="dropbtn">
                Haircare
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="https://haircare.skyesajous.now.sh/">LogIn</a>
                <a href="https://haircare.skyesajous.now.sh/signup">SignUp</a>
                <a herf="https://haircare.skyesajous.now.sh/dashboard">
                  Write A Review
                </a>
              </div>
            </div>
          </div>
        </nav>

        <h1>Welcome Hair Lovers</h1>

        <Container>
          <form onSubmit={this.handleSubmit}>
            <input
              className="text"
              type="text"
              name="username"
              placeholder="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              required
            />
            <input
              className="text"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              required
            />

            <Button primary type="submit">
              Login
            </Button>

            <Button primary type="submit">
              <Link to="/signup"> Sign Up</Link>
            </Button>
          </form>
        </Container>
        <footer>Copyright Skye Sajous 2020</footer>
      </div>
    );
  }
}
const mapDispatchToProps = {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
};
export default connect(state => state, mapDispatchToProps)(Login);

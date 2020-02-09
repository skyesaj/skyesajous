import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
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
const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 20%;
  width: 50%;
`;
class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      customer: {
        username: "",
        password: "",
        email: "",
        location: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      customer: {
        ...this.state.customer,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // const authAxios = axiosAuth();
    axios
      .post(
        `https://haircare-backend-dingo.herokuapp.com/customer/register`,
        this.state.customer
      )
      .then(res => {
        console.log("signup", res);

        this.props.history.push("/");
      })
      .catch(err => {
        console.log("this is login error", err);
      });
    console.log(this.state.customer);

    if (
      this.state.customer.username !== "" &&
      this.state.customer.password !== "" &&
      this.state.customer.email !== "" &&
      this.state.customer.location !== ""
    ) {
      this.setState({
        customer: {
          username: "",
          password: "",
          email: "",
          location: ""
        }
      });
    }
    console.log(this.state.customer);
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
        <Container>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>username:</label>
              <input
                className="text"
                type="text"
                name="username"
                onChange={this.handleChange}
                value={this.state.customer.username}
              ></input>

              <label>Password:</label>
              <input
                className="text"
                type="text"
                name="password"
                onChange={this.handleChange}
                value={this.state.customer.password}
              ></input>
              <div className="text">
                <label>Email:</label>
                <input
                  className="text"
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  value={this.state.customer.email}
                ></input>
              </div>
              <label>Location:</label>
              <input
                className="text"
                type="text"
                name="location"
                onChange={this.handleChange}
                value={this.state.customer.location}
              ></input>
            </div>

            <Button type="submit"> Add customer</Button>
          </form>
        </Container>
      </div>
    );
  }
}
export default SignUpForm;

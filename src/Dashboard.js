/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp/SignUp";
import { Link } from "react-router-dom";
import CustomerProfile from "./components/Reviews/CustomerProfile";
import CustomerReview from "./components/Reviews/CustomerReview";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(195, 116, 51);
  color: rgb(195, 116, 51);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 2rem;
  // border-radius: 15px;
`;

const Dashboard = ({ setContent }) => {
  console.log(setContent);
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

      <div className="Container-review">
        <h1>Dashboard</h1>
        <div>
          <iframe
            className="hair-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kNw8V_Fkw28"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;
            picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        {/* <h3>Welcome Customers and Stylist</h3> */}
        <Link to="/CustomerProfile">
          <Button className="review-button">Customer</Button>
        </Link>

        <Link to="/stylistprofile">
          <Button>Stylist</Button>
        </Link>

        <CustomerReview setContent={setContent} />
        <Link to="/addform">
          <Button className="add-review">Add Review </Button>
        </Link>

        {/* <Route exact path="/addform" component={AddForm} /> */}
        <Route path="/signup" component={Login} />
      </div>
    </div>
  );
};

export default Dashboard;

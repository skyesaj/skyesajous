import React, { useState } from "react";
import FileInput from "../FileInput";
import { connect } from "react-redux";
// import { stylistFalse } from "../../actions";
import Login from "../Login";
import { Link } from "react-router-dom";
import EditStylistForm from "./EditStylistForm";
import styled from "styled-components";
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

function StylistForm(props) {
  const handleNewLocation = e => {
    props.updateLocation(e.target.value);
  };
  const handleNewEmail = e => {
    props.updateEmail(e.target.value);
  };
  const handleNewUsername = e => {
    props.updateSignupUser(e.target.value);
  };
  // const handleNewPassword = e => {
  //   props.updateSignupPass(e.target.value);
  // };
  const NewDescription = e => {
    props.updateDescription(e.target.value);
  };
  const NewPicUpload = e => {
    props.NewPic(e.target.value);
  };
  const StylistId = e => {
    props.NewPic(e.target.value);
  };
  return (
    <div>
      <nav className="Navigation">
        <div class="navbar">
          <a href="https://bwhaircare02.github.io/MarketingPage/about.html">
            Home
          </a>
          <a href="https://bwhaircare02.github.io/MarketingPage/about.html">
            About Us
          </a>
          <a href="https://haircare-pi.now.sh/search">Search</a>
          <div class="dropdown">
            <button class="dropbtn">
              Haircare
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="https://haircare-pi.now.sh/">LogIn</a>
              <a href="https://haircare-pi.now.sh/signup">SignUp</a>
              <a herf="https://haircare.skyesajous.now.sh/dashboard">
                Write A Review
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1>Stylist Profile</h1>
      <form>
        {/* <label name='member-username'>Username</label>
          <input className='CustomerProfile'
            type='text'
            name='member-username'
            value={props.signupUsername}
            onChange={handleNewUsername}
          /> */}

        <label name="stylist-username">Stylist Name</label>
        <input
          className="CustomerProfile"
          type="text"
          name="member-username"
          value={props.stylesid}
          onChange={StylistId}
        />

        <label name="member-location">Search Stylist</label>
        <input
          className="CustomerProfile"
          type="text"
          name="member-location"
          placeholder="Search Stylist..."
          value={props.location}
          onChange={handleNewLocation}
        />
        <br></br>
        <Button type="submit">Search Stylist In Your Area</Button>
        <br></br>

        <Button
          type="button"
          onClick={() =>
            props.upDateStylist(
              props.location,
              props.email,
              props.signupUsername,
              // props.signupPassword,
              props.description,
              props.uploadpic
            )
          }
        >
          Update Profile
        </Button>
        <Link to="/search"></Link>
      </form>
      <footer>Copyright Skye Sajous 2020</footer>
    </div>
  );
}

// export default StylistForm;
const mapDispatchToProps = {
  // stylistFalse
};

export default connect(state => state, mapDispatchToProps)(StylistForm);

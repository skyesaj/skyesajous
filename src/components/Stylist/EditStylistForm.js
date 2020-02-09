import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  // putStylist,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../../actions/index";

function EditStylistForm(props) {
  const handleNewLocation = e => {
    props.updateLocation(e.target.value);
  };

  const handleNewEmail = e => {
    props.updateEmail(e.target.value);
  };

  const handleNewUsername = e => {
    props.updateSignupUser(e.target.value);
  };

  const handleNewPassword = e => {
    props.updateSignupPass(e.target.value);
  };

  console.log("this is stylist id in edit user form", props.id);

  return (
    <div>
      EditStylistForm
      <form>
        <label name="member-location">Location</label>
        <input
          type="text"
          name="member-location"
          value={props.location}
          onChange={handleNewLocation}
        />
        <label name="member-email">Email</label>
        <input
          type="text"
          name="member-email"
          value={props.email}
          onChange={handleNewEmail}
        />
        <label name="member-username">Username</label>
        <input
          type="text"
          name="member-username"
          value={props.signupUsername}
          onChange={handleNewUsername}
        />
        <label name="member-password">Password</label>
        <input
          type="password"
          name="member-password"
          value={props.signupPassword}
          onChange={handleNewPassword}
        />
        <label name="description">Description</label>
        <input
          type="text"
          name="description"
          value={props.description}
          onChange={handleNewPassword}
        />
        <Link to="/dashboard/user">
          <button
            type="button"
            onClick={
              (() =>
                // props.putStylist(
                props.location,
              props.email,
              props.signupUsername,
              props.signupPassword,
              props.description)
              // )
            }
          >
            EDIT USER!
          </button>
        </Link>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  // putStylist,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
};

export default connect(state => state, mapDispatchToProps)(EditStylistForm);

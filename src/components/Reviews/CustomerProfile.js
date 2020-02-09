import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FileInput from "../FileInput";
import styled from "styled-components";
import axios from "axios";
import axiosAuth from "../../axios/axiosAuth";
import {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
} from "../../actions";

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
class CustomerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      submitted: true
    });
  }
  deleteInfo = reviewId => {
    console.log(this.state.submitted.id);
    axiosAuth
      .delete(`/customer/${this.props.id}/reviews/${reviewId}`)
      .then(res => {
        console.log(res);
        this.props.history.push("/");
      });
  };

  componentDidMount() {
    this.fetchInfo(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchInfo(newProps.match.params.id);
    }
  }

  fetchInfo = id => {
    axios
      .put(`/customer/:customerId/reviews/:reviewId${id}`)
      .then(res => this.setState({ id: res.data }))
      .catch(err => console.log(err.response));
  };

  saveInfo = () => {
    const update = this.props.update;
    update(this.state.props.submitted);
  };
  render() {
    if (this.state.submitted) {
      return <h1>Thanks for contacting us</h1>;
    } else {
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
            <form className="form" action="send_mail" method="post">
              <h2>Profile</h2>
              <Link to="/search">
                <Button className="search-stylist">Search For Stylist</Button>
              </Link>
              <div>
                <textarea
                  type="text"
                  name="customer-description"
                  required
                ></textarea>
              </div>
              <FileInput />
              <div className="fix">
                {/* <button onClick={this.state.handleClick} type="submit"> */}
                <div className="material-icons" onClick={this.props}>
                  Save Profile
                </div>
                {/* </button> */}

                <button onClick={this.handleClick} type="submit">
                  <i class="material-icons">add</i>
                </button>
              </div>
            </form>
          </Container>
        </div>
      );
    }
  }
}
const mapDispatchToProps = {
  postCustomer,
  updateLocation,
  // updateEmail,
  updateSignupPass,
  updateSignupUser
};
const mapStateToProps = state => {
  return {
    id: state.id
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CustomerProfile);

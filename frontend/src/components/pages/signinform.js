import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";


class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="mb-24">
        <form className="mb-10" onSubmit={this.handleSubmit}>
          <div className="mb-10">
            <label className="block uppercase text-xl text-white" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="w-screen bg -transparent border-none text-white outline-none border-b-2 divide-solid text-xl pb-2 mt-3"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign In</button>{" "}
            <Link to="/signup" className="formFieldLink">
              Create an account
            </Link>
          </div>

          <div className="socialMediaButtons">
            <div className="facebookButton">
              <FacebookLoginButton onClick={() => alert("Hello")} />
            </div>

            <div className="instagramButton">
              <InstagramLoginButton onClick={() => alert("Hello")} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignInForm;
import React, { Component } from "react";
import Joi from "joi-browser";
class Login extends React.Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  schema = {
    username: Joi.string().required(),
    password: Joi.string().required(),
  };
  handelSubmit = (e) => {
    e.preventDefault();
    const errors = this.Validate();
    if (errors) return;

    console.log("submit");
  };
  Validate = () => {
    const errors = {};
    const state = { ...this.state };
    delete state.errors;
    const res = Joi.validate(state, this.schema, { abortEarly: false });
if(res === null) return null;
for(const error of res.error.details){
  errors[error.path] = error.message;
}
this.setState({errors});

  };
  handelChange = (e) => {
    //clone
    let state = { ...this.state };
    //edit
    state[e.currentTarget.name] = e.currentTarget.value;
    //set
    this.setState(state);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={this.state.username}
              onChange={this.handelChange}
              name="username"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          {this.state.errors.username && (
            <div className="alert alert-danger">
              {this.state.errors.username}
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              onChange={this.handelChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          {this.state.errors.password && (
            <div className="alert alert-danger">
              {this.state.errors.password}
            </div>
          )}
          
          
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;

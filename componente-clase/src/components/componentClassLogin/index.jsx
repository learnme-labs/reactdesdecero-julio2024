// src/components/componentClasLogin/index.js

import { Component } from "react";

class PageLogin extends Component {
  constructor(props) {
    // invicacion de contructor() de
    // clase superior (React.Component)..
    super(props);

    // definicion de variables de estado...
    this.state = {
      username: "",
      password: ""
    };
  }

  submitHandler(e) {
    e.preventDefault();

    console.log(this.state);
  }
  // usernameChangeHandler(e) {
  //   let stateObject =Object.assign({ }, this.state, { username:e.target.value });
  //   this.setState(stateObject);
  // }
  // passwordChangeHandler(e) {
  //   let { name, value } = e.target;
  //   this.setState({ [name]:value });
  // }
  inputChangeHandler(e) {
    let { name, value } = e.target;
    this.setState({ [name]:value });
  }

  render(){
    return (
      <div>
        <form onSubmit={ (e) => { this.submitHandler(e) }}>
          <span>Username:</span> 
            <input type="email" 
              name="username"
              value={ this.state.username }
              onChange={ (e) => { this.inputChangeHandler(e) } }
              required
            />
          <span>Password:</span> 
            <input type="password" 
              name="password"
              value={ this.state.password }
              onChange={ (e) => { this.inputChangeHandler(e) } }
              required
            />
          <button type="submit">Iniciar sesion</button>
        </form>
      </div>
    );
  }
}

export default PageLogin;
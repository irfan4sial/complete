import React , { Component } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { TfiLock } from "react-icons/tfi";
import GradientInput from "../components/GradientInput";
import * as firebase from 'firebase';
import firebaseApp from '../firebase/Firebase';
import isEmail from 'validator/lib/isEmail';


class Login extends Component {
  constructor(props){
    super(props);
    this.state={email: "", password:""};
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePassChange = this.handlePassChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    

  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
   handlePassChange(e) {
    this.setState({password: e.target.value});
  }
	handleSubmit(e) {
	    e.preventDefault();
	    var email = this.state.email.trim();
	    var password = this.state.password.trim();
      if(isEmail(email)){
  	    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    		  // Handle Errors here.
          
    		  var errorMessage = error.message;
    		  alert("errorMessage: "+ errorMessage)
    		});
      }else{
        alert("Email Address in not valid");
      }
  }
  handleGoogle(e) {
   
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      //var user = result.user;
      console.log('Google login success')
      window.location.replace("/dashboard");
      

    }).catch(function(error) {
      var errorMessage = error.message;
      alert("Google sign in error: "+ errorMessage);
    });
  }

render () {
  
  return (
  <div className="py-16 px-40 h-max w-screen">
    <div className="flex overflow-hidden bg-primary rounded-3xl w-full h-full max-w-[1440px] max-h-[1024px]">
      {/* left content */}
      <div className="relative w-1/2 px-20 py-40 3xl:py-52 3xl:px-28">
        <h1 className="text-4xl text-white uppercase">
          ED{" "}
          <span className="font-bold text-transparent bg-gradient-tech bg-clip-text">
            TECH
          </span>
        </h1>
        <p className="mt-6 text-lg text-nobel">
          Log in to Ed-Tech to start creating magic.
        </p>
        <form className="mt-16">
          <div className="space-y-6">
            <GradientInput
              icon={<BsEnvelope className="w-4 h-4 text-nobel" />}
              type="email"
              placeholder="Email"
              onChange={this.handleEmailChange}
              value={this.state.email}
            />
            <GradientInput
              icon={<TfiLock className="w-4 h-4 text-nobel" />}
              type="password"
              placeholder="Password"
              onChange={this.handlePassChange}
              value={this.state.password}
            />
          </div>

          <div className="flex justify-between my-12">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-4 h-4 rounded-sm"
              />
              <label htmlFor="remember" className="text-nobelblue">
                Remember me
              </label>
            </div>
            <a
              href="/forgot-password"
              className="font-semibold text-transparent cursor-pointer bg-gradient-links bg-clip-text"
            >
              Forgot password?
            </a>
          </div>
          <button className="w-full h-12 font-semibold rounded-lg bg-secondary text-nobelblue hover:bg-gradient-links" onClick={this.handleSubmit}>
            Log in
          </button>
          <div className="flex items-center my-12 space-x-4">
            <div className="flex-1 h-[1px] bg-primary-dark"></div>
            <p className="text-xs font-medium text-primary-light">
              or continue with
            </p>
            <div className="flex-1 h-[1px] bg-primary-dark"></div>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <button className="flex items-center justify-center w-full h-12 transition duration-200 rounded-lg cursor-pointer text-primary-light bg-nobel-dark hover:bg-nobel-light hover:text-nobel-dark group" onClick={this.handleGoogle}>
              <FcGoogle className="w-6 h-6 mr-3 text-white transition-all duration-75 group-hover:text-nobel-dark" />
              Google Account
            </button>
            <button className="flex items-center justify-center w-full h-12 transition duration-200 rounded-lg text-primary-light bg-nobel-dark hover:bg-nobel-light hover:text-nobel-dark group">
              <FaApple className="w-6 h-6 mr-3 text-white transition-all duration-75 group-hover:text-nobel-dark" />
              Apple Account
            </button>
          </div>
          <div className="absolute bottom-8 3xl:bottom-12 3xl:left-12">
            <p className="inline-block font-semibold text-primary-light">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-transparent cursor-pointer bg-gradient-links bg-clip-text"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
      {/* right illustration */}
      <div className="w-1/2 overflow-hidden rounded-3xl">
        <img
          src="/assets/login_illustration.png"
          alt="illustration"
          className="object-cover w-full h-auto"
        />
      </div>
    </div>
  </div>
  );
};
}
export default Login;

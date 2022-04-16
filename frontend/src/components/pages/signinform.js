import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  InstagramLoginButton
} from "react-social-login-buttons";


class SignInForm extends Component {
 
  render() {
    return (

      <><button type="button" class="btn btn-block btn-primary mb-4" data-toggle="modal" data-target="#modal-form-signup">Sign
          Up</button>
      <div class="modal fade" id="modal-form-signup" tabindex="-1" role="dialog" aria-labelledby="modal-form-signup" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-body p-0">
                      <div class="card bg-primary shadow-soft border-light p-4">
                          <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                          <div class="card-header text-center pb-0">
                              <h2 class="mb-0 h5">Create Account</h2>                               
                          </div>
                          <div class="card-body">
                              <form action="#">
               
                                  <div class="form-group">
                                      <label for="exampleInputIcon4">Your email</label>
                                      <div class="input-group mb-4">
                                          <div class="input-group-prepend">
                                              <span class="input-group-text"><span class="fas fa-envelope"></span></span>
                                          </div>
                                          <input class="form-control" id="exampleInputIcon4" placeholder="example@company.com" type="text" aria-label="email adress"></input>
                                      </div>
                                  </div>
                    
                                  <div class="form-group">
                   
                                      <div class="form-group">
                                          <label for="exampleInputPassword7">Password</label>
                                          <div class="input-group mb-4">
                                              <div class="input-group-prepend">
                                                  <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                              </div>
                                              <input class="form-control" id="exampleInputPassword7" placeholder="Password" type="password" aria-label="Password" required></input>
                                          </div>
                                      </div>
                                   
                                      <div class="form-group">
                                          <label for="exampleConfirmPassword7">Confirm Password</label>
                                          <div class="input-group">
                                              <div class="input-group-prepend">
                                                  <span class="input-group-text"><span class="fas fa-unlock-alt"></span></span>
                                              </div>
                                              <input class="form-control" id="exampleConfirmPassword7" placeholder="Confirm password" type="password" aria-label="Password" required></input>
                                          </div>
                                      </div>
                             
                                      <div class="form-check mb-4">
                                          <input class="form-check-input" type="checkbox" value="" id="defaultCheck6"></input>
                                          <label class="form-check-label" for="defaultCheck6">
                                              I agree to the <a href="#">terms and conditions</a>
                                          </label>
                                      </div>
                                  </div>
                                  <button type="submit" class="btn btn-block btn-primary">Sign in</button>
                              </form>
                              <div class="mt-3 mb-4 text-center">
                                  <span class="font-weight-normal">or</span>
                              </div>
                              <div class="btn-wrapper my-4 text-center">
                                  <button class="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                                      <span aria-hidden="true" class="fab fa-facebook-f"></span>
                                  </button>
                                  <button class="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                                      <span aria-hidden="true" class="fab fa-twitter"></span>
                                  </button>
                                  <button class="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button">
                                      <span aria-hidden="true" class="fab fa-github"></span>
                                  </button>
                              </div>
                              <div class="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                  <span class="font-weight-normal">
                                      Already have an account?
                                      <a href="#" class="font-weight-bold">Login here</a>
                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
</>
    );
  }
}

export default SignInForm;
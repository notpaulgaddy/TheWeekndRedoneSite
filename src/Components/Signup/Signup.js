import React from "react";
import "./Signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import background from "./weeknd.jpeg";
class Signup extends React.Component{
    render(){
        return(
            <div class="bob">
            {/* <div id="preloader">
        <div class="loader3">
            <span></span>
            <span></span>
        </div>
    </div> */}

    <div class="signup-wrapper">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="signup-box">
                        <div class="text-center">
                            <h3 style={{color:"white"}}>Signup</h3>
                        </div>
                        <div class="custom-info">
                            <input class="input-info" id="email" type="text" placeholder="Email"/>
                            <input class="input-info" id="password" type="password" style={{color:"white"}} placeholder="Password"/>
                            <button type="submit" id="Signup" class="submit-btn">Signup</button>
                            <a class="already-btn" href="/Login" >Already have an account? Login</a>
                            <span style={{color:"white"}}>By continuing, you agree to accept our<br/> Privacy Policy & Terms of Service.</span>
                            <a class="forget-pass" href="/Reset">Forgot password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

        )
    }
}
export default Signup;
import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
class Login extends React.Component{
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
                            <h3 style={{color:"white"}}>Login</h3>
                        </div>
                        <div class="custom-info">
                            <input class="input-info" id="email" type="text" placeholder="Email"/>
                            <input class="input-info" id="password" type="password" style={{color:"white"}} placeholder="Password"/>
                            <button type="submit" id="Signup" class="submit-btn">Login</button>
                            <a class="already-btn" href="/Signup" >Don't have an account? Signup</a>
                            <span style={{color:"white"}}>By continuing, you agree to accept our<br/> Privacy Policy & Terms of Service.</span>
                            <a class="forget-pass" href="reset.html">Forgot password?</a>
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
export default Login;
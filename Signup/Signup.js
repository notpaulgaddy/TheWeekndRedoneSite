// import { useState } from "react";
// import "./Signup.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {firestore,auth} from "../Firebase/firebaseKey";
// import {db} from "../Firebase/firebaseKey";
// import {collection,getDocs} from "firebase/firestore";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// function Signup(){
//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [user, setUser] = useState({});

//     onAuthStateChanged(auth, (currentUser) => {
//         setUser(currentUser);
//     });

//     const register = async () => {
//         try {
//         const user = await createUserWithEmailAndPassword(
//             auth,
//             registerEmail,
//             registerPassword
//         );
//         console.log(user);
//         } catch (error) {
//         console.log(error.message);
//         }
//     };
//         return(
//             <div className="bob">
//             {/* <div id="preloader">
//         <div className="loader3">
//             <span></span>
//             <span></span>
//         </div>
//     </div> */}

//     <div className="signup-wrapper">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="signup-box">
//                         <div className="text-center">
//                             <h3 style={{color:"white"}}>Signup</h3>
//                         </div>
//                         <div className="custom-info">
//                             <input className="input-info" id="email" type="text" placeholder="Email"/>
//                             <input className="input-info" id="password" type="password" style={{color:"white"}} placeholder="Password"/>
//                             <button type="submit" id="Signup" className="submit-btn" onClick={register}>Signup</button>
//                             <a className="already-btn" href="/Login" >Already have an account? Login</a>
//                             <span style={{color:"white"}}>By continuing, you agree to accept our<br/> Privacy Policy & Terms of Service.</span>
//                             <a className="forget-pass" href="/Reset">Forgot password?</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>

//         )
// };
// export default Signup;

import React, { useRef} from "react"
import {signup} from "../Firebase/firebaseKey.js"

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    async function handleSignup(){
        await signup(emailRef.current.value,passwordRef.current.value)
    }
  return(
    <div>
        <input ref={emailRef} placeholder="Email"/>
        <input ref={passwordRef} type="password" placeholder="Password"/>
        <button onClick={handleSignup}>Signup</button>
    </div>
    
  )
}
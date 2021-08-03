import React from 'react'
import '../logindetails/signup.css'
import {Link} from 'react-router-dom'
const Forgetpwd=()=>{
    return(
        <React.Fragment>
             <div className="splash-container">
                <div className="card">
                    <div className="card-header text-center"><img className="logo-img" src="../assets/images/logo.png" alt="logo"/><span className="splash-description">Please enter your user information.</span></div>
                    <div className="card-body">
                        <form>
                            <p>Don't worry, we'll send you an email to reset your password.</p>
                            <div className="form-group">
                                <input className="form-control form-control-lg" type="email" name="email" required="" placeholder="Your Email" autoComplete="off"/>
                            </div>
                            <div className="form-group pt-1"><a className="btn btn-block btn-primary btn-xl" href="../index.html">Reset Password</a></div>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
                    </div>
                </div>
            </div>
   

  
        </React.Fragment>
    )
}

export default Forgetpwd ;
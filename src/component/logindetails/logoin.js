import React from 'react'
import '../logindetails/signup.css'
import {Link} from 'react-router-dom'
const Login =()=>{
    return(
        <React.Fragment>
            <div className="splash-container">
                <div className="card ">
                    <div className="card-header text-center"><a href="../index.html"><img className="logo-img" src="../assets/images/logo.png" alt="logo"/></a><span className="splash-description">Please enter your user information.</span></div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <input className="form-control form-control-lg" id="username" type="text" placeholder="Username" autocomplete="off"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control form-control-lg" id="password" type="password" placeholder="Password"/>
                            </div>
                            {/* <div className="form-group">
                                <label className="custom-control custom-checkbox">
                                    <input className="custom-control-input" type="checkbox"/><span className="custom-control-label"/> Remember Me </span>
                                </label>
                            </div> */}
                            <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                        </form>
                    </div>
                    <div className="card-footer bg-white p-0  ">
                        <div className="card-footer-item card-footer-item-bordered">
                            <Link to="/signup" className="footer-link">Create An Account</Link></div>
                        <div className="card-footer-item card-footer-item-bordered">
                            <Link to="/forgetpwd" className="footer-link">Forgot Password</Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login ;
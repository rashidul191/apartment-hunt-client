import React from 'react';
import Navbar from '../Sharing/Navbar/Navbar';
import './Login.css';

const Login = () => {
    return (
        <section>
            <div className="login-body">
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="login-form">
                    <div className="login-form-body">
                        <form  action=" ">
                            <h3>Login</h3><br/>
                            <input type="text" className="form-control" placeholder="Username or Email" required /><br/>
                            <input type="password" className="form-control" name="" id="" placeholder="Password" required /><br/>
                            <div>
                                <div class="row">
                                    <div class="col">
                                    <h6> <input type="checkbox" name="" id="" /> <span> Remember Me </span> </h6>
                                    </div>
                                   <div class="col">
                                       
                                    </div> 
                                    <div class="col">
                                        <h6><u className="underline-text"> Forgot Password </u></h6>
                                    </div>
                                </div>
                            </div>
                            <button className="mt-4 login-btn-main" type="submit">Login</button><br/><br/>
                            <h6 className="text-center">Don't have an account? <u className="underline-text">Create an account</u></h6>
                        </form>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default Login;
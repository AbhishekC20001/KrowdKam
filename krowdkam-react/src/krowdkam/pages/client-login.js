import React from "react";
import Navbar from "../components/Navbar";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import "../styles/navbar.css";


const ClientLogin = ()=>{

    return (
        <>
        <div className="background-login-div">
            <span class="intro">
                Krowd-Kam.
            </span>
            <span class="detail">
                We at Krowd-Kam have an aim of reducing the unecessary stress in people's life cause by waiting in lines and crowds.
            </span>
            <Router>
                <Switch>
                    <Route path="/client/login">
                        <span class="cont" >
                            <div id="cont-header">
                            LOGIN!
                            </div>
                            <div class="inp-grp-ysb" id="name">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Name</label>
                            </div>
                            
                            <div class="inp-grp-ysb">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Mobile Number</label>
                            </div>
                            <div class="inp-grp-ysb">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Company Email</label>
                            </div>
                            <div class="inp-grp-ysb">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Company Name</label>
                            </div>
                            <Link to="/client/signup"><button type="button" class="btn btn-success btn-register ">Success</button></Link>
                        </span>
                    </Route>
                    <Route exact path="/client/signup">
                        <span class="cont" >
                            <div id="cont-header">
                            REGISTER!
                            </div>
                            <div class="inp-grp-ysb" id="name">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Name</label>
                            </div>
                            
                            <div class="inp-grp-ysb">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Mobile Number</label>
                            </div>
                            <div class="inp-grp-ysb">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Company Email</label>
                            </div>
                            <div class="inp-grp-ysb">
                                <input type="text" required/>
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Company Name</label>
                            </div>
                            <button type="button" class="btn btn-success btn-register ">Success</button>
                        </span>
                    </Route>
                </Switch>
            </Router>
        </div>
        </>
    );
}

export default ClientLogin;
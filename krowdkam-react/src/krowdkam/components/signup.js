import axios from "axios";
import React , {useEffect, useState}from "react";
import { Route, Switch, Link, BrowserRouter as Router, useHistory } from "react-router-dom";
import "../styles/navbar.css";

const Signup = ({type}) =>{
    let histroy = useHistory();
    const [userRegister,setUserRegister] = useState({
        username:"",
        password:"",
        password2:"",
        email:"",
        age:null,
        mobile:"",
        gender:"",
        country_code:""
    })

    const changeHandler = (e) =>{
        console.log("Change is: ",e.target.name,e.target.value);
        // const state = userRegister;
        // state[e.target.name] = e.target.value;
        setUserRegister(inputs => ({...inputs, [e.target.name]: e.target.value}));
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log("User states are: ",userRegister);
        const body = userRegister;
        body["age"] = Number(userRegister["age"]);
        console.log("Body is: ",body);
        axios.post('/register/',body)
        .then(res=>{
            console.log("Response is: ",res);
            if(res.data.username){
                localStorage.setItem('krowdkam',JSON.stringify(res.data));
                window.location.href="http://localhost:3000/user-login/login";
            }

        }).catch(e=>{
            console.log("Error is: ",e)
        })
    }

    useEffect(()=>{
        // if(JSON.parse(localStorage.getItem('krowdkam')))
        //     window.location.href="http://localhost:3000/user";

    },[])

    return (
        <span class="cont" >
            <div id="cont-header">
            {type} REGISTER!
            </div>
            <form onSubmit={submitHandler}>
                <div class="inp-grp-ysb" id="name">
                    <input type="text" onChange={changeHandler} name="username" value = {userRegister.username} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Username</label>
                </div>
                
                <div class="inp-grp-ysb">
                    <input type="password" onChange={changeHandler}  name="password" value = {userRegister.password} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Password</label>
                </div>
                <div class="inp-grp-ysb">
                    <input type="password" onChange={changeHandler}  name="password2" value={userRegister.password2} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Password2</label>
                </div>
                <div class="inp-grp-ysb">
                    <input type="email" onChange={changeHandler}  name="email" value={userRegister.email} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>email</label>
                </div>
                <div class="inp-grp-ysb">
                    <input type="text" onChange={changeHandler}  name="mobile" value={userRegister.mobile} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>mobile</label>
                </div>
                <div class="inp-grp-ysb">
                    <input type="number" onChange={changeHandler}  name = "age" value={userRegister.age} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>age</label>
                </div>
                <div class="inp-grp-ysb">
                    <input type="text" onChange={changeHandler}  name = "gender" value={userRegister.gender} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>gender</label>
                </div>
                <div class="inp-grp-ysb">
                    <input type="text" onChange={changeHandler} name = "country_code" value={userRegister.country_code} required/>
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>country_code</label>
                </div>
                {/* <div class="inp-grp-ysb">
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
                </div> */}
                <button class="btn btn-success btn-register " >Submit</button>
                {/* <Link to="/client/signup"><button type="button" class="btn btn-success btn-register ">Login</button></Link> */}
            </form>
        </span>
    )

}   

export default Signup;
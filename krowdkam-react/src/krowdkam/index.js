import React ,{useEffect,useState} from "react";
import axios from "axios";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ClientLogin from "./pages/client-login";
import Navbar from "./components/Navbar";
import UserHome from "./pages/user-home";




const Krowdkam = ()=>{

    // const [locations, setLocations] = useState([]);

    // useEffect(()=>{

    //     axios.get('/guser/api/location_carousel')
    //     .then(res=>{
    //         console.log("Locations: ",res);
    //         setLocations(res.data);
    //     })


    // },[]);

    return (
        <>
        <Router>
            <Switch>
                <Route path="/client/">
                    <Navbar type={"client"}/>
                    <ClientLogin/>
                </Route>
                    <Route exact path="/user-login">
                    user-login
                </Route>
                <Route exact path="/user">
                    <Navbar type={"user"}/>
                    <UserHome/>
                </Route>
            </Switch>
        </Router>
        </>
    );
}

export default Krowdkam;
import React ,{useEffect,useState} from "react";
import axios from "axios";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import UserLogin from "./pages/user-login";
import ClientLogin from "./pages/client-login";
import Navbar from "./components/Navbar";
import UserHome from "./pages/user-home";
import UserLocation from "./pages/user-location";




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
                <Route path="/user-login/">
                    <Navbar type={"user"}/>
                    <UserLogin/>
                </Route>
                <Route  path="/client-login/">
                    <Navbar type={"client"}/>
                    <ClientLogin/>
                </Route>
                <Route exact path="/client/">
                    <Navbar type={"client"}/>
                    {/* <ClientHome/> */}
                </Route>
                <Route exact path="/user">
                    <Navbar type={"user"}/>
                    <UserHome/>
                </Route>
                <Route exact path="/user/:id">
                    <Navbar type={"user"}/>
                    <UserLocation/>
                </Route>
            </Switch>
        </Router>
        </>
    );
}

export default Krowdkam;
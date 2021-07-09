import React from "react";
import Imagica from "../images/imagica.jpg";
import Bhushan from "../images/Bhushan.jpg";
import "../styles/userhome.css";
import LocationDetail from "../components/location-card";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const UserHome = () =>{

    var settingsSlider = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return (
        <>
        <span id="cont">
            {/* <div class="row"> */}
                <Slider {...settingsSlider}>

                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                    <LocationDetail image={Imagica}/>
                </Slider>
            {/* </div> */}
            <div class="row">
                <LocationDetail image={Imagica}/>
            </div>
            <div class="row">
                <LocationDetail image={Imagica}/>
                <LocationDetail image={Imagica}/>
            </div>
        </span>
        </>
    );
}

export default UserHome; 
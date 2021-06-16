 import React from 'react';
 import VenusOV from "../Components/VenusOV";
 import Footer from "../Components/Footer";
 import AboutVens from '../Components/AboutVens';
 import Carousel from "../Components/CarouselVens";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import VensStruc from '../Components/VensStruc';
 import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
 
 function Venus() {
     return (
         <div>
             <VenusOV/>
             <AboutVens/>
             <Carousel/>
             <VensStruc/>
              <Footer/>
           <ScrollUpButton
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
        style={{
          color: "white",
          backgroundColor: "#ECDBC9",
          borderRadius: "10px",
          width: "42px",
          height: "45px",
          bottom: 60,
        }}
      />
         </div>
     )
 }
 
 export default Venus
 
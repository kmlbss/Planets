import React from 'react' ;
import Footer from "../Components/Footer";
import NeptuneOV from "../Components/NeptuneOV";
import NeptuneStruc from '../Components/NeptuneStruc';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutNept from '../Components/AboutNept';
import Carousel from "../Components/CarouselNept"
 import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
function Neptune() {
    return (
        <div>
            <NeptuneOV/>
            <AboutNept/>
            <Carousel/>
            <NeptuneStruc/>
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

export default Neptune

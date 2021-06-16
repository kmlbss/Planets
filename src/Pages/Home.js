import React, { useState, useEffect } from "react";
import HomeHeader from "../Components/HomeHeader";
import Universe from "../Components/Universe";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import {Link} from "react-scroll";
import AOS from "aos";
import Footer from "../Components/Footer";
import LiveAstronauts  from "../Components/LiveAstronauts"; 
import TheSun from "../Components/TheSun";
import MilkyWay from "../Components/MilkyWay";
function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 300,
    });
  }, []);
  const [astronaut, setAstronaut] = useState([]);
  const images=[{ name:"Oleg Novitskiy",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mark_Vande_Hei%2C_official_portrait.jpg/330px-Mark_Vande_Hei%2C_official_portrait.jpg"}
  ,{name:"Mark Vande Hei",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Oleg_Novitskiy_2016.jpg/330px-Oleg_Novitskiy_2016.jpg"}
  ,{name:"Pyotr Dubrov",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Expedition_64_Crew_Qualification_Exams_%28NHQ202009220003%29.jpg/1024px-Expedition_64_Crew_Qualification_Exams_%28NHQ202009220003%29.jpg"}
  ,{name:"Thomas Pesquet",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Thomas_Pesquet%2C_official_portrait_in_EMU_%282020%29.jpg/330px-Thomas_Pesquet%2C_official_portrait_in_EMU_%282020%29.jpg"}
  ,{name:"Megan McArthur",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Meganmcarthurv2.jpg/330px-Meganmcarthurv2.jpg"}
  ,{name:"Shane Kimbrough",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Shanekimbroughv2.jpg/330px-Shanekimbroughv2.jpg"}
  ,{name:"Akihiko Hoshide",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Akihiko_Hoshide_2012.jpg/330px-Akihiko_Hoshide_2012.jpg"}]
 
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let final = await fetch(`http://api.open-notify.org/astros.json?`).then(
      (a) => a.json()
    );
    setAstronaut(final.people);
  }  
  return (
    <div > 
      <HomeHeader />
      <Universe />
      <div id="over-cosmos">
      <div className="astronauts" data-aos="fade-up" >
        
        <div className="container">
          <div className="section-heading">
            <h2> Hazırda Kosmosda olan Astronavtlar </h2>
          </div>  
          <div className="astronaut" data-aos="fade-up" >
          {astronaut &&
          astronaut.map((a) => {   
            return <LiveAstronauts key={a.name} name={a.name} images={images} craft={a.craft}/>;
          })}
          </div>
        </div>
        </div>
      </div>
      <TheSun/>
      <MilkyWay/>
      <Footer />
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
  );
}

export default Home;

import "./App.css"; 
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Earth from "./Pages/Earth";
import Jupiter from "./Pages/Jupiter";
import Mars from "./Pages/Mars";
import Mercury from "./Pages/Mercury";
import Neptune from "./Pages/Neptune";
import Saturn from "./Pages/Saturn";
import Uranus from "./Pages/Uranus";
import Venus from "./Pages/Venus";
function App() {
  
  return (
    <Router>
      <div className="App"> 
           <NavBar />
        <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route path="/earth">  <Earth  /></Route>
          <Route path="/jupiter">  <Jupiter/></Route>
          <Route path="/mars">  <Mars /></Route>
          <Route path="/mercury">  <Mercury  /></Route>
          <Route path="/neptune">  <Neptune/></Route>
          <Route path="/saturn">  <Saturn/></Route>
          <Route path="/uranus">  <Uranus/></Route>
          <Route path="/venus">  <Venus/></Route> 
        </Switch>  
       
      </div>
    </Router>
  );
}
export default App;

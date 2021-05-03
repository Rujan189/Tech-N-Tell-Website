import { React } from "react"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; 
import { Route, Switch } from "react-router-dom";
import About from "./MyComponents/About";
// import Contact from "./MyComponents/Customise"; 
import Menu from "./MyComponents/Menu"; 
import Home from "./MyComponents/Home";
import Error from "./MyComponents/Error"; 
import Service from "./MyComponents/Service"; 
import Footer from "./MyComponents/Footer"; 
import Customise from "./MyComponents/Customise";


const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/customise" component={Customise} />
        <Route exact path="/about" component={About} /> 
        <Route exact path="/service" component={Service} /> 
        <Route component={Error} />
      </Switch>
      <Footer/>

      {/* <About/>
    <Contact/>
    <Menu/> */}
    </>
  )
};

export default App;

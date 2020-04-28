import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
 import Home from "./component/Home"; 
// import SIgnup from "./component/Signup";
import Navbar from "./component/Navbar";

import Chart from "./component/Chart";


const AppNav = ()=>{
  return(
    <Switch>
      <Route exact path="/"  ><Home/></Route>
      <Route path="/chart" ><Chart  /></Route>
      
    </Switch>  
  )
}


const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <AppNav />
    </BrowserRouter>
  );
};

export default App;
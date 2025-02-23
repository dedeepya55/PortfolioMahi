import React from 'react';
import App from './components/MahiPotfolio/mainMahi';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import App from "./App";
function Home() {
    return (
      <>
      
  <BrowserRouter>
    <App />
  </BrowserRouter>
   
      </>
    )
}

export default Home;



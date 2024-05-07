


// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import './index.css'
import ReactGA from "react-ga4";
import Assembly from './Assembly';
//import Districts from './Districts'
import Districts2 from './Districts2'
import { useEffect } from 'react';

import {  HashRouter, Routes, Route } from "react-router-dom";
import Eci from './Eci'
import CitizenComplaints from './CitizenComplaints'
const TRACKING_ID = "G-KY78WYWLQJ";
ReactGA.initialize(TRACKING_ID);

const App = () =>{

  useEffect(() => {
    console.log(window.location)
    ReactGA.send({ hitType: "pageview", page: window.location.href  });

  }, [window.location.href]);

return <HashRouter>
      <Routes>

      <Route path="/" element={<Assembly />} />        
      <Route path="/eci" element={<Eci />} />
      <Route path="/citizen-complaints" element={<CitizenComplaints />} />
      <Route path="/districts" element={<Districts2 />} />
      </Routes>
    </HashRouter>

}

export default App

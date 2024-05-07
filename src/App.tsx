


// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 
import './index.css'

import Assembly from './Assembly';
//import Districts from './Districts'
import Districts2 from './Districts2'
import {  HashRouter, Routes, Route } from "react-router-dom";
import Eci from './Eci'
import CitizenComplaints from './CitizenComplaints'

const App = () =>{

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


import './index.css'

// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 

import Assembly from './Assembly';
import Districts from './Districts'
import {  HashRouter, Routes, Route } from "react-router-dom";
import Eci from './Eci'
import Home from './Districts';

const App = () =>{

return <HashRouter>
      <Routes>
        

          <Route path="/districts" element={<Districts />} />
          

          <Route path="/" element={<Assembly />} />
          <Route path="/eci" element={<Eci />} />
        
      </Routes>
    </HashRouter>

}

export default App

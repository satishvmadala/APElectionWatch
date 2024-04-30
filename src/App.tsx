
import './index.css'

// import PickDataMenu from './components/PickDataMenu';
import 'bootswatch/dist/lux/bootstrap.min.css'; 

import Assembly from './Assembly';
import Home from './Home'
import {  HashRouter, Routes, Route } from "react-router-dom";
import Eci from './Eci'

const App = () =>{

return <HashRouter>
      <Routes>
        

          <Route path="/districts" element={<Home />} />
          

          <Route path="/" element={<Assembly />} />
          <Route path="/eci" element={<Eci />} />
        
      </Routes>
    </HashRouter>

}

export default App

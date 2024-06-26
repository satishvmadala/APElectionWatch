import { useState } from 'react';


import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AndhraData from './components/datasets/Final_Andhra_Constituencies_2024.json';

import APDistrictsData from './components/datasets/AP_Districts_Final.json';

import { FaSearch } from "react-icons/fa";


export function DistrictFilter({mapClick}) {
  //const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
  const [showFilterData, setShowFilterData] = useState(false)

  const selectDristrict = (item)=>{

    setSearch(item.district_name)
    setShowFilterData(false)
    mapClick(item.district_id, item.district_name);
  }
  

  return (
    <>
        <Form>
          <InputGroup className='my-3'>
          <InputGroup.Text className="search-icon" id="basic-addon1"> <FaSearch /> </InputGroup.Text>
            <Form.Control
              value={search}
              onChange={(e) => {setSearch(e.target.value); setShowFilterData(true)}}
              placeholder='Search Districts'
            />
          </InputGroup>
        </Form>
        {search && showFilterData && (
          <ul className="list-group position-absolute">
          {APDistrictsData
            .filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.district_name.toLowerCase().includes(search.toLowerCase());
            })
            .slice(0,5)
            .map((item, index) => (
              <li className="list-group-item" key={index} onClick={ ()=>{ selectDristrict(item) }}>
                {item.district_name} District
              </li>
            ))
            
            }
        
      </ul>
          
        )}
      
    </>
  );
}

function App({mapClick}) {
  //const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
  const [showFilterData, setShowFilterData] = useState(false)

  const selectDristrict = (item)=>{

    setSearch(item.ac_name)
    setShowFilterData(false)
    mapClick(item.constituency_id, item.district_id, item.district_name);
  }
  

  return (
    <>
        <Form>
          <InputGroup className='my-3'>
          <InputGroup.Text className="search-icon" id="basic-addon1"> <FaSearch /> </InputGroup.Text>
            <Form.Control
              value={search}
              onChange={(e) => {setSearch(e.target.value); setShowFilterData(true)}}
              placeholder='Search Constituency'
            />
          </InputGroup>
        </Form>
        {search && showFilterData && (
          <ul className="list-group position-absolute">
          {AndhraData
            .filter((item) => {
              return search.toLowerCase() === ''
                ? item
                : item.ac_name.toLowerCase().includes(search.toLowerCase());
            })
            .slice(0,5)
            .map((item, index) => (
              <li className="list-group-item" key={index} onClick={ ()=>{ selectDristrict(item) }}>
                {item.ac_name} - {item.district_name} District
              </li>
            ))
            
            }
        
      </ul>
          
        )}
      
    </>
  );
}

export default App;

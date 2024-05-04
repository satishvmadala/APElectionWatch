import { useState } from 'react';
import Table from 'react-bootstrap/Table';
//import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { data } from './data.js';
import { FaSearch } from "react-icons/fa";

function App() {
  //const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');

  return (
    <div>
      <div>
        {/*<h1 className='text-center mt-4'>CONSTITUENCY</h1>*/}
        <Form>
          <InputGroup className='my-3'>
          <InputGroup.Text className="search-icon" id="basic-addon1"> <FaSearch /> </InputGroup.Text>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
          </InputGroup>
        </Form>
        {search && (
          <div className="table-responsive-sm">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Constituency Name</th>
                <th>Officer Name</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>District</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ''
                    ? item
                    : item.ac_name.toLowerCase().includes(search) || item.district_id.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.ac_name}</td>
                    <td>{item.ero_name}</td>
                    <td>{item.mobile_no}</td>
                    <td>{item.E_mail}</td>
                    <td>{item.district_id}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

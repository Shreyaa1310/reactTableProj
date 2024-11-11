import React , {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  // State to manage form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // State to manage table data
  const [tableData, setTableData] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new entry to the tableData state
    setTableData([...tableData, { firstName, lastName, contactNumber }]);

    // Clear form fields after submission
    setFirstName("");
    setLastName("");
    setContactNumber("");
  };

  return (
  

    <div>
      {/* Form */}
      <div className="form container">
      <Form className="w-50" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Update firstName state
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} // Update lastName state
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)} // Update contactNumber state
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      </div>

      {/* Table */}
      <div className="form container">
     <Table striped bordered hover >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </div>
 
    </div>
  );
}

export default App;

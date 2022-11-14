import React, { useEffect, useState } from 'react'
import { Table, Button } from "react-bootstrap";
import { membershipDataService } from '../Services/CrudFirestore';
import './Style.css';

function Memberships() {
  const [memberships, setMemberships] = useState([]);

  useEffect(() => {
    getMemberships();
  }, []);

  const getMemberships= async () => {
    const data = await membershipDataService.getAllMemberships();
    console.log(data.docs);
    setMemberships(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <h1>Memberships</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>KSIJ</th>
            <th>Visibility</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {memberships.map((doc) => {
            return (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.position}</td>
                <td>{JSON.stringify(doc.isKSIJ)}</td>
                <td>{JSON.stringify(doc.isVisible)}</td>
                <td>{doc.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Memberships

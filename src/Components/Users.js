import React, { useEffect, useState } from 'react'
import { Table, Button } from "react-bootstrap";
import userDataService from '../Services/CrudFirestore'
import './Style.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers= async () => {
    const data = await userDataService.getAllUsers();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <h1>Users List</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Username</th>
            <th>User email</th>
            <th>User Contact</th>
            <th>Year of Birth</th>
            <th>KSIJ</th>
            <th>Business Category</th>
            <th>Mebership Type</th>
            <th>Mebership ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map((doc) => {
            return (
              <tr key={doc.id}>
                <td>{doc.name}</td>
                <td>{doc.emailID}</td>
                <td>{doc.phoneNumber}</td>
                <td>{doc.yearOfBirth}</td>
                <td>{JSON.stringify(doc.isKSIJ)}</td>
                <td>{doc.businessCategory}</td>
                <td>{doc.membershipType}</td>
                <td>{doc.membershipID}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Users

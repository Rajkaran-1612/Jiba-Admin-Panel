import React, { useEffect, useState } from 'react'
import { Table, Button } from "react-bootstrap";
import { transactionDataService } from '../Services/CrudFirestore';
import './Style.css';


function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions= async () => {
    const data = await transactionDataService.getAllTransactions();
    console.log(data.docs);
    setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <div>
      <h1>Transactions Page</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>User ID</th>
            <th>Token</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((doc) => {
            return (
              <tr key={doc.id}>
                <td>{doc.id}</td>
                <td>{doc.userID}</td>
                <td>{doc.token}</td>
                <td>{doc.type}</td>
                <td>{doc.amount}</td>
                <td>{doc.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Transactions

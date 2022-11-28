import React, { useEffect, useState } from 'react'
import { transactionDataService } from '../Services/CrudFirestore';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from './SideBar';
import './Transactions.scss';
import Navbar from './Navbar';


function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const columns = [
    { field: 'id', headerName: 'Transaction ID', width: 150 },
    { field: 'userID', headerName: 'User ID', width: 200 },
    { field: 'token', headerName: 'Token', width: 130 },
    {
      field: 'type',
      headerName: 'Type',
      width: 90,
    },
    {
      field: 'currency',
      headerName: 'Currency',
      width: 90,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 90,
    },
  ];


  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions= async () => {
    const data = await transactionDataService.getAllTransactions();
    console.log(data.docs);
    setTransactions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const rowData = transactions?.map(transaction => {
    return {
      id: transaction?.id,
      userID: transaction?.userID,
      token: transaction?.token,
      type: transaction?.type,
      currency: transaction?.currency,
      amount: transaction?.amount
    };
  })

  return (
    <div className='list'>
    <SideBar />
    <div className='container'>
    <Navbar />
    <div className='listContainer'>
      <div className='listTitle'>Transactions List</div>
      <div style={{ height: 450, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        checkboxSelection
      />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Transactions

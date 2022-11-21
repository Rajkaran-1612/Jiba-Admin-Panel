import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import userDataService from '../Services/CrudFirestore'
import './Users.scss'
import SideBar from './SideBar';

function Users() {
  const [users, setUsers] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
    { field: 'emailID', headerName: 'email ID', width: 130 },
    {
      field: 'yob',
      headerName: 'Year of Birth',
      width: 100,
    },
    {
      field: 'membershipType',
      headerName: 'Membership Type',
      width: 150,
    },
    {
      field: 'membershipId',
      headerName: 'Membership ID',
      width: 170,
    },
    {
      field: 'isKSIJ',
      headerName: 'isKSIJ',
      width: 90,
    }
  ];

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers= async () => {
    const data = await userDataService.getAllUsers();
    console.log(data.docs);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const rowData = users?.map(user => {
    return {
      id: user?.id,
      name: user?.name,
      phoneNumber: user?.phoneNumber,
      emailID: user?.emailID,
      yob: user?.yearOfBirth,
      membershipType: user?.membershipType,
      membershipId: user?.membershipID,
      isKSIJ: user?.isKSIJ
    };
  })

  return (
    <div className='list'>
    <SideBar />
    <div className='listContainer'>
      <div className='listTitle'>Users List</div>
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </div>
    </div>
  )
}

export default Users

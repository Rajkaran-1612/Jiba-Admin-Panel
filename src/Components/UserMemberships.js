import React, { useEffect, useState } from 'react'
import { userMembershipDataService } from '../Services/CrudFirestore';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from './SideBar';
import './UserMemberships.scss';

function UserMemberships() {
  const [userMemberships, setUserMemberships] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 160 },
    { field: 'membershipDataID', headerName: 'Membership Data ID', width: 200 },
    { field: 'transactionID', headerName: 'Transaction ID', width: 120 },
    { field: 'userID', headerName: 'User ID', width: 200 },
    { field: 'membershipPrice', headerName: 'Price', width: 90 },
    {
      field: 'membershipType',
      headerName: 'Membership Type',
      width: 130,
    },
    {
        field: 'token', 
        headerName: 'Token', 
        width: 150
    },
  ];


  useEffect(() => {
    getUserMemberships();
  }, []);

  const getUserMemberships= async () => {
    const data = await userMembershipDataService.getAllUserMemberships();
    console.log(data.docs);
    setUserMemberships(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const rowData = userMemberships?.map(userMembership => {
    return {
      id: userMembership?.id,
      membershipDataID: userMembership?.membershipDataID,
      transactionID: userMembership?.transactionID,
      userID: userMembership?.userID,
      membershipPrice: userMembership?.membershipPrice,
      membershipType: userMembership?.membershipType,
      token: userMembership?.token
    };
  })

  return (
    <div className='list'>
    <SideBar />
    <div className='listContainer'>
      <div className='listTitle'>User Memberships List</div>
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

export default UserMemberships
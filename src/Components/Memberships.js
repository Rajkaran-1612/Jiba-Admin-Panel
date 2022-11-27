import React, { useEffect, useState } from 'react'
import { membershipDataService } from '../Services/CrudFirestore';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from './SideBar';
import './Memberships.scss';

function Memberships() {
  const [memberships, setMemberships] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'position', headerName: 'Position', width: 130 },
    {
      field: 'isKSIJ',
      headerName: 'KSIJ',
      width: 90,
    },
    {
      field: 'isVisible',
      headerName: 'Visibility',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 90,
    },
  ];

  useEffect(() => {
    getMemberships();
  }, []);

  const getMemberships= async () => {
    const data = await membershipDataService.getAllMemberships();
    console.log(data.docs);
    setMemberships(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const rowData = memberships?.map(membership => {
    return {
      id: membership?.id,
      name: membership?.name,
      position: membership?.position,
      isKSIJ: membership?.isKSIJ,
      isVisible: membership?.isVisible,
      price: membership?.price
    };
  })

  return (
    <div className='list'>
    <SideBar />
    <div className='listContainer'>
      <div className='listTitle'>Memberships List</div>
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

export default Memberships

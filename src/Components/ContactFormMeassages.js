import React, { useEffect, useState } from 'react'
import { contactFormMessageDataService } from '../Services/CrudFirestore';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from './SideBar';
import './ContactFormMessages.scss';

function ContactFormMeassages() {
    const [formDetails, setFormDetails] = useState([]);

    const columns = [
      { field: 'id', headerName: 'ID', width: 150 },
      { field: 'email', headerName: 'Email', width: 150 },
      { field: 'name', headerName: 'Name', width: 170 },
      {
        field: 'message',
        headerName: 'Message',
        width: 580,
      },
    ];
  
  
    useEffect(() => {
      getFormDetails();
    }, []);
  
    const getFormDetails= async () => {
      const data = await contactFormMessageDataService.getAllContactFormMessages();
      console.log(data.docs);
      setFormDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    const rowData = formDetails?.map(formDetail => {
      return {
        id: formDetail?.id,
        email: formDetail?.email,
        name: formDetail?.name,
        message: formDetail?.message
      };
    })

  return (
    <div className='list'>
    <SideBar />
    <div className='listContainer'>
      <div className='listTitle'>Contact Form Data List</div>
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

export default ContactFormMeassages
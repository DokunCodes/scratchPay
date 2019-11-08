import React, { Component } from 'react'
import Navbar from '../../components/layouts/Navbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import MaterialTable from 'material-table';

/**
 * User list component 
 * Uses Material-UI && MaterialTable 
 * {@link https://material-table.com/}
 * {@link https://material-ui.com/}
 * 
 */
export class Users extends Component {

    constructor(props){
        super(props);
        this.state ={
            columns: [
                { title: 'Id', field: 'id', editable: 'onAdd' },
                { title: 'Email', field: 'email' },
                { title: 'First Name', field: 'firstName' },
                { title: 'Lastname', field: 'lastname' },
                { title: 'Role', field: 'role', lookup: { 'admin': 'Admin', 'doctor': 'Doctor', 'accountant':'Accountant' } },
                { title: 'Status', field: 'status', lookup: { 'active': 'Active', 'inactive': 'Inactive' } }
              ],
              data: [
                { id: '1', email: 'seyi@spay.com', firstName: 'Seyi', lastname: 'Adedokun', role:'admin',status: 'active' },
                {
                  id: '2',
                  email: 'ruby@spay.com',
                  firstName: 'Ruby',
                  lastname: 'Tran',
                  role: 'doctor',
                  status: 'active'
                },
              ]
        }
    }

    render() {
        return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Navbar />
                <MaterialTable
      title="All Users"
      columns={this.state.columns}
      data={this.state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
           
              this.setState(prevState => {
                const data = [...prevState.data];
                const checkEmail = obj => obj.email === newData.email;
                    if(data.some(checkEmail)) {
                        alert('Email Existing');
                        return false;
                    }
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState(prevState => {
                    const data = [...prevState.data];
                    const checkEmail = obj => obj.email === newData.email;
                    if(data.some(checkEmail) && oldData.email !== newData.email) {
                        alert('Email Existing');
                        return false;
                    }
                  const index = oldData.id - 1;
                    data[index] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                const index = oldData.id - 1;
                data.splice(index, 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
            </Container>
        </React.Fragment>
        )
    }
}

export default Users

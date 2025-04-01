import React from 'react'
//import the component adminMenu
import AdminMenu from '../../components/Admin/AdminMenu/AdminMenu'
 import { useAuth } from "../../../Contexts/AuthContext";
//import the component addEmployeeForm
import AddEmployeeForm from '../../components/Admin/AddEmployeeForm/AddEmployeeForm'

function AddEmployee() {
  //Destructure the auth hook
  const { isLogged, role } = useAuth()

  //Check if the user is logged in and is an admin
  if (isLogged) {
    if (role !== 3) {
      return (
        <div className='unauthorized'>
          <h1>Unauthorized</h1>
          <p>You are not authorized to view this page</p>
        </div>
      )
    }
  }else{
  return (
    <div>
      <div className='container-fluid admin-pages'>
        <div className='row'>
          <div className='col-md-3 admin-left-side'>
            <AdminMenu/>

          </div>
          <div className='col-md-9 admin-right-side'>
            <AddEmployeeForm/>

          </div>
        </div>
      </div>
    </div>
  )
}
}

export default AddEmployee
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PaginationProvider } from "../context/PaginationContext";
import PaginationControls from "./PaginationControls";
import { listEmployees } from '../redux/employee/actions';
import BasicTable from './MuiTable';

const EmployeeList = ({ employees, listEmployees }) => {


  const handleSubmitData = (data) => {
    console.log(data)
  }
  

  useEffect(() => {
    listEmployees();
  }, [listEmployees]);

  const employeeFields = [
    { name: 'first_name', label: 'Nombre'},
    { name: 'last_name', label: 'Apellidos'}
  ];

  const model = 'employee'

  return (
    <PaginationProvider data={employees} rowsPerPage={2} fields={employeeFields} model={model}>

      <BasicTable />
      <PaginationControls />
    </PaginationProvider>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { listEmployees })(EmployeeList);
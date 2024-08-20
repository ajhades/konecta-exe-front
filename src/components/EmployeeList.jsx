import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PaginationProvider } from "../context/PaginationContext";
import PaginatedTable from "./PaginatedTable";
import PaginationControls from "./PaginationControls";
import { listEmployees } from '../redux/employee/actions';

const EmployeeList = ({ employees, listEmployees }) => {
  useEffect(() => {
    listEmployees();
  }, [listEmployees]);

  const employeeFields = [
    { name: 'first_name', label: 'Nombre'},
    { name: 'last_name', label: 'Apellidos'}
  ];

  return (
    <PaginationProvider data={employees.data} rowsPerPage={2} fields={employeeFields}>
      <h1>Employee List</h1>
      <PaginatedTable />
      <PaginationControls />
    </PaginationProvider>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { listEmployees })(EmployeeList);
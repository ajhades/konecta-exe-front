import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PaginationProvider } from "../context/PaginationContext";
import PaginatedTable from "./PaginatedTable";
import PaginationControls from "./PaginationControls";
import { listEmployees } from '../redux/employee/actions';
import BasicTable from './MuiTable';
import FormDialog from './FormDialog';

const formEmployees = {
  name: 'Name', label: 'Lastname'
}

const EmployeeList = ({ employees, listEmployees }) => {


  const handleSubmitData = (data) => {
    /**Aqui haces el llamado a la api con el json del formulario del modal */
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
      { /* <PaginatedTable /> */}
      <PaginationControls />
      <FormDialog form={formEmployees} onSubmitForm={(data) => handleSubmitData(data)} />
    </PaginationProvider>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { listEmployees })(EmployeeList);
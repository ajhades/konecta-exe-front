import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listEmployees } from '../redux/employee/actions';

const EmployeeList = ({ employees, listEmployees }) => {
  useEffect(() => {
    listEmployees();
  }, [listEmployees]);

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {employees.data.map((employee) => (
          <li key={employee.id}>{employee.first_name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  employees: state.employees,
});

export default connect(mapStateToProps, { listEmployees })(EmployeeList);
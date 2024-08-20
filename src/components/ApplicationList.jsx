import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listApplications } from '../redux/application/actions';
import PaginatedTable from './PaginatedTable';
import { PaginationProvider } from '../context/PaginationContext';
import PaginationControls from './PaginationControls';


const ApplicationList = ({ applications, listApplications }) => {
  useEffect(() => {
    listApplications();
  }, [listApplications]);
  console.log(applications, listApplications);

  const applicationFields = [
    { name: 'code', label: 'Codigo'},
    { name: 'resume', label: 'Resumen'}
  ];

  const model = 'application';

  return (
    <PaginationProvider data={applications} rowsPerPage={2} fields={applicationFields} model={model}>
      <h1>Application List</h1>
      <PaginatedTable />
      <PaginationControls />
    </PaginationProvider>
  );
};

const mapStateToProps = (state) => ({
  applications: state.applications,
});

export default connect(mapStateToProps, { listApplications })(ApplicationList);
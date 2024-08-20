import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listApplications } from '../redux/application/actions';
import { PaginationProvider } from '../context/PaginationContext';
import PaginationControls from './PaginationControls';
import BasicTable from './MuiTable';

const ApplicationList = ({ applications, listApplications }) => {

  const handleSubmitData = (data) => {
    console.log(data)
  }
  
  useEffect(() => {
    listApplications();
  }, [listApplications]);

  const applicationFields = [
    { name: 'code', label: 'Codigo'},
    { name: 'resume', label: 'Resumen'}
  ];

  const model = 'application';

  return (
    <PaginationProvider data={applications} rowsPerPage={2} fields={applicationFields} model={model}>
     
      <BasicTable />
      <PaginationControls />
    </PaginationProvider>
  );
};

const mapStateToProps = (state) => ({
  applications: state.applications,
});

export default connect(mapStateToProps, { listApplications })(ApplicationList);
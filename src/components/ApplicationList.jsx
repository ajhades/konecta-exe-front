import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listApplications } from '../redux/application/actions';
import PaginatedTable from './PaginatedTable';
import { PaginationProvider } from '../context/PaginationContext';
import PaginationControls from './PaginationControls';
import BasicTable from './MuiTable';
import FormDialog from './FormDialog';

const formApplications = {
  name: 'Code', label: 'Summary'
}

const ApplicationList = ({ applications, listApplications }) => {

  const handleSubmitData = (data) => {
    /**Aqui haces el llamado a la api con el json del formulario del modal */
    console.log(data)
  }
  
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
     
      <BasicTable />
      <FormDialog form={formApplications} onSubmitForm={(data) => handleSubmitData(data)} />
      <PaginationControls />
    </PaginationProvider>
  );
};

const mapStateToProps = (state) => ({
  applications: state.applications,
});

export default connect(mapStateToProps, { listApplications })(ApplicationList);
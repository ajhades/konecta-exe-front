import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { listApplications } from '../redux/application/actions';

const ApplicationList = ({ applications, listApplications }) => {
  useEffect(() => {
    listApplications();
  }, [listApplications]);
  console.log(applications, listApplications);

  return (
    <div>
      <h1>Applications</h1>
      <ul>
        {applications.data?.map((application) => (
          <li key={application.id}>{application.code}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  applications: state.applications,
});

export default connect(mapStateToProps, { listApplications })(ApplicationList);
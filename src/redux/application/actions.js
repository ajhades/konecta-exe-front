import {
  CREATE_APPLICATION,
  LIST_APPLICATIONS,
  UPDATE_APPLICATION,
  DELETE_APPLICATION,
} from "./types";

import Application from "../../services/applicationService";

export const listApplications = () => async (dispatch) => {
  try {
    const res = await Application.getAllApplications();

    dispatch({
      type: LIST_APPLICATIONS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createApplication = (application) => async (dispatch) => {
  try {
    const res = await Application.createApplication(application);

    dispatch({
      type: CREATE_APPLICATION,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateApplication = (id, data) => async (dispatch) => {
  try {
    const res = await Application.updateApplication(id, data);

    dispatch({
      type: UPDATE_APPLICATION,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteApplication = (id) => async (dispatch) => {
  try {
    await Application.deleteApplication(id);

    dispatch({
      type: DELETE_APPLICATION,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

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

export default listApplications;

import {
  CREATE_APPLICATION,
  LIST_APPLICATIONS,
  UPDATE_APPLICATION,
  DELETE_APPLICATION,
} from "./types";

const initialState = [];

function applicationReducer(applications = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_APPLICATION:
      return [...applications, payload];

    case LIST_APPLICATIONS:
      return payload;

    case UPDATE_APPLICATION:
      return applications.map((application) => {
        if (application.id === payload.id) {
          return {
            ...application,
            ...payload,
          };
        } else {
          return application;
        }
      });

    case DELETE_APPLICATION:
      return applications.filter(({ id }) => id !== payload.id);

    default:
      return applications;
  }
}

export default applicationReducer;

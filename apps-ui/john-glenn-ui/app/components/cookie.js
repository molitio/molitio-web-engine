import { cookieConsent } from './actions';

const initialState = {
    cookieConsent: false,
  };

const cookie = (state = initialState, action) => {
  switch (action.type) {
    case cookieConsent:
      return {
        ...state,
        cookieConsent: action.payload,
      };
    default:
      return state;
  }

};

export default cookie;
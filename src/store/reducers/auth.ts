const tokenData = localStorage.getItem('authToken');
let initialState: any = {};

initialState = {
  isLogin: tokenData ? true : false,
  token: tokenData ? tokenData : null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLogin: true,
        token: action.payload,
      };
    default:
      return state;
  }
};

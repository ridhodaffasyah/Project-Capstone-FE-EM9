const tokenData = localStorage.getItem('token');
let initialState: any = {};

initialState = {
  isLogin: tokenData ? true : false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLogin: true,
      };
    default:
      return state;
  }
};

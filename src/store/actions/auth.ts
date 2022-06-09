export const login =
  (data: any) => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    dispatch({
      type: 'LOGIN',
      payload: data,
    });
  };

interface LoginPayloadValue {
  email: string;
  password: string;
}
type Dispatch = (arg: { type: string; data?: {} | string }) => void;

export const login =
  (payload: LoginPayloadValue) => async (dispatch: Dispatch) => {
    localStorage.setItem('token', 'asdasdsadasdada');
    dispatch({
      type: 'LOGIN',
    });
  };

export const loginAction = (username: string, password: string) => {
    return {
      type: 'ACTION_LOGIN',
      payload: {
        user: {
          username,
          password
        }
      }
    };
  };
   
  export const logoutAction = () => {
    return {
      type: 'ACTION_LOGOUT',
    };
  };
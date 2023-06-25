const initialState = {
    user: {
        username: '',
        password: ''
    },
};
   
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'ACTION_LOGIN':
        return {
          user: action.payload.user
        };
      case 'ACTION_LOGOUT':
        return {
          user: {
            username: '',
            password: ''            
          }
        };
      default:
        return state;
    }
  };
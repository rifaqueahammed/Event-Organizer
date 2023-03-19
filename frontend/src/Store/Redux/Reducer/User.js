const initialState = {
    user:{
      id:'',
      email:'',
      username:''
    }
  };
  
const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "addUserData":
        return {
          ...prevState,
          user:{
            ...prevState.user,
            ...action.user
          },
        };
      case "removeUser":
        return {
          user:{
            id:'',
            email:'',
            username:''
          }
        };
      default:
        return prevState;
    }
  };
  
export default userReducer;
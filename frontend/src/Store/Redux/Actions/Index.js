
export const ServiceProviderData = (serviceProvider) => {
  return (dispatch) => {
    dispatch({
      type: "addServiceProviderData",
      serviceProvider:serviceProvider
    });
  };
};

export const removeServiceProvider = (user) => {
  return (dispatch) => {
    dispatch({
      type: "removeServiceProvider",
      serviceProvider:{
        id:'',
        email:'',
        companyname:''
      }
    });
  };
};

export const UserData = (user) => {
    return (dispatch) => {
      dispatch({
        type: "addUserData",
        user:user
      });
    };
  };

  export const removeUser = (user) => {
    return (dispatch) => {
      dispatch({
        type: "removeUser",
        user:{
          id:'',
          email:'',
          username:''
        }
      });
    };
  };
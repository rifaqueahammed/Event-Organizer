const initialState = {
  serviceProvider:{
      id:'',
      email:'',
      companyname:''
    }
  };
  
const ServiceProviderReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case "addServiceProviderData":
        return {
          ...prevState,
          serviceProvider:{
            ...prevState.serviceProvider,
            ...action.serviceProvider
          },
        };

      case "removeserviceProvider":
        return {
          serviceProvider:{
            id:'',
            email:'',
            companyname:''
          }
        };

    default:
        return initialState;
    }
  };
  
export default ServiceProviderReducer;
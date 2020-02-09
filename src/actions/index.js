import axios from "axios";
import axiosWithAuth from "../axios/axiosAuth";

//////////////////////////// SIGNUP /////////////////////////////////////////////////
export const SIGNUP_USERNAME = "SIGNUP_USERNAME"; /// SIGNUP /////
export const SIGNUP_PASSWORD = "SIGNUP_PASSWORD"; /// SIGNUP /////

export const MAKE_CUSTOMER = "MAKE_CUSTOMER"; /// CUSTOMER /////
export const LOCATION_CUSTOMER = "LOCATION_CUSTOMER"; /// CUSTOMER /////
export const PASSWORD_CUSTOMER = "PASSWORD_CUSTOMER"; /// CUSTOMER /////
export const EMAIL_CUSTOMER = "EMAIL_CUSTOMER"; /// CUSTOMER /////
export const USERNAME_CUSTOMER = "USERNAME_CUSTOMER"; /// CUSTOMER /////

export const SUCCESS = "SUCCESS";
export const DESCRIPTION = "DESCRIPTION"; /// DESCRIPTION /////

export const description = data => ({ type: DESCRIPTION, payload: data }); /// DESCRIPTION /////
export const signupUser = data => ({ type: SIGNUP_USERNAME, payload: data }); /// SIGNUP USER /////
export const signupPass = data => ({ type: SIGNUP_PASSWORD, payload: data }); /// SIGNUP PASS /////
export const updateSignupUser = data => dispatch => {
  dispatch(signupUser(data)); /// UPDATE SIGNUP USER/////
};
export const updateSignupPass = data => dispatch => {
  dispatch(signupPass(data)); /// UPDATE SIGNUP PASS/////
};
export const customerMaking = data => ({ type: MAKE_CUSTOMER, payload: data }); ///MAKING CUSTOMER/////
export const customerLocation = data => ({
  type: LOCATION_CUSTOMER,
  payload: data /// CUSTOMER LOCATION/////
});
export const customerUserName = data => ({
  type: USERNAME_CUSTOMER,
  payload: data /// CUSTOMER USER/////
});
export const customerEmail = data => ({ type: EMAIL_CUSTOMER, payload: data }); /// CUSTOMER EMAIL /////
export const customerPassWord = data => ({
  type: PASSWORD_CUSTOMER,
  payload: data /// CUSTOMER PASS /////
});

export const successLoad = () => ({ type: SUCCESS }); /// SUCCESS/////
export const updateLocation = location => dispatch => {
  dispatch(customerLocation(location)); /// CUSTOMER LOCATION/////
};
export const updateEmail = email => dispatch => {
  dispatch(customerEmail(email)); /// UPDATE EMAIL/////
};
export const updateUserName = username => dispatch => {
  dispatch(customerUserName(username)); /// UPDATE USER/////
};
export const updatePassWord = password => dispatch => {
  dispatch(customerPassWord(password)); /// UPDATE PASS/////
};

const authAxios = axiosWithAuth();

/////////////////////////////////// Customer Calls //////////////////////////

export const fetchCustomers = () => dispatch => {
  // dispatch(customerLoading());
  authAxios
    //   fix users below
    .get("/customer/:customerId")
    .then(res => {
      console.log("this is customers response.data", res);
      // dispatch(customerSuccess(res.data));
      //successload()
    })
    .catch(error => {
      console.log("this is error", error.message);
      // dispatch(customerFailure(error.message));
    });
};

export const postCustomer = (
  locationCustomer,
  emailCustomer,
  signupUsername,
  signupPassword
) => dispatch => {
  // dispatch(customerLoading());
  authAxios
    .post("/customer/register", {
      state: locationCustomer,
      email: emailCustomer,
      username: signupUsername,
      password: signupPassword
    })
    .then(res => {
      console.log("this is postCustomer response.data", res);
      // dispatch(customerMaking(res.data))
      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
      //dispatch(customerFailure(error.message))
    });
};
export const putCustomer = (
  locationCustomer,
  emailCustomer,
  signupUsername,
  signupPassword,
  id
) => dispatch => {
  // dispatch(customerLoading());
  authAxios
    .post(`https://haircare-backend-dingo.herokuapp.com/customer/login${id} `, {
      state: locationCustomer,
      email: emailCustomer,
      username: signupUsername,
      password: signupPassword
    })
    .then(res => {
      console.log("this is putCustomer response.data", res);
      // dispatch(costumerMaking(res.data))
      //successLoad()
    })
    .catch(error => {
      console.log("this is error", error.message);
      //dispatch(customerFailure(error.message))
    });
};
export const fetchStylist = () => dispatch => {
  // authAxios;
  // .get("/stylist")
  // .then(res => {
  //   console.log("this is response.data", res);
  //   dispatch(stylistSuccess(res.data));
  // })
  // .catch(error => {
  //   console.log("this is error", error.message);
  //   dispatch(stylistFailure(error.message));
  // });
};

// export const putStylist = (username, password, description, id) => dispatch => {
//   dispatch(stylistLoading());

// authAxios
//   .put(
//     `/stylist/:stylistId${id}`, ///ENTER THE SPECIFIC ID?
//     {
//       about: description,
//       STYLIST_USER: username,
//       STYLIST_PASS: password
//     }
//   )
// .then(res => {
//   console.log("this is putStylist response", res);

//successLoad()
// })
// .catch(error => {
//   console.log("this is error", error.message);
// });
// };

export const deleteStylist = id => dispatch => {
  authAxios
    .delete(`/stylist/:stylistId${id}`)
    .then(res => {
      console.log("this is delete stylist", res);
    })
    .catch(err => console.log("this is delete user error", err));
};

// DELETING INFO FOR REVIEWS

export const DELETE = "Delete";

export const Delete = id => ({
  type: DELETE,
  payload: id
});

export const EDIT_REVIEW = "Update";

export const Update = obj => ({
  type: EDIT_REVIEW,
  payload: obj
});

export const ADD = "add";

export const Add = obj => ({
  type: ADD,
  payload: obj
});

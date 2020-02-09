import { DESCRIPTION, DELETE, EDIT_REVIEW, ADD } from "../actions";

const initialState = {
  costumers: [
    //{"username":"skye","location":California,"email":"skyet@gmail.com","id":1234}
  ],
  isFetching: false,
  error: null,
  ///////////USER
  location: "",
  email: "",
  signupUsername: "",
  signupPassword: "",
  //  user
  userInput: {
    username: "",
    password: "",
    location: "",
    description: " "
  },
  id: 0,

  reviews: [
    {
      description: "Amazing Stylist",
      rating: 0,
      image_1: "",
      image_2: "",
      image_3: "",
      customer_id: 0,
      stylist_id: 1,
      id: 0
    }
  ]
};
//   success: false,

export function reducer(state = initialState, action) {
  switch (action.type) {
    case DESCRIPTION:
      return {
        ...state,
        description: action.payload
      };

    case DELETE:
      return {
        ...state,
        reviews: state.reviews.filter(item => item.id !== action.payload)
      };

    case EDIT_REVIEW:
      console.log("reducer", action.payload);
      return {
        ...state,
        reviews: state.reviews.map(review => {
          if (review.id === action.payload.id) {
            return action.payload;
          } else {
            return review;
          }
        })
      };
    case ADD:
      return {
        ...state,
        reviews: [...state.reviews, action.payload]
      };

    default:
      return state;
  }
}

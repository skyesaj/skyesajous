import axios from "axios";
// yelp
export const YELP_KEY =
  "tzH9dd5-37OMDMn2pLOXpl1K4BsvwLvBQa7Fn13L4cNRhr5DmuOczTHdkStifvg2rjOyhiweH6J0X50rfP99dnnUBoy0LBBajuHas0QsgIMcswLCwd6Pw6tRhTM6XnYx";
export const yelpApi = () => {
  return axios.create({
    baseURL: `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3`,
    headers: {
      Authorization: `Bearer ${YELP_KEY}`
    }
  });
};

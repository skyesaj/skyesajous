import React, { useState } from "react";

import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Update } from "../../actions/index";
import ReactStars from "react-stars";
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(195, 116, 51);
  color: rgb(195, 116, 51);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 2rem;
  border-radius: 15px;
`;

const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 20%;
  width: 50%;
`;

const EditForm = ({ content, Update }) => {
  const [text, setText] = useState({
    description: content.description,
    rating: 0,
    image_1: "",
    image_2: "",
    image_3: "",
    customer_id: 0,
    stylist_id: 1,
    id: content.id
  });
  const history = useHistory();
  const handleStars = e => {
    return setText({
      ...text,
      rating: e
    });
  };
  const handleChange = e => {
    setText({
      ...text,
      [e.target.name]: e.target.value
    });
  };
  return (
    <Container>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(text);
          Update(text);
          setText({
            description: content.description,
            rating: 0,
            image_1: "",
            image_2: "",
            image_3: "",
            customer_id: 0,
            stylist_id: 1
          });
          history.push("/dashboard");
        }}
      >
        <div className="review-stars">
          <input
            className="review-text"
            onChange={handleChange}
            type="text"
            name="description"
            value={text.description}
            placeholder="Review"
            required
          ></input>
          <ReactStars
            className="stars"
            // edit={false}
            count={5}
            value={text.rating}
            size={24}
            color2={"#ffd700"}
            name="rating"
            onChange={handleStars}
            // required
          />
          <Button type="submit">Submit a Review</Button>
        </div>
      </form>
    </Container>
  );
};

// const EditForm = ({ content, Update }) => {
//   const [text, setText] = useState({
//     description: content.description,
//     rating: 0,
//     image_1: "",
//     image_2: "",
//     image_3: "",
//     customer_id: 0,
//     stylist_id: 1
//   });

//   const history = useHistory();

//   const handleStars = e => {
//     return setText({
//       ...text,
//       rating: e
//     });
//   };

//   const handleChange = e => {
//     setText({
//       ...text,
//       [e.target.name]: e.target.value
//     });
//   };
//   return (
//     <Container>
//       <form
//         onSubmit={e => {
//           e.preventDefault();
//           console.log(text);
//           Update(text);
//           setText({
//             description: content.description,
//             rating: 0,
//             image_1: "",
//             image_2: "",
//             image_3: "",
//             customer_id: 0,
//             stylist_id: 1
//           });
//           history.push("/dashboard");
//         }}
//       >
//         <div className="review-stars">
//           <input
//             className="review-text"
//             onChange={handleChange}
//             type="text"
//             name="description"
//             value={text.description}
//             placeholder="Review"
//             required
//           ></input>
//           <ReactStars
//             className="stars"
//             // edit={false}
//             count={5}
//             value={text.rating}
//             size={24}
//             color2={"#ffd700"}
//             name="rating"
//             onChange={handleStars}
//             // required
//           />

//           <Button type="submit">Submit a Review</Button>
//         </div>
//       </form>
//     </Container>
//   );
// };

export default connect(null, { Update })(EditForm);

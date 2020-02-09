import React, { useState } from "react";
import { connect } from "react-redux";
import { Add } from "../../actions/index";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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
const AddForm = props => {
  const { Add } = props;
  const history = useHistory();

  console.log("hello");

  const [add, addText] = useState({
    description: "",
    rating: 0,
    image_1: "",
    image_2: "",
    image_3: "",
    customer_id: 0,
    stylist_id: 1
  });

  const handleAdd = e => {
    return addText({
      ...add,
      [e.target.name]: e.target.value
    });
  };

  const handleStars = e => {
    return addText({
      ...add,
      rating: e
    });
  };

  return (
    <div className="star-reviews">
      <h1>Add A Review</h1>
      <Container>
        <form
          onSubmit={e => {
            e.preventDefault();
            // Add({
            //   ...add,
            //   id: parseInt(Math.floor(Math.random() * 100), 10)
            // });

            Add(add);
            addText({
              description: "",
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
          <div className="add-review">
            <input
              className="review-text"
              onChange={handleAdd}
              type="text"
              name="description"
              value={add.description}
              placeholder="Review"
              required
            ></input>

            <ReactStars
              className="stars"
              count={5}
              name="rating"
              onChange={handleStars}
              value={add.rating}
              size={24}
              color2={"#ffd700"}
              required
            />
            <Button type="submit">Add Review</Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default connect(null, { Add })(AddForm);

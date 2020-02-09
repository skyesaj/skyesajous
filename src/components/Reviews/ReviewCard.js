import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Delete, Update } from "../../actions/index";
import styled from "styled-components";
import ReactStars from "react-stars";
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(195, 116, 51);
  color: rgb(195, 116, 51);
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 1rem;
  border-radius: 8px;
`;
const ReviewCard = props => {
  const { content, Delete, setContent } = props;
  const history = useHistory();

  console.log(content.rating);

  return (
    <div className="review-stars">
      <div className="card" key={content.id}>
        <figure>
          <img src="" />
        </figure>
        <div className="info">
          <h3>{content.description}</h3>

          <ReactStars
            className="starss"
            edit={false}
            count={5}
            value={content.rating}
            size={24}
            color2={"#ffd700"}
            // required
          />
        </div>

        <Button
          onClick={() => {
            setContent(content);
            history.push("/editform");
          }}
        >
          Update
        </Button>
        <Button onClick={() => Delete(content.id)}> Delete </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    id: state.id
  };
};
export default connect(mapStateToProps, { Delete })(ReviewCard);

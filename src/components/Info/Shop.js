import React, { useState, useEffect} from 'react';

import {Link} from 'react-router-dom';
import axios from 'axios';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {repos: []};
  }

  componentDidMount() {
    axios.get('https://haircare-backend-dingo.herokuapp.com/stylist')
      .then(response =>  this.setState
        
           ({ repos: response.data }))
      
      .catch(error => console.log(error));
      console.log('hi')
  }

  render() {
    return (
      <div>
        <h1>Meet Our Stylist</h1>
        {this.state.repos.map(repo =>
          <div key={repo.id}>{repo.username}<br></br>{repo.location}<br></br>{repo.email}</div>
        )}
      </div>
    );
  }
}

export default Shop
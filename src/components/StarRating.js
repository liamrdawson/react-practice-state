import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  // Write a function that returns 5 Star components
  returnStars = () => {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      starArray.push(
        <Star 
          key={i}/>
      );
    }
    return starArray;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


  render() {
    return (
      <ul className="course--stars">
        {this.returnStars()}
      </ul>
    );
  }
}

export default StarRating;
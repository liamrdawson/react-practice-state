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
          key={i}
          setRating={ () => this.handleChangeRating(i+1) }  
          />
      );
    }
    return starArray;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props

  handleChangeRating = (rating) => {
    this.setState({
      rating: rating
    });
    console.log(rating);
  }

  render() {
    return (
      <ul className="course--stars">
        {this.returnStars()}
      </ul>
    );
  }
}

export default StarRating;
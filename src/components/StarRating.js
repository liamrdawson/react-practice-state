import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  state = {
    rating: 0
  }

  // Returns 5 Star components
  returnStars = () => {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      starArray.push(
        <Star 
          key={i}
          setRating={ () => this.handleChangeRating(i+1) }  
          isSelected={this.state.rating > i}
          />
      );
    }
    return starArray;
  }

  handleChangeRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({rating: 0});
    } else {
      this.setState({rating: rating});
    }
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
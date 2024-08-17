
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    //States creation
    this.state = {
        likes: 0,
        dislikes: 0,
        totalLikes: 0,
        totalDislikes: 0,
        totalRatings:0,

        

        //Events handling -- what controls the buttons/states
        handleLike:() => {
          this.setState((prevState) => ({
            likes: prevState.likes +1,
            totalLikes: prevState.totalLikes +1,
            totalRatings: prevState.totalRatings +1
          }) );

        },
        handleDislike:() =>{
          this.setState((prevState) =>({
            dislikes: prevState.dislikes +1,
            totalDislikes: prevState.totalDislikes +1,
            totalRatings: prevState.totalRatings +1
          }));

        }

    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>
          A very simple React project to develop a like and dislike button
  
        </p>

        <div className="rating-buttons">
          <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <p>Total Likes: {this.state.totalLikes}</p>
          <button className="like-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
          <p>Total Dislikes: {this.state.totalDislikes}</p>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>

     </div>
     </>
    );
  }
}

export default ContentRating;

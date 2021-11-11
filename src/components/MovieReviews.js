// Code MovieReviews Here
import React from 'react'



// export default function MovieReviews(reviews) {

    // const Review = ({
    //     display_title,
    // }) => { return (
    //     <div className='movie-title' key={display_title}>{display_title}</div>
    // )}
    const Review = ({
        display_title,
        headline,
        byline,
        summary_short
      }) => {
        return (
      
          <div
            key={headline}
            className="review"
          >
            <header>
             
                {headline}
              
              <br/>
              <span className="author">{byline}</span>
            </header>
            <h3>{display_title}</h3>
            <p>{summary_short}</p>
          </div>
        );
      };
      

    // return (
    //     <div className='review-list'>
    //         {reviews.map(review => review.display_title)}
    //     </div>
    // )
// }

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews
import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import MovieReviews from './MovieReviews'

ReactDOM.render(
  <div className="app">
    <MovieReviews />
    <SearchableMovieReviewsContainer />
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);


// https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=dedzjngwgIGvFATfzFISfGgQNqrS1FMM
// https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dedzjngwgIGvFATfzFISfGgQNqrS1FMM&query=<search-term>


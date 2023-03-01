import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Movie from './Movie';

const MainComp= (()=> {
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' }
  ];

  return (
    <div>
      <Header />
      <Movie  movies={movies}/>
      <Footer  />
    </div>
  );
},[])

export default MainComp
import React, { useState, useEffect } from 'react';
import { GamesData } from '../components/GamesData';
import StarRatingComponent from 'react-star-rating-component';
import { Button } from '@material-ui/core';
import JSONBullshit from '../data.json';
import { element } from 'prop-types';
import SearchBar from 'material-ui-search-bar';

const Games = () => {
 const [values, setValues] = useState({
  searchBar: '',
 });
 const [starValue, setStarValue] = useState({
  rating: 10,
 });
 const [data, setData] = useState(
  JSONBullshit.map((element) => ({
   ...element,
   id: element.id,
  }))
 );
 const [gameData, setGameData] = useState(
  GamesData.map((game3) => ({ ...game3, id: game3.id }))
 );
 const onStarClick = (nextValue, prevValue, name) => {
  setStarValue(
   GamesData.map((game1) =>
    gameData.id === game1.id
     ? {
        ...game1,
        rating: nextValue,
       }
     : game1
   )
  );
  //   setStarValue({ rating: nextValue });
 };
 const handleSearchBar = (e) => {
  setValues({ ...values, searchBar: e.target.value });
 };
 const showData = () => {};
 return (
  <div>
   <SearchBar
    name='searchBar'
    value={values.searchBar}
    onChange={(newValue) => {
     setValues({ ...values, searchBar: newValue });
    }}
   ></SearchBar>
   <h1>Games</h1>
   {/* {data.map((el) => {
    return <h1>{el.title}</h1>;
   })} */}
   {GamesData.filter((value) => {
    if (values.searchBar == '') {
     return value;
    } else if (
     value.title.toLowerCase().includes(values.searchBar.toLowerCase())
    )
     return value;
   }).map((game) => {
    return (
     <div key={game.id}>
      <img src={game.poster} width='350' height='400'></img>
      <StarRatingComponent
       name={game.title}
       value={starValue.rating}
       onStarClick={onStarClick.bind(this)}
       starCount='10'
      ></StarRatingComponent>
      <h1>{game.title}</h1>
      <legend>{game.description}</legend>
     </div>
    );
   })}
   <Button
    onClick={() => {
     console.log(data);
     console.log(data[0].title);
    }}
   >
    Show JSON
   </Button>
  </div>
 );
};

export default Games;

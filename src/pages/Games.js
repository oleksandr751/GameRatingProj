import React, { useState } from 'react';
import { GamesData } from '../components/GamesData';
import StarRatingComponent from 'react-star-rating-component';
import { makeStyles } from '@material-ui/core/styles';
import {
  AiOutlineComment,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from 'react-icons/ai';
import IconButton from '@material-ui/core/IconButton';
import { Button, TextField } from '@material-ui/core';
// import JSONBullshit from '../data.json';
// import { element } from 'prop-types';
import './Game.css';
import SearchBar from 'material-ui-search-bar';
// import axios from 'axios';
// import Axios from 'axios';

const Games = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }));
  const classes = useStyles();

  const [values, setValues] = useState({
    searchBar: '',
  });
  const [starValue, setStarValue] = useState({
    rating: 10,
  });
  // const [data, setData] = useState(
  //   JSONBullshit.map(element => ({
  //     ...element,
  //     id: element.id,
  //   })),
  // );
  const [gameData, setGameData] = useState(
    GamesData.map(game3 => ({ ...game3, id: game3.id })),
  );

  // Axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(
  //   response => {
  //     //  console.log(response);
  //   },
  // );
  const onStarClick = nextValue => {
    setStarValue(
      gameData.map(game1 =>
        gameData.id === game1.id
          ? {
              ...game1,
              rating: nextValue,
            }
          : game1,
      ),
    );
    //   setStarValue({ rating: nextValue });
  };

  const [newComments, setNewComments] = useState({ 1: '', 2: '' });

  const handleChangeComments = (e, id) => {
    setNewComments({ ...newComments, [id]: e.target.value });
    // setNewComments(
    //   newComments.map((el) =>
    //     el.id === id ? { ...el, text: e.target.value } : el
    //   )
    // );
  };

  //  console.log(gamed.comments.length);
  return (
    <div className="gamesPage">
      <h1 id="mainHeader">Games</h1>
      <SearchBar
        className="searchBar"
        name="searchBar"
        value={values.searchBar}
        onChange={newValue => {
          setValues({ ...values, searchBar: newValue });
        }}
      ></SearchBar>
      {/* {data.map((el) => {
    return <h1>{el.title}</h1>;
   })} */}
      {gameData
        .filter(value => {
          if (value.title) {
            if (values.searchBar == '') {
              return value;
            } else if (
              value.title.toLowerCase().includes(values.searchBar.toLowerCase())
            )
              return value;
          }
        })
        .map(game =>
          game.title ? (
            <div key={game.id} className="eachGame">
              <div className="eachGameImage">
                <a className="photo">
                  <img
                    className="images"
                    alt={game.title}
                    src={game.poster}
                    width="350"
                    height="400"
                  ></img>
                  <div className="glow-wrap">
                    <i className="glow"></i>
                  </div>
                </a>
              </div>

              <div className="eachGameDescription">
                <h1>{game.title}</h1>
                <legend>{game.description}</legend>
                {game.showVideo ? (
                  <iframe
                    className="trailers"
                    width="560"
                    height="315"
                    src={game.trailer}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay ; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={false}
                  ></iframe>
                ) : null}

                <StarRatingComponent
                  className="starRate"
                  name={game.title}
                  value={starValue.rating}
                  onStarClick={onStarClick.bind(this)}
                  //  onStarHover={}
                  starCount={10}
                ></StarRatingComponent>
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={() => {
                    setGameData([
                      ...gameData,
                      (game.showComments = !game.showComments),
                    ]);
                  }}
                >
                  <AiOutlineComment></AiOutlineComment>
                  <p>{game?.comments?.length}</p>
                </IconButton>
                {game.showComments ? (
                  <div>
                    {game.comments.map((comment, index) => (
                      <div key={index} className="comments">
                        <p>{comment.id}:</p>
                        <p>{comment.text}</p>
                      </div>
                    ))}
                    <TextField
                      name="comments"
                      onChange={e => handleChangeComments(e, game.id)}
                      value={newComments[game.id]}
                      // value={
                      //   newComments.find((comm) => comm.id === element.id).text
                      // }
                    ></TextField>

                    <Button
                      onClick={() => {
                        setGameData(
                          gameData.map(item =>
                            item.id === game.id && newComments[game.id]
                              ? {
                                  ...item,
                                  comments: [
                                    ...item.comments,
                                    {
                                      id: game.id,
                                      text: newComments[game.id],
                                    },
                                  ],
                                }
                              : item,
                          ),
                        );
                        setNewComments({ ...newComments, [game.id]: '' });
                        console.log(newComments);
                      }}
                    >
                      Add Comment
                    </Button>
                  </div>
                ) : null}
                <IconButton
                  aria-label="delete"
                  className={classes.margin}
                  onClick={() => {
                    setGameData([
                      ...gameData,
                      (game.showVideo = !game.showVideo),
                      (game.arrowDown = !game.arrowDown),
                    ]);
                  }}
                >
                  {game.arrowDown ? (
                    <AiOutlineArrowDown></AiOutlineArrowDown>
                  ) : (
                    <AiOutlineArrowUp></AiOutlineArrowUp>
                  )}
                </IconButton>
              </div>
            </div>
          ) : null,
        )}
    </div>
  );
};

export default Games;

import React, { useState, useEffect, useRef } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { SignalCellularNullOutlined } from '@material-ui/icons';
import { AiOutlineComment } from 'react-icons/ai';
const Posts = () => {
 const useStyles = makeStyles((theme) => ({
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
 const formRef = useRef();
 const initialState = {
  postName: '',
  postText: '',
  comments: '',
 };
 const [createPost, setCreatePost] = useState(false);
 //  const [toggleComments, setToggleComments] = useState(false);
 //  const toggleCommentsFunc = () => {
 //   setToggleComments(!toggleComments);
 //  };
 const toggleCreatePost = () => {
  setCreatePost(!createPost);
 };
 const [values, setValues] = useState(initialState);

 const [posts, setPosts] = useState([
  {
   postName: 'Greeting for newcomers!',
   postText: 'Hereby I want to warmely greet our newcomers to this website',
   countLikes: 10,
   countDislikes: 3,
   comments: [
    'Hereby I want to warmely greet our newcomers to this website',
    'Hereby I want to warmely greet our newcomers to this website',
   ],
   showComments: false,
  },
  {
   postName: 'Greeting for newcomers!',
   postText: 'Hereby I want to warmely greet our newcomers to this website',
   countLikes: 13,
   countDislikes: 5,
   comments: [
    'Hereby I want to warmely greet our newcomers to this website',
    'Hereby I want to warmely greet our newcomers to this website',
   ],
   showComments: false,
  },
 ]);
 const handleClick = (e) => {
  setPosts([
   ...posts,
   {
    postName: values.postName,
    postText: values.postText,
    countLikes: 0,
    countDislikes: 0,
    comments: [],
    showComments: false,
   },
  ]);
  console.log(posts);
  formRef.current.reset();
 };

 const handleChange = (e) => {
  setValues({
   ...values,
   [e.target.name]: e.target.value,
  });
 };
 useEffect(() => {}, []);
 return (
  <div className='postsContainer'>
   <Button
    id='createPostButton'
    variant='contained'
    color='primary'
    onClick={toggleCreatePost}
   >
    Create Post
   </Button>
   {createPost ? (
    <form ref={formRef}>
     <TextField
      id='outlined-basic'
      label='Post Name'
      variant='outlined'
      name='postName'
      onChange={handleChange}
     ></TextField>
     <TextField
      id='outlined-basic1'
      name='postText'
      label='Post Text'
      variant='outlined'
      multiline
      onChange={handleChange}
     ></TextField>
     <Button variant='contained' color='primary' onClick={handleClick}>
      Post
     </Button>
    </form>
   ) : null}

   {/* <input
    accept='image/*'
    className={classes.input}
    id='icon-button-file'
    type='file'
   />
   <label htmlFor='icon-button-file'>
    <IconButton color='primary' aria-label='upload picture' component='span'>
     <PhotoCamera />
    </IconButton>
   </label> */}
   {posts.map((element, index) =>
    element.postName ? (
     <div key={Math.floor(Math.random() * 100000)}>
      <h1 key={Math.floor(Math.random() * 100000)}>{element.postName}</h1>
      <legend key={Math.floor(Math.random() * 100000)}>
       {element.postText}
      </legend>
      <a
       onClick={() => {
        setPosts([...posts, (element.countLikes = element.countLikes + 1)]);
       }}
      >
       <IconButton aria-label='delete' className={classes.margin}>
        <AiFillLike></AiFillLike>
        <p>{element.countLikes}</p>
       </IconButton>
      </a>

      <a
       onClick={() => {
        setPosts([
         ...posts,
         (element.countDislikes = element.countDislikes + 1),
        ]);
       }}
      >
       <IconButton aria-label='delete' className={classes.margin}>
        <AiFillDislike></AiFillDislike>
        <p>{element.countDislikes}</p>
       </IconButton>
      </a>
      <div>
       <a
        onClick={() => {
         setPosts([...posts, (element.showComments = !element.showComments)]);
        }}
       >
        <IconButton aria-label='delete' className={classes.margin}>
         <AiOutlineComment></AiOutlineComment>
         <p>{element.comments.length}</p>
        </IconButton>
       </a>
       {element.showComments ? (
        <div>
         {element.comments.map((comment) => (
          <p key={Math.floor(Math.random() * 100000)}>{comment}</p>
         ))}
         <TextField
          key={Math.floor(Math.random() * 100000)}
          name='comments'
          onChange={handleChange}
         ></TextField>
         <Button
          key={Math.floor(Math.random() * 100000)}
          onClick={() => {
           setPosts([...posts, element.comments.push(values.comments)]);
           console.log(posts);
          }}
         >
          Add Comment
         </Button>
        </div>
       ) : null}
      </div>
     </div>
    ) : null
   )}
  </div>
 );
};

export default Posts;

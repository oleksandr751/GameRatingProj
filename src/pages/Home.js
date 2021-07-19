import React from 'react';
import Posts from '../components/Posts';
import './Home.css';

function Home() {
 return (
  <div className='homePage'>
   <div className='context'>
    <h1>Home page</h1>
   </div>
   <div className='area'>
    <ul className='circles'>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
    </ul>
   </div>
  </div>
 );
}

export default Home;

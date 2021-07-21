import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import PostsPage from './pages/PostsPage';
import Games from './pages/Games';
import Users from './pages/Users';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" component={Reports} />
          <Route path="/products" component={Products} />
          <Route path="/posts" component={PostsPage} />
          <Route path="/games" component={Games} />
          <Route path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

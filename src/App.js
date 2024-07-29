// src/App.js

import AtomImage from "./components/atom/atom-image";
import AtomLabel from "./components/atom/atom-label";
import Avatar from './components/molecule/avatar'
import TweetCard from "./components/organism/tweet-card";
import Dashboard from "./components/template/dashboard";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      {
        // <AtomImage pathImage={ logo } opts={ {width:200 } }/>
        // <AtomLabel text="@oskrmarq" opts={ { link:"https://google.com", size:12 } } /> 
        // <Avatar />
        // <TweetCard />
        // <TweetCard />
        // <TweetCard />
      }
      
      <Dashboard />
    </>
  );
}

export default App;

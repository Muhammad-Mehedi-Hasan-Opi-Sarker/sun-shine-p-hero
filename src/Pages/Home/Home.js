import React from 'react';
import Banner from './Banner';
import Carosul from './Carosul/Carosul';
import Info from './Info';
import Self from './Self/Self';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Info></Info>
     <Carosul></Carosul>
     <Self></Self>
    </div>
  );
};

export default Home;
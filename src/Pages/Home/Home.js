import React from 'react';
import Process from '../Process/Process';
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
     <Process></Process>
    </div>
  );
};

export default Home;
import React from 'react';
import Process from '../Process/Process';
import Banner from './Banner';
import Carosul from './Carosul/Carosul';
import FeaturedCourses from './FeaturedCourses/FeaturedCourses';
import Info from './Info';
import Self from './Self/Self';

const Home = () => {
  return (
    <div>
     <Banner></Banner>
     <Info></Info>
     {/* <Carosul></Carosul> */}
     <Self></Self>
     <Process></Process>
     <FeaturedCourses></FeaturedCourses>
    </div>
  );
};

export default Home;
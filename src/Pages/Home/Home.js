import React from 'react';
import Process from '../Process/Process';
import Footer from '../sheard/Footer';
import Banner from './Banner';
import Career from './Career';
import Carosul from './Carosul/Carosul';
import Customer from './Coustomer/Customer';
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
     <Career></Career>
     <Customer></Customer>
     <Footer></Footer>
    </div>
  );
};

export default Home;
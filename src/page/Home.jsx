import React from 'react';
import {Content} from '../components/Content/Content';
import Features from '../components/Features/Features';
import Carousel from '../components/Carousel/Carousel';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';




function Home() {
return(
    <>
    <Hero  />;
    <Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
    </>
  );
}

export default Home;
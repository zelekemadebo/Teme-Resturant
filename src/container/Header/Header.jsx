// import React from 'react';

import SubHeading  from '../../components/SubHeading/SubHeading';
import  {images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>At Gericht, We Are Passionate About Creating Unforgettable Dining Experiences. Our Menu Combines Global Flavors With Locally Sourced Ingredients, Crafted With Meticulous Attention To Detail. Led By Kevin Luo, Our Team Is Dedicated To Delivering Exceptional Culinary Delights That Leave A Lasting Impression. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;

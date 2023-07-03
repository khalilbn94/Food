import React from 'react'
import Navbar from './Navbar'
import BannerBackgound from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import {FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img src={BannerBackgound} alt='' />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Your Favourite Food Delivered Hot & Fresh
            </h1>
            <p className='primary-text'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus ex, suscipit ac rutrum ut, tristique vitae mi. Sed libero orci, posuere non mollis nec, egestas non elit. 
            Vivamus nibh quam, pharetra vel purus non, feugiat congue orci.
            </p>
            <button className='secondary-button'>
              Order Now <FiArrowRight />
            </button>

          </div>

          <div className='home-image-container'>
              <img src={BannerImage} alt=''/>
          </div>
        </div>
    </div>
  )
}

export default Home
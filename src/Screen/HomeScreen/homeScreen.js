import React from 'react'
import './homeScreen.css'
import HomeBanner from './HomeBanner/homeBanner'
import HomeDetails from './HomeDetails/homedetails'





const HomeScreen = () => {
  return (
    <div className='homescreen'>
        <HomeBanner />
        <HomeDetails />
        

       
        
    </div>
  )
}

export default HomeScreen
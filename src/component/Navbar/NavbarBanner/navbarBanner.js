import React from 'react'
import "./navbarBanner.css";
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';



const NavbarBanner = () => {
  const options = [
    { "name": "MX Player" }, { "name": "Sell" }, { "name": "Best Sellers" }, { "name": "Today's Deals" }, { "name": "Mobiles" }, { "name": "Electronics" }, { "name": "Customer Service" }, { "name": "Home & Kitchen" }, { "name": "Prime" }, { "name": "Amazon Pay" }, { "name": "New Release" }
  ]


  return (
    <div className='navbarBanner'>
      <div className='navbarBannerOptionsLeft'>
        <div className='optionNavbarBanner'>
          <MenuIcon sx={{ fontSize: "24px" }} />
          <div className='allOptionsNavbarBanner'>All</div>

        </div>
        
        {
          options.map((item, ind) => {
            return (
              <Link to={'/product'} className='optionNavbarBanner' key={ind}>
                <div className='allOptionsNavbarBanner'>{item.name}
                 </div>
              </Link>

            )
          })
        }
      


    

      </div>
      <div className='navbarBannerRightSide'>
        <img src="https://m.media-amazon.com/images/G/31/IN-Events/Arundhati/BFCM24_SWM._CB540739007_.jpg" alt="amazon pic" />
      </div>
    </div>
  )
}

export default NavbarBanner
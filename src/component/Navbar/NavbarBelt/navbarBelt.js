import React from 'react'
import "./navbarBelt.css";
import amazonLogoo from "../../../Assets/amazonLogoo.png";
import india from "../../../Assets/india.png";
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';


import { useSelector,useDispatch } from 'react-redux';

const NavbarBelt = () => {

    const cartItems = useSelector((state) => state.cart.items);


  return (
    <div className='navbarBelt'>
        <div className="leftNavBelt">
            <Link to={'/'}className='leftNavBeltLogo'>
                <img className='amazonLogoNavbar' src={amazonLogoo} alt='amazonLogo' />
                <span className='navbar_inLogo'>.in</span>
            </Link>
            <div className='navbarBeltLocation'>
                <div className='navbarBeltLocationImg'>
                    <RoomOutlinedIcon className='navbarBeltLocationImgIcon' sx={{fontSize:"22px"}}/>

                </div>
                <div className='navbarBeltLocationPlace'>
                    <div className='navbarBeltLocationTop'>Delivering to Indore 452001</div>
                    <div className='navbarBeltLocationBottom'>Update location</div>
                 </div>

            </div>

        </div>
        <div className="navbarBeltSearchBox">
            <div className='navbarBeltSearchDiv'>
                <div className='navbarBeltSearchBoxAll'>
                    <div className='navbarBeltSearchBoxAllText'>All</div>
                    <ArrowDropDownOutlinedIcon sx={{fontSize: "20px"}} />
                </div>
                <input type='text' className='navbarBeltInputSearchBox' placeholder='Search Amazon.in' />

                <div className='searchIconNavbarBelt'>
                    <SearchIcon sx={{fontSize:"26px"}} className='searchIconNavbarBeltIcon' />
                </div>
            </div>
            
        </div>
        <div className="rightSideNavbarBelt">
            <div className='indianFlagCode'>
                <img src={india} className='indiaFlag' />
                <div className='indiaCodeNavbarBelt'>EN <ArrowDropDownOutlinedIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}} 
                className='indiaCodeNavbarBeltDrp' /></div>
                


            </div>

            <div className='helloSignInNavbarBelt'>
                <div className='helloTopNavbarBelt'>Hello, User</div>
                <div className='indiaCodeNavbarBelt'>Accounts & Lists</div>
            </div>

            <div className='helloSignInNavbarBelt'>
                <div className='helloTopNavbarBelt'>Return</div>
                <div className='indiaCodeNavbarBelt'>& Orders</div>
            </div>

            <Link to={'/cart'} className='helloSignInNavbarBelt'>
                <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
                <div className='helloTopNavbarBelt'><ShoppingCartOutlinedIcon /><span className='cartTitle'>Cart</span></div>
            </Link>
       
            
        </div>

    </div>
  )
}

export default NavbarBelt
import React from 'react'
import './product.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import productDetail from './product.json';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);


    const handleAddToCart = (item) => {

        toast.success(" Added To Cart", {
            position: "bottom-right"

        });
        dispatch(addToCart(item));

    }


    return (
        <div className="productPage">
            <div className="productTopBanner">
                <div className="productTopBannerItems">
                    Electronics
                </div>
                <div className="productTopBannerItemsSubMenu">Mobiles & Accessories</div>
                <div className="productTopBannerItemsSubMenu">Laptops & Accessories</div>
                <div className="productTopBannerItemsSubMenu">TV & Home Entertainment</div>
                <div className="productTopBannerItemsSubMenu">Audio</div>
                <div className="productTopBannerItemsSubMenu">Cameras</div>
                <div className="productTopBannerItemsSubMenu">Computer Peripherals</div>
                <div className="productTopBannerItemsSubMenu">Smart Technology</div>
                <div className="productTopBannerItemsSubMenu">Musical Instruments</div>
                <div className="productTopBannerItemsSubMenu">Office & Stationary</div>



            </div>

            <div className="productsPageMain">
                <div className="productsPageMainLeftCategory">
                    <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Mobile Accessories
                        </div>
                        <div className="productsPageMainLeftCategoryContentSub">Smartphones & Basic Mobiles</div>
                        <div className="productsPageMainLeftCategoryContentSub">Smart Watches</div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Computer Accessories & Peripherals</div>
                        <div className="productsPageMainLeftCategoryContentSub">Components</div>

                        <div className="productsPageMainLeftCategoryContentSub">Desktops</div>
                        <div className="productsPageMainLeftCategoryContentSub">External Devices & Data Storage</div>

                        <div className="productsPageMainLeftCategoryContentSub">Laptops</div>
                        <div className="productsPageMainLeftCategoryContentSub">Monitors</div>

                        <div className="productsPageMainLeftCategoryContentSub">Networking Devices</div>
                        <div className="productsPageMainLeftCategoryContentSub">Scanners</div>

                        <div className="productsPageMainLeftCategoryContentSub">Servers</div>
                        <div className="productsPageMainLeftCategoryContentSub">Tablets</div>

                        <div className="productsPageMainLeftCategoryContentSub">Cameras & Photography</div>
                        <div className="productsPageMainLeftCategoryContentSub">Car & Vehicle Electronics</div>
                        <div className="productsPageMainLeftCategoryContentSub">GPS & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Home Audio</div>
                        <div className="productsPageMainLeftCategoryContentSub">Home Theater, TV & Video</div>
                        <div className="productsPageMainLeftCategoryContentSub">MRadio Communication</div>
                        <div className="productsPageMainLeftCategoryContentSub">Portable Media Players</div>
                        <div className="productsPageMainLeftCategoryContentSub">Laptops</div>
                        <div className="productsPageMainLeftCategoryContentSub">Telephones & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Electronic Equipment</div>
                        <div className="productsPageMainLeftCategoryContentSub">Warranties</div>
                        <div className="productsPageMainLeftCategoryContentSub">eBook Readers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Wearable Technology</div>
                        <div className="productsPageMainLeftCategoryContentSub">Headphones, Earbuds & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Power Accessories</div>

                    </div>
                </div>

                <div className='productPageMainRight'>
                    <div className='productPageMainRightTopBanner'>
                        1-5 of 5 results for <span className='productPageMainRightTopBannerSpan'>Macbooks</span>
                    </div>
                    <div className='itemsImageProductPage'>
                        {
                            productDetail.product.map((item, index) => {
                                return (

                                    <div className='itemsImageProductPageOne' key={item.id}>
                                        <div className='imgBloCkitemsImageProductPageOne'>
                                            <img src={item.imageUrl} className='productImageProduct' />
                                        </div>
                                        <div className='productNameProduct'>
                                            <div>{item.name}</div>
                                            <div className='productNameProductRating'>
                                                <StarRateIcon sx={{ fontSize: "px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                                <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                                                <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />


                                            </div>
                                            <div className='priceProductDetailPage'>
                                                <div className='currencyText'>₹</div>
                                                <div className='rateHomeDetail'>
                                                    <div className='rateHomeDetailsPrice'>{item.price}</div>
                                                    <div className='addtobasketBtn' onClick={() => { handleAddToCart(item) }}>Add To Cart</div>
                                                </div>
                                            </div>
                                            <div className='offProductPage'>Upto 10% off on select cards</div>
                                            <div className='freeDeliveryHomepage'>Free Delivery By Amazon</div>
                                        </div>
                                    </div>);
                            })
                        }

                    </div>
                </div>


            </div>
            <ToastContainer />

        </div>
    )
}

export default Product
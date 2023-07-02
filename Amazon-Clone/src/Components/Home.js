import React from 'react'
import "./Home.css"
import Product from './Product.js'
import Slideshow from './Slideshow'

function Home() {


    return (
        <div className="home">
            <div className="home__container">
                <Slideshow />
                {/* <img
                    className="home__image"

                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" /> */}

                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Lenovo Chromebook S330 Laptop, 14-Inch FHD (1920 x 1080) Display, MediaTek MT8173C Processor, 4GB"
                        price={255.00}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61ViOMIUhmL._SX450_.jpg"
                        trackImage = "https://upload.wikimedia.org/wikipedia/commons/4/40/CPI_1914-2022.webp"
                    />
                    <Product
                        id="49538094"
                        title="Gildan Men's Fleece Hooded Sweatshirt, Style G185"
                        price={39.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/41JKAefCFFL.jpg"
                        trackImage= "https://static01.nyt.com/images/2022/07/12/business/asset-for-inflation-promo-image-promo/asset-for-inflation-promo-image-promo-facebookJumbo-v3.png"
                    />


                </div>
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Mi 5A 108 cm (43 inch) Full HD LED Smart Android TV with Dolby Audio (2022 Model)"
                        price={23999}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/416/416/l2f20sw0/television/k/s/l/l43m7-eain-mi-original-imagdrtndgnrymr9.jpeg?q=70"
                        trackImage="../../ProjectImages/aa.png"

                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4976850"
                        title="Laura Ashley Home - Charlotte Collection - Luxury Ultra Soft Comforter, All Season Premium Bedding Set, Stylish Delicate"
                        price={171.99}
                        rating={3}
                        image="https://i.pinimg.com/originals/c3/53/2a/c3532a00f5bb24d19f5854e45f5429d7.jpg"
                    />
                    
                    <Product
                        id="3254344345"
                        title="Acer Aspire TC-895-UA92 Desktop, 10th Gen Intel Core i5-10400 6-Core Processor, 12GB 2666MHz DDR4, 512GB"
                        price={505.99}
                        rating={4}
                        image="https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxQSUyQksxTWpUZUwuX1NTNDAwXy5qcGc.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4999850"
                        title="Office Chair, FelixKing Ergonomic Desk Chair with Adjustable Height and Lumbar Support Swivel Lumbar Support"
                        price={139.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71sGpjQ%2BK%2BS._SS400_.jpg"
                    />
                    <Product
                        id="23448230"
                        title="SEIKO 14 Ultra-Modern Watch Face Black & Silver Tone with Quiet Sweep Wall Clock"
                        price={90.00}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81QvGMQro9L._SY400.jpg"
                    />
                    <Product
                        id="3254434345"
                        title="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000"
                        price={12.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61stA5Z9W0L._SS400_.jpg"
                    />
                </div>



                <div className="home__row">
                    <Product
                        id = "123213411"
                        title = "Redmi Note 5 Pro (Black, 64 GB)  (4 GB RAM)"
                        price= {14999}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/jdhp47k0/mobile/e/h/e/redmi-note-5-pro-na-original-imaf2ashnnbxxks5.jpeg?q=70"
                    />
                    <Product
                        id="495380942"
                        title="Planet of Toys Heavy Duty Bow Arrow Set for Kids Age 5 -12 Years Outdoor Target Game Archery Archery Kit"
                        price={399}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/832/832/xif0q/toy-sport/w/t/u/5-pot-955-archery-kit-planet-of-toys-original-imagm2capfythf7g.jpeg?q=70"
                    />


                </div>
                <div className="home__row">
                    <Product
                        id="49038503"
                        title="SuperToy Sports Super Archery Bow and Arrow Set with Dart Target Board, Colorful with 3 Suction Cup Tip Arrows Archery"
                        price={314}
                        rating={3}
                        image="https://rukminim1.flixcart.com/image/832/832/k69ncsw0/toy-sport/c/x/6/sports-super-archery-bow-and-arrow-set-with-dart-target-board-original-imafzqy3hzy3wgdm.jpeg?q=70"
                    />
                    {/* edited */}
                    
                    <Product
                        id="234455604"
                        title="NEUDOT VISION COMPUTER DESK Engineered Wood Study Table  (Free Standing, Finish Color - Teak, Knock Down)"
                        price={671}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/xif0q/office-study-table/j/l/q/40-particle-board-engineered-wood-vision-neudot-120-teak-original-imagngrcgnc2aczv.jpeg?q=70"
                        trackImage="aa.png"
                    /> 
                    <Product
                        id="32354345"
                        title="SHIRA 24 XXXL Tear Drop Bean Bag Cover (Without Beans)  (Brown, Tan)"
                        price={60.9}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/xif0q/bean-bag/c/k/p/4xl-4xl-bean-bags-with-beans-brown-tan-shira-24-original-imagyhxh3tsehkay.jpeg?q=70"
                    /> 
                </div>

                <div className="home__row">
                    <Product
                        id="9029332"
                        title="BAJAJ Majesty New RCX 3 Electric Rice Cooker  (1.5 L, White)"
                        price={109.98}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/416/416/kuk4u4w0/electric-cooker/1/t/r/rcx-3-majesty-new-rcx-3-bajaj-original-imag7nxeft58dq6g.jpeg?q=70"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="496850"
                        title="Women Grey Shoulder Bag - Regular Size"
                        price={17.99}
                        rating={3}
                        image="https://rukminim1.flixcart.com/image/832/832/xif0q/hand-messenger-bag/8/3/x/-original-imaggbwdzm2rasnu.jpeg?q=70"
                    />
                    
                    <Product
                        id="3243445"
                        title="HRX Predator with Front Suspension and Dual Disc Brakes 85% Assembled 29 T Mountain Cycle  (Single Speed, Red, Black)"
                        price={545.99}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/l4n2oi80/cycle/h/e/x/-original-imagfhuknkmza9g4.jpeg?q=70"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="49850"
                        title="NIVIA Storm Football - Size: 5  (Pack of 1, Multicolor)"
                        price={13.99}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/jxqfonk0/kit/3/3/r/football-training-kit-kit2-nivia-original-imaf42fyevkzq8hz.jpeg?q=70"
                    />
                    <Product
                        id="2348230"
                        title="Men Regular Fit Solid Button Down Collar Formal Shirt"
                        price={9.00}
                        rating={5}
                        image="https://rukminim1.flixcart.com/image/832/832/kst9gnk0/shirt/u/a/t/l-frml-st2-vebnor-original-imag6apmphuh2ayu.jpeg?q=70"
                    />
                    <Product
                        id="3254434345"
                        title="Amazon Basics Nylon USB-A to Lightning Cable Cord, MFi Certified Charger for Apple iPhone, iPad, 4,000"
                        price={12.99}
                        rating={4}
                        image="https://rukminim1.flixcart.com/image/416/416/kdyus280/jam-spread/p/3/v/1-mixed-fruit-jam-plastic-bottle-mixed-fruit-jam-kissan-original-imafurfxpzyymx9y.jpeg?q=70"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home





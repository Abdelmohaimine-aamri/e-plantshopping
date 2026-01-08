import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {

    const [showProductList, setShowProductList] = useState(false);

    const handleGetStartedClick = () => {
        setShowProductList(true);
    };

    const handleHomeClick = () => {
        setShowProductList(false);
    };

    return (
        <div className="app-container">
            <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
                <div className="background-image"></div>
                <div className="content">
                    <div className="landing_content">
                        <h1>Welcome to Paradise Nursery</h1>
                        <div className="divider"></div>
                        <p className="tagline">Where green meets serenity!</p>

                        <div className="mission-statement">
                            <p>
                                At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
                            </p>

                            <p>
                                Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.
                            </p>

                            <p>
                                Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
                            </p>
                        </div>

                        <button className="get-started-button" onClick={handleGetStartedClick}>
                            Explore Our Plants
                        </button>
                    </div>
                    <div className="aboutus_container">
                        <AboutUs/>
                    </div>
                </div>
            </div>
            <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
                <ProductList onHomeClick={handleHomeClick}/>
            </div>
        </div>
    );
}

export default App;
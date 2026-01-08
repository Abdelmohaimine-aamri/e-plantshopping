import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us">
            <h2>About Paradise Nursery</h2>
            <p>
                Welcome to Paradise Nursery, your premier destination for high-quality plants and gardening essentials.
                We believe that greenery brings peace, health, and beauty to every space.
            </p>
            <p>
                Our mission is to help you create your own paradise, whether you're a seasoned gardener or just starting
                your plant journey. From air-purifying plants to fragrant herbs, we have something for everyone.
            </p>
            <div className="features">
                <div className="feature">
                    <h3>🌱 Quality Plants</h3>
                    <p>Carefully selected and nurtured for health and vitality</p>
                </div>
                <div className="feature">
                    <h3>🌿 Expert Advice</h3>
                    <p>Get gardening tips from our plant specialists</p>
                </div>
                <div className="feature">
                    <h3>🏡 Home Delivery</h3>
                    <p>Safe delivery to your doorstep</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
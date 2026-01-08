import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us">
            <h2>Why Choose Paradise Nursery?</h2>
            <div className="features">
                <div className="feature">
                    <div className="feature-icon">🌿</div>
                    <h3>Premium Quality</h3>
                    <p>Every plant is carefully selected and nurtured by our experts to ensure health and vitality.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">👨‍🌾</div>
                    <h3>Expert Guidance</h3>
                    <p>Our plant specialists provide personalized advice for plant care and maintenance.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">🚚</div>
                    <h3>Safe Delivery</h3>
                    <p>We ensure safe and secure delivery of your plants right to your doorstep.</p>
                </div>
                <div className="feature">
                    <div className="feature-icon">🌎</div>
                    <h3>Sustainable Practices</h3>
                    <p>Committed to eco-friendly packaging and sustainable gardening practices.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
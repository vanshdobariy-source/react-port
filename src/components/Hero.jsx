import React from 'react';
import catImg from '../assets/cat.jpg';

const Hero = () => {
    const handleDownload = (e) => {
        e.preventDefault();
        alert('CV download functionality would be implemented here. For now, please update the href attribute to point to your actual CV file.');
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Hey there, I am Vansh Dobariya</h1>
                <p>I am a passionate student and aspiring full-stack developer with a love for creating interactive web applications. I enjoy turning ideas into reality through code.</p>
                <a href="#" className="btn" onClick={handleDownload}>Download CV</a>
            </div>
            <div className="profile-image">
                <img src={catImg} alt="Profile" />
            </div>
        </section>
    );
};

export default Hero;

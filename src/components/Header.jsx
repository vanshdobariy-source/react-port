import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        // Smooth scrolling for navigation links
        const handleScroll = (e) => {
            const href = e.currentTarget.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        };

        const links = document.querySelectorAll('nav a[href^="#"]');
        links.forEach(link => link.addEventListener('click', handleScroll));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, []);

    return (
        <header>
            <nav>
                <div className="logo">Vansh Dobariya</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => (
    <>
        <Navbar />
        <header className="bg-dark text-white text-center py-5">
            <div className="container">
                <h1 className="display-4">Welcome to FoodWagon</h1>
                <p className="lead">Delicious meals delivered to your door.</p>
                <a href="#menu" className="btn btn-primary btn-lg">Explore Menu</a>
            </div>
        </header>
        <Footer />
    </>
);

export default Home;

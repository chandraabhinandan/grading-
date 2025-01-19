import React from 'react'
import ReactDOM from 'react-dom/client'
import heroImage from '../assets/hero.jpg';
import './home.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer';

function Home(){
    return (
        <div>
            <Navbar />
        <div className="hero px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="text col-lg-6 text-start">
                <h1 className="display-6 fw-bold lh-1 mb-3">Campus Management Solutions for Educational Institutions</h1>
                <br />
                <p className="lead fw-bold">Distinct product offerings for Schools, Colleges, Universities & Trusts.</p>
                <br />
                <p className="lead fw-bold">Automation of Students, Faculty & Campus Administration.</p>
                <br />
                <p className="lead fw-bold">Learning Outcome Management & Analysis to promote Student Success</p>
                <br />
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a href="/create"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Create Account</button></a>
                </div>
            </div>
            </div>
        </div>
        <br />
        <br />
        <div className='statistics' >
        <h3>Key Statistics</h3>
        <div className='data'>
            <div className='item item1'>
                <h1>2000+</h1>
                <h2>Successfull implementation</h2>
            </div>
            <div className='item'>
                <h1>22+</h1>
                <h3>Years Of Experience</h3>
            </div>
            <div className='item'>
                <h1>10+</h1>
                <h3>Million Users</h3>
            </div>
            <div className='item'>
            <h1>400+</h1>
            <h3>Team Strength</h3>
            </div>
        </div>
        </div>
        <br />
        <br />
        <Footer />
        </div>
    );
}
export default Home;
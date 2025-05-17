import React, { useState } from 'react';
import './career.css';
import NavBar from '../components/home/jsx/navbar';
import Header from '../components/home/jsx/header';
import backgroundImage from "../assets/background.jpg";
import Footer from "../components/Footer";



const Career = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        collaborationType: ''
    });

    const cardsData = [
        {
            id: 1,
            title: 'Why You ?',
            text: 'Because our success depends on yours! You\'re passionate about cybersecurity,\n' +
                'data protection is one of your priorities, you\'re looking to develop your skills in a\n' +
                'stimulating and constantly evolving sector, and you\'re looking for a rich and varied experience...\n' +
                'many opportunities are available to you at BEAMTEL!',
            imageUrl: 'https://imgs.search.brave.com/Yq-DB7Tyd4ELbnvnfRVlQ5rgElI0vZFaru19qqGr8p4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VuZy1naXJs/LXNocnVnZ2luZy1z/aG91bGRlcnMtaS1r/bm93LXdoeS1hcmUt/eW91LXNob3V0aW5n/LW1lXzI2MjI4OC0z/NjM1LmpwZz9zZW10/PWFpc19oeWJyaWQ',
        },
        {
            id: 2,
            title: 'Why US ?',
            text: " At  BEAMTEL, employees are valued and empowered. We have much more than a job to offer you:\n" +
                "A collaborative work environment that promotes diversity and mutual respect,\n" +
                "Assignments that stimulate your intellectual curiosity,\n" +
                "The opportunity to grow and flourish in a career with a future",
            imageUrl: 'https://imgs.search.brave.com/BDCvbjnYJLXvoA58FbapycD3R4RM6XEsoCo8E6DeZJs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODI2/NDQxMjY2L3Bob3Rv/L3doeS1jaG9vc2Ut/dXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPV9OR0RZUy1l/S2wxQmh0UUdJTXNQ/UGY4d251WlpaVHk0/eFVxdkhZa2JTeXM9'
        },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div>
            <Header />
            <NavBar />
            <section
                className="hero-section"

                style={{ backgroundImage: `url(${backgroundImage})` }}
            >

                <div className="contact-form-container">

                    <h2>Send your message to us:</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Are you looking for what kind of collaboration:</label>
                            <input
                                type="text"
                                id="text"
                                name="text"
                                value={formData.collaborationType}
                                onChange={handleChange}
                                required
                            />


                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </section>
            <div className="hero-content">
                <div className="container py-5">
                    <div className="row">
                        {cardsData.map((card) => (
                            <div key={card.id} className="col-md-6 mb-4">
                                <div className="card h-100 border-0 shadow-sm transition-transform" style={{ transition: 'transform 0.3s' }}>
                                    <img
                                        src={card.imageUrl}
                                        className="card-img-top why-images"
                                        alt={card.title}
                                    />
                                    <div className="card-body">
                                        <h4 className="card-title fw-bold">{card.title}</h4>
                                        <p className="card-text">{card.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Career;

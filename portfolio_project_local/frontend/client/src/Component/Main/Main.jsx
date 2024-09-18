import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import email from '../../Assests/email.png';
import linkedin from '../../Assests/linkedin.png';
import aboutimage from '../../Assests/images (3).jpeg';
import twitter from '../../Assests/x.png';
import videobg from '../../Assests/videobg.mp4';
import teamMember1 from '../../Assests/images (3).jpeg'; // Replace with your actual image path
import teamMember2 from '../../Assests/images (3).jpeg'; // Replace with your actual image path
import teamMember3 from '../../Assests/images (3).jpeg'; // Replace with your actual image path
import teamMember4 from '../../Assests/images (3).jpeg'; // Replace with your actual image path

function Main() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <video src={videobg} autoPlay loop muted className="video-bg" />
        <div className="hero">
          <Link to="/login">
            <button className="btn-hero">Get Started</button>
          </Link>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about">
          <h1 className="heading text-uppercase">About Us</h1>
          <span className="text-black-50">Statify is a Morocco statistics online</span>
          <div className="about-content">
            <div className="about-image">
              <img src={aboutimage} alt="about-image" />
            </div>
            <div className="about-info">
              <p>Statify is a groundbreaking platform designed to transform the way Morocco conducts its national census. Our mission is to streamline the data collection process by empowering citizens to participate directly. We believe that by modernizing this vital task, we can improve the accuracy, efficiency, and cost-effectiveness of large-scale statistical reporting. At Statify, we’re committed to innovation that benefits both the government and the people. Our platform enables individuals to easily input their own information, eliminating the need for traditional data collectors and saving valuable time and resources. Join us in building a smarter, more connected Morocco, where every voice matters, and every data point contributes to a brighter future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS SECTION */}
      <section className="team-section" id="team">
        <h1 className="title text-uppercase">Our Team</h1>
        
        <Carousel interval={1000000} pause={false} controls={true}>
          <Carousel.Item>
            <img
              className="d-block"
              src={teamMember1}
              alt="First team member"
            />
            <Carousel.Caption>
              <h3>Mounim Nadir</h3>
              <p>Position and brief description of team member.</p>
              
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={teamMember2}
              alt="Second team member"
            />
            <Carousel.Caption>
              <h3>Abdelaaziz Khouda</h3>
              <p>Position and brief description of team member.</p>
              
           </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={teamMember3}
              alt="Third team member"
            />
            <Carousel.Caption>
              <h3>Mohamed El Bouhmi</h3>
              <p>Position and brief description of team member.</p>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={teamMember4}
              alt="Fourth team member"
            />
            <Carousel.Caption>
              <h3>Hamid Bouayadi</h3>
              <p>Position and brief description of team member.</p>
             
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact">
          <h1 className="title text-uppercase">Contact Us</h1>
          <p className="text-black-50">Get in Touch</p>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <img
                src={email}
                alt="Email icon"
                className="icon contact-icon email-icon"
              />
              <p><a href="mailto:Bouayadihamid@gmail.com">Gmail</a></p>
            </div>
            <div className="contact-info-container">
              <img
                src={linkedin}
                alt="LinkedIn icon"
                className="icon contact-icon"
              />
              <p><a href="https://www.linkedin.com/in/mounim-nadir-b6575b27a">LinkedIn</a></p>
            </div>
            <div className="contact-info-container">
              <img
                src={twitter}
                alt="Twitter icon"
                className="icon contact-icon"
              />
              <p><a href="https://twitter.com/AbdelKhouda">X-Twitter</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* contact us form */}
      <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">We'd love to hear from you.</h3>
                    </div>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN" className="contact-form">
                        <div className="row align-items-stretch">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                    <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea">
                                    <textarea className="form-control" id="message" placeholder="Your Message *" data-sb-validations="required"></textarea>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
    </>
  );
}

export default Main;

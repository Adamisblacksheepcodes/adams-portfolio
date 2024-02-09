import './contact.css';
import reduxlogo from '../../assets/reduxlogo.png';
import reactlogo2 from '../../assets/reactlogo2.png';
import jslogo from '../../assets/jslogo.png';
import tailwindlogo from '../../assets/tailwindlogo.png';
import githublogo from '../../assets/githublogo.png';
import linkedinlogo from '../../assets/linkedinlogo.png';
import twitter from '../../assets/twitter.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    // this block of code Validates the required fields
    const name = form.current.querySelector('.name').value.trim();
    const email = form.current.querySelector('.email').value.trim();
    const message = form.current.querySelector('.msg').value.trim();
      
    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

      // this code checks if the email field contains '@'
      if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

        emailjs.sendForm('service_82jdj99', 'template_ogqjxkk', form.current, 'zdmmx6kRVlP39mvM4')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">Tech Stack</h1>
                <span className="clientDesc">
                Explore my dynamic skill set through a variety of technologies I've mastered. From essential tools 
                to cutting-edge frameworks, my Tech Stack showcases adaptability and proficiency in crafting innovative 
                solutions for diverse projects                    
                </span>
                <div className="clientImgs">
                    <img src={reactlogo2} alt="Client" className="clientImg" />
                    <img src={reduxlogo} alt="Client" className="clientImg" />
                    <img src={jslogo} alt="Client" className="clientImg" />
                    <img src={tailwindlogo} alt="Client" className="clientImg" />                   
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Kindly complete the form below to discuss potential job opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows="5" className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="https://github.com/Adamisblacksheepcodes" target="_blank" rel="noopener noreferrer">
                            <img src={githublogo} alt="github" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/owolabioshoala/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinlogo} alt="LinkedIn" className="link" />
                        </a>
                        <a href="https://twitter.com/adams_creatives" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter" className="link" />
                        </a>  
                        <a href="https://www.instagram.com/blacksheep_code/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1n7y69k', 'template_0esl70z', form.current, 'unaG9G4Pa2PWkZWkz')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
          e.target.reset();
      }, (error) => {
          console.log('Email failed to send:', error.text);
          alert('Failed to send message. Please try again.');
      });
  }

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>anushkasinghofficial2646@gmail.com</h5>
            <a href="mailto:anushkasinghofficial2646@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>

         <input type="text" name="name" placeholder="Your Full Name" required />  {/* client side validation */}
         <input type="email" name='email' placeholder='Your Email' required /> 
         <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
         <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>    
    </section>
  )
}

export default Contacts
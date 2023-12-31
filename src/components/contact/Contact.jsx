import React from 'react'
import './contact.css'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
import {AiOutlineMail,AiFillInstagram,AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xyr51yv', 'template_2jfslni', form.current, 'uEU1cHGXIaT42ebJD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container" >
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sreekarparuchuru06@gmail.com</h5>
            <a href="mailto:sreekarparuchuru06@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>
              what's App
            </h4>
            <h5>+91 7382523464</h5>
            <a href="https://wa.me/+91 7382523464" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>sreekar0607</h5>
            <a href="https://www.instagram.com/sreekar0607/" target='_blank'>Tag me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
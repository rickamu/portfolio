import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { EarthCanvas } from "../components/canvas";
import '../styles/Contact.css';

import { slideIn } from "../utils/motion"
// template_ws40n7m
// service_nisba3v
// hVcG6077mYjBtN6-f

const Contact = () => {
  const formRef = useRef()
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_nisba3v',
      'template_ws40n7m',
      {
        from_name: form.name,
        to_name: 'Richard',
        from_email: form.email,
        to_email: 'muchirichard14@gmail.com',
        message: form.message
      },
      'hVcG6077mYjBtN6-f'
    ).then(() => {
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible')
    
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }).catch(error => {
      setLoading(false);

      console.error(error);

      alert('Somthing went wrong.');
    });

  }

  return (
    <div className="contact">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="form_cont"
      >
        <p className="text-secondary">Get in touch</p>
        <h3 className="text-primary">Contact.</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="form"
          >
          <label className="name">
            <span className="lblname">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="inputname"
            />
          </label>
          <label className="email">
            <span className="lblemail">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="inputemail"
            />
          </label>
          <label className="message">
            <span className="lblmessage">Your Message</span>
            <textarea 
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="inputmessage"
            />
          </label>
          <button 
            type="submit"
            className="send"
          >
            {loading ? "Sending" : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", 'tween', 0.2, 1)}
        className="earth"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default Contact
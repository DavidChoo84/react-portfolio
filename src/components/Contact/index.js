import Loader from "react-loaders";
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from '../../assets/images/contact.gif';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const form = useRef();

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const letterTimeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 5000);

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(letterTimeout);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(
      'service_j05ovvp',         // Your Service ID
      'template_fuk3bbs',        // Your Template ID
      form.current,
      'CNgOZoTVbyoO58c-T'        // Your Public Key
    )
    .then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        toast.success('Message sent successfully! ✅');
        setSending(false);
        e.target.reset();
      },
      (error) => {
        console.log('Failed to send email.', error.text);
        toast.error('Oops! Failed to send. Try again ❌');
        setSending(false);
      }
    );
  };

  if (loading) {
    return <Loader type="pacman" />;
  }

  return (
    <>
      <div className="container contact-page">
        <div className="left-zone">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={1}
              />
            </h1>
            <p>Ideas? Questions? Just Say Hi.</p>
            <p>Whether it’s code talk or coffee chat, I’d love to hear from you.</p>

            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input type="text" name="user_name" placeholder="Name" required />
                  </li>
                  <li className="half">
                    <input type="email" name="user_email" placeholder="Email" required />
                  </li>
                  <li>
                    <input type="text" name="subject" placeholder="Subject" required />
                  </li>
                  <li>
                    <textarea name="message" placeholder="Message" required></textarea>
                  </li>
                  <li>
                    <button type="submit" className="flat-button" disabled={sending}>
                      {sending ? (
                        <>
                          <span className="spinner"></span> Sending...
                        </>
                      ) : (
                        "SEND"
                      )}
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <div className="right-zone">
          <div className="info-box">
            <div className="info-text">
              <h2>Contact Info</h2>
              <p><strong>Phone :</strong> +60174133574</p>
              <p><strong>Area :</strong> Petaling Jaya</p>
              <p><strong>Email :</strong> zhelim84@gmail.com</p>
            </div>
            <div className="info-image">
              <img src={contact} alt="Contact Visual" />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Contact;

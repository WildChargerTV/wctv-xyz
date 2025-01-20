// * src/components/Contact/Contact.jsx

// Node Module Imports
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Local Module Imports
import './Contact.css';
import './Contact-m.css';

export default function Contact() {
    // React Hooks
    const navigate = useNavigate();
    const formRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('privateemail_info', 'contact_form', formRef.current, {
            publicKey: 'q6ePw5OFglADt8KoD'
        }).then(() => {
            alert('Email sent. You should receive a confirmation shortly.');
            navigate('/');
        }).catch((err) => {
            alert('An error has occurred. Your email may not have been sent.');
            console.error(err);
        });
    }
    return (<main id='site-contact'>
        <h1>Contact</h1>
        <p>
            At present, the best way to get in touch with me is to send an email 
            to <b>info@wildcharger.xyz</b>. You are welcome to either send an email directly, or
            use the below contact form to send a ticketed request.
        </p>
        <form id='site-contact-form' ref={formRef} onSubmit={onSubmit}>
            <div id='contact-form-user'>
                <input type='text' name='user_name' placeholder='Name or Username' />
                <input type='email' name='user_email' placeholder='Email Address' />
            </div>
            <div id='contact-form-msg'>
                <textarea name='message' placeholder='Your message here...' />
            </div>
            <div id='contact-form-submit'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </main>);
}
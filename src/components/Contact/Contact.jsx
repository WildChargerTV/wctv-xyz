// * src/components/Contact/Contact.jsx

// Node Module Imports
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// Local Module Imports
import './Contact.css';
import './Contact-m.css';

/**
 * Renders the site's contact page.
 * @returns {ReactElement}
 */
export default function Contact() {
    // React Hooks
    const navigate = useNavigate();
    const formRef = useRef();

    /** On form submission, send an email to the general inquiries box. */
    const onSubmit = (event) => {
        // Prevent a redirect or refresh.
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
    };

    /** Return the page content. */
    return (<main id='site-contact'>
        {/* Page Title */}
        <h1>Contact</h1>

        {/* Page Description */}
        <p>
            At present, the best way to get in touch with me is to send an email 
            to <b>info@wildcharger.xyz</b>. You are welcome to either send an email directly, or
            use the below contact form to send a ticketed request.
            <br /><br />
            If you would like to get in touch with me via social media, my social links can be
            found in the website&apos;s footer at the bottom of the page.
        </p>

        {/* Site Contact Form */}
        <form id='site-contact-form' ref={formRef} onSubmit={onSubmit}>
            {/* Name/Username & Email Address */}
            <div id='contact-form-user'>
                <input type='text' name='user_name' placeholder='Name or Username' />
                <input type='email' name='user_email' placeholder='Email Address' />
            </div>
            {/* Message Box */}
            <div id='contact-form-msg'>
                <textarea name='message' placeholder='Your message here...' />
            </div>
            {/* Submit Button */}
            <div id='contact-form-submit'>
                <button type='submit'>Submit</button>
            </div>
        </form>
    </main>);
}
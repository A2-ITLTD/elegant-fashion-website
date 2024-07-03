import street from '../Images/street.jpg';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_vmgx6vh', 'template_eyckv8h', form.current, {
            publicKey: 'faA8fkwyy5d-F62S3',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            toast.success("Your Message was sent");
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <div className="mt-24 px-5 md:px-14 lg:px-24 flex flex-col-reverse md:flex-row gap-16">
           <div className="w-full md:w-1/2 rounded-2xl h-auto">
                <img src={street} className='rounded-2xl h-full object-cover' />
           </div>
           <div className="w-full md:w-1/2 p-10 border-y-2 border-black rounded-2xl">
            <h1 className='text-4xl font-semibold'>Contact Us</h1>
            <p className='text-base font-medium opacity-70 py-4'>Kindly fill the form and our team will get in touch with you shortly.</p>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full gap-7' >
                <input type="text" name="user_name" placeholder='Name' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black' />
                <input type="number" name="user_phone"  placeholder='Phone Number' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black' />
                <input type="email" name="user_email" placeholder='Email' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black' />
                <textarea type="text" name="message" placeholder='Write Your Message' className='py-2 px-5 border-2 border-black rounded-md text-lg text-black textarea textarea-bordered textarea-2xl w-full'></textarea>
                <button type="submit" value="Send" className='bg-black text-white font-semibold p-5 rounded-lg hover:bg-slate-700' >Send</button>
            </form>
           </div>
        </div>
    );
};

export default Contact;
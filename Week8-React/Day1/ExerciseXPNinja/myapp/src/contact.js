import React from 'react';
import './contact.css'

export function Contact() {
    return (
        <>
        <h1>Contact Us</h1>
        <div class='contact'>
          <div class="left">
              <p>Contact us and we will get back within 24 hours</p>
              <p>Company Name</p>
              <p>2564-9875</p>
              <p>company@gmail.com</p>
          </div>
          <div class="right">
            <p>Contact</p>
            <form>
              <input type="text" placeholder='email'/>
              <textarea rows='5' columns='15' placeholder="content"/>
              <input type="submit" value="send"/>
            </form>
          </div>
        </div>
        </>
    )
}
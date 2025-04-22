import React from 'react'
import { Button } from './Buttons'

export const Contact = () => {
  return (
    <section className="contact-section">
      <h2>Catch me if you can</h2>
      <img 
        src="/assets/IMG_3883_Original 2 2.jpg" 
        alt="Caspian Almerud" 
        className="profile-image" 
      />
      <h3>Caspian Almerud</h3>
      <p>+46(0)760 48 81 83</p>
      <p>caspian@houseofcaspian.com</p>
      <div className="social-links">
        <Button 
          variant="social" 
          label="LinkedIn" 
          link="https://linkedin.com" 
        />
        <Button 
          variant="social" 
          label="GitHub" 
          link="https://github.com" 
        />
        <Button 
          variant="social" 
          label="Twitter" 
          link="https://twitter.com" 
        />
      </div>
    </section>
  )
} 
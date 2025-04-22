import React from 'react'
import './componentsStyling/Hero.css'

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello there, I'm</h1>
        <h2>Caspian</h2>
        <h3>Professional Generalist with Coding Capabilities</h3>
        <p>
          I'm a pragmatic developer known for my broad experience in working across different
          industries. Be it with code, other tech or my interpersonal skills, I enjoy solving problems
          and driving progress in businesses.
        </p>
      </div>
      <div className="hero-images">
        <div className="image-card">
          <img src="/assets/Desk Setup Image.jpg" alt="Desk setup with MacBook" />
        </div>
        <div className="image-card">
          <img src="/assets/IMG_3883_Original 2 2.jpg" alt="Portrait photo" />
        </div>
        <div className="image-card">
          <img src="/assets/Filip Kvasnak Unsplash.jpg" alt="Mountain landscape" />
        </div>
      </div>
    </section>
  )
} 
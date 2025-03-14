<!-- components/HeroSection.vue -->
<template>
    <section class="hero-wrapper">
      <!-- Video Background -->
      <div class="video-background">
        <video autoplay loop muted playsinline>
          <source src="../assets/video.mp4" type="video/mp4">
        </video>
        <div class="overlay"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="hero-container">
        <div class="hero-content">
          <h2>Welcome to Talento</h2>
          <p>We are a diverse group of HR professionals that provide service and  support to your organization’s Talent Management needs. We aim to be  present at any of the stages or in the full cycle of your integrated  Talent Management process.
            As enablers, we commit ourselves to a more pragmatist and personalized approach in working together with partners and clients.</p>
            <router-link to="/contact" class="cta-button">Get Started</router-link>
          </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero-wrapper {
    width: 100vw;
    height: calc(100vh - 86.6px);
    position: relative;
    overflow: hidden;
  }
  
  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .video-background video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); /* Dark overlay for better text readability */
  }
  
  .hero-container {
    max-width: 1240px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    display: flex;
    align-items: center;
  }
  
  .hero-content {
    color: white;
    max-width: 600px;
    z-index: 2;
    margin-left: 4rem;
  }
  
  .hero-content h2 {
    font-family: var(--secondary-font);
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-align: left;
  }
  
  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    text-align: left;

  }
  
  .cta-button {
    background-color: var(--primary-color);;
    color: white;
    border: none;
    padding: 1rem 1.4rem .8rem 1.4rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .cta-button:hover {
    background: var(--button-hover-color);
  }
  
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }
  
    .hero-content p {
      font-size: 1rem;
    }
    .hero-content {
      margin-left: 0.2rem;
    }
  
    .hero-container {
      padding: 0 1rem;
    }
  }
  </style>
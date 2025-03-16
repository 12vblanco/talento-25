<template>
  <footer class="footer-wrapper">
    <div class="footer-container">
      <!-- Top row with 3 columns -->
      <div class="footer-top">
        <!-- Social Media Column -->
        <div class="footer-column">
          <div class="social-links">
            <a href="#" class="social-link" @click="scrollToTop"><i class="fab fa-linkedin"></i></a>
            <a href="#" class="social-link" @click="scrollToTop"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-link" @click="scrollToTop"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <!-- Navigation Column -->
        <div class="footer-column">
          <div class="footer-nav">
            <router-link to="/" @click.native="scrollToTop">Home</router-link>
            <a href="#services" @click.prevent="navigateToServices">Services</a>
            <router-link to="/events" @click.native="closeMenu">Events</router-link>
            <!-- <router-link to="/articles" @click.native="scrollToTop">Articles</router-link> -->
            <router-link to="/contact" @click.native="scrollToTop">Contact Us</router-link>
          </div>
        </div>

        <!-- Logo and Contact Column -->
        <div class="footer-column">
          <div class="footer-logo">
            <h2>Talento</h2>
            <p>Bespoke Talent Support</p>
          </div>
          <div class="footer-logo-imgs">
            <img src="../assets/logo-circ-blk.png" alt="Talento's logo" class="logo1">
            <img src="../assets/t-circ-blk.png" alt="Talento's logo" class="logo2">
          </div>
        </div>
      </div>

      <!-- Bottom row -->
      <div class="footer-bottom">
        <p>Website <a href="" target="_blank" class="vb">Victor Blanco</a> © {{ new Date().getFullYear() }} Talento. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { nextTick } from 'vue';

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    navigateToServices() {
      if (this.$route.path !== '/') {
        this.$router.push('/').then(() => {
          nextTick(() => {
            this.scrollToSection('services-header');
          });
        });
      } else {
        this.scrollToSection('services-header');
      }
    },
   
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = window.innerWidth < 781 ? 40 : 84;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = section.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped>
.footer-wrapper {
  width: 100vw;
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.footer-container {
  max-width: 1340px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
  background-color: var(--secondary-color);
  border-radius: 12px;
  clip-path: polygon(50% 6%, 100% 0%, 100% 100%, 0 100%, 0 0);
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.footer-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  color: var(--text-color);
}

.footer-column h3 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
}

.social-links, .footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link, .footer-nav a {
  text-decoration: none;
  font-size: 1rem;
  transition: opacity 0.3s ease;
  color: var(--text-color);
}

.social-link:hover, .footer-nav a:hover {
  opacity: 0.8;
}

.footer-logo h2 {
  font-family: var(--secondary-font);
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: -.8rem;
}

.fab {
  font-size: 36px;
}

.contact-info {
  margin-top: .6rem;
}

.contact-info p {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.footer-bottom {
  border-top: 1px solid var(--secondary-color);
  padding-top: 1rem;
  text-align: center;
  font-size: 0.9rem;
  padding-bottom: 1rem;
}

.logo1 {
  max-width: 100px;
  margin-right: 1.4rem;
}
.logo2 {
  max-width: 46px;
  margin-bottom: 2px;
}

@media (max-width: 768px) {
  .footer-wrapper, .footer-container {
    margin: 2rem 0 0 0;
  }

  .footer-top {
    flex-direction: column;
    text-align: center;
  }

  .footer-column {
    align-items: center;
    margin: 1rem;
  }
  .footer-column a {
    font-size: 18px;
  }

  .social-links, .footer-nav {
    align-items: center;
  }

  .contact-info {
    text-align: center;
  }
}

.vb {
  margin: 0;
  color: var(--text-color);
}
</style>
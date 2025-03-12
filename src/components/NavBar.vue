<template>
  <nav class="nav-wrapper">
    <div class="nav-container">
      <router-link to="/" class="logo-section" @click.native="closeMenu">
        <h1 class="logo">Talento</h1>
        <p class="subheader">Bespoke Talent Support</p>
      </router-link>
      <div class="nav-links" :class="{ 'open': isMenuOpen }">
        <router-link to="/" @click.native="closeMenu">Home</router-link>
        <a href="#services" @click.prevent="navigateToServices">Services</a>
        <router-link to="/events" @click.native="closeMenu">Events</router-link>
        <!-- <router-link to="/articles" @click.native="closeMenu">Articles</router-link> -->
        <router-link to="/contact" class="contact-btn" @click.native="closeMenu">Contact Us</router-link>
      </div>
      
      <!-- Integrated BurgerMenu -->
      <div class="burger-menu" @click="toggleMenu">
        <div :class="{ 'burger-icon': true, 'open': isMenuOpen }"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import { nextTick } from 'vue';

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  // Add watchers to properly handle body scroll locking
  watch: {
    isMenuOpen(newValue) {
      if (newValue) {
        // Menu is open, prevent scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      } else {
        // Menu is closed, allow scrolling
        document.body.style.overflow = '';
        document.body.style.height = '';
      }
    }
  },
  methods: {
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
      this.closeMenu();
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
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  },
  // Make sure to clean up when component is destroyed
  beforeDestroy() {
    // Ensure scroll is enabled when component is destroyed
    document.body.style.overflow = '';
    document.body.style.height = '';
  }
};
</script>

<style scoped>
.nav-wrapper {
  width: 100vw;
  color: white;
  padding: .8rem 0 .6rem 0; 
  color: var(--text-color);
}

.nav-container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; 
}

.logo-section {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.logo-section:hover {
  color: black !important;
}

.logo {
  font-family: var(--secondary-font);
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: -.6rem;
}

.subheader {
  font-size: 0.875rem;
  margin: 0;
}

.nav-links {
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  transition: max-height 0.3s ease, opacity 0.3s ease;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
}

.nav-links a {
  text-decoration: none;
  font-weight: 600;
  color: var(--text-color);
}

.nav-links a:hover {
  color: var(--button-hover-color);
}

.contact-btn {
  background-color: var(--primary-color);
  color: white !important;
  padding: .5rem .8rem .4rem .8rem;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.contact-btn:hover {
  background: var(--button-hover-color);
  color: white !important;
}

/* Burger Menu Styles */
.burger-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.burger-icon {
  width: 30px;
  height: 5px;
  margin-left: 5px;
  background-color: var(--text-color);
  position: relative;
  transition: all 0.3s ease;
}

.burger-icon::before,
.burger-icon::after {
  content: '';
  width: 31px;
  height: 5px;
  background-color: var(--text-color);
  position: absolute;
  transition: all 0.3s ease;
  margin-left: -15px;
}

.burger-icon::before {
  top: -10px;
}

.burger-icon::after {
  top: 10px;
}

.burger-icon.open {
  background-color: transparent;
}

.burger-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.burger-icon.open::after {
  transform: rotate(-45deg);
  top: 0;
}

@media (max-width: 780px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: var(--background-color);
    width: 100%;
    padding: 1rem;
    gap: 1rem;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
  }

  .nav-links.open {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    height: 100%;
    padding-bottom: 200px;
    font-size: 24px;
    margin-top: 12px;
    max-height: 100vh;
    opacity: 1;
  }

  .burger-menu {
    display: flex;
  }
}

@media (min-width: 781px) {
  .burger-menu {
    display: none;
  }

  .nav-links {
    display: flex !important;
    max-height: none;
    opacity: 1;
  }
}
</style>
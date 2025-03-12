<template>
  <section id="services" class="services-wrapper">
    <div class="services-container">
      <div id="services-header" class="services-header">
        <h2>Talento Services</h2>
        <p>We spend time understanding your goals, priorities, and anticipated changes that will affect the talent plans and structures of your organization. We are your talent design and implementing partners.</p>
      </div>

      <!-- Cards -->
      <div class="services-cards">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="service-card"
          :style="{ backgroundColor: card.color }"
        >
          <a :href="card.cardLink">
            <div class="card-content">
              <img :src="card.img" alt="Card image" class="card-img" />
             <div class="card-text_container"> <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
              <div class="card-link">Contact Us</div></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { cardData } from "../assets/card-data";

export default {
  data() {
    return {
      cards: cardData,
    };
  },
};
</script>

<style scoped>
.services-wrapper {
  width: 100%;
  padding: 8rem 0 4rem 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.services-container {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  background-image: url('../assets/services-bg.png'); 
  background-position: right top;
  background-size: auto; 
  background-repeat: no-repeat;
}
.services-header {
  text-align: center;
  margin-bottom: 3rem;
}

.services-header h2 {
  font-family: var(--secondary-font);
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.services-header p {
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.services-cards {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.service-card {
  width: 336px;
  height: 480px;
  border-radius: 12px;
  text-align: center;
  color: var(--text-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.service-card:hover {
  transform: translateY(-10px);
  transform: scale(1.03);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  text-align: left;
  width: 100%;
  height: 100%;
}

.card-img {
  border-radius: 12px 12px 0 0;
  width: 100%;
  height: auto;
}

.card-text_container{
  height: 100%;
  padding: 1rem 1.5rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.service-card h3 {
  font-family: var(--secondary-font);
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: -1.2px;
}

.service-card p {
  font-size: 1.0625rem;
  font-weight: 500;
  text-align: left;
  line-height: 1.6;
}

.card-link {
  text-decoration: underline;
  margin: 0;
  position: relative;
  bottom: 0;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.6;
}

a:hover {
  color: black;
  cursor: pointer;
}

@media (max-width: 768px) {
  .services-header h2 {
    font-size: 2rem;
  }

  .services-header p {
    font-size: 1rem;
  }

  .services-cards {
    /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
    padding: 1rem;
  }

  .services-wrapper {
    padding: 2.6rem 0 .6rem 0;
    max-width: 100vw;
  }

  .services-container{
    padding: 0;
  }
}
</style>
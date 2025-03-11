<template>
  <div>
    <hero-section />
    <ServicesSection ref="servicesSection" />
  </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import ServicesSection from '../components/ServicesSection.vue';

export default {
  name: 'Home',
  components: {
    HeroSection,
    ServicesSection
  }
}
</script>

<style scoped>
</style>
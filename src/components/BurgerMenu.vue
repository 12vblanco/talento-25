<template>
  <div class="burger-menu" @click="toggleMenu">
    <div :class="{ 'burger-icon': true, 'open': isOpen }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.$emit('toggle-menu', this.isOpen);
    },
  },
};
</script>
  
  <style scoped>
  .burger-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px; /* Increase the clickable area */
    height: 50px; /* Increase the clickable area */
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
  
  /* .burger-icon.open:hover::before {
    transform: rotate(60deg);
  }

  .burger-icon.open:hover::after{
    transform: rotate(90deg);

  } */

  </style>
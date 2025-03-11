<template>
    <div class="success-container">
      <div class="success-content">
        <h2 class="success-title">Hi TalentO Partner,</h2>
        <p class="success-text">
          We have received your form and are thrilled to see that you have shown
          interest in Talento. We will get back to you in no time <br />
          Wishing you an amazing day ahead!
          <br />
          Talento Team
        </p>
        <router-link to="/home">
          <CTAButton>To Home</CTAButton>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import CTAButton from '../../misc/CTAButton.vue';
  
  export default {
    name: 'Success',
    components: {
      CTAButton
    }
  }
  </script>
  
  <style scoped>
  .success-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80vh;
    padding-top: 40px;
  }
  
  .success-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #333;
    padding: 0 10%;
    line-height: 1.5;
    width: 100vw;
    height: 80vh;
  }
  
  .success-title {
    font-family: "Montserrat";
    margin-bottom: 14px;
    color: #333;
  }
  
  .success-text {
    font-family: "Montserrat";
    margin: 0 auto;
    margin-bottom: 44px;
    color: #333;
    max-width: 80%;
  }
  
  @media (max-width: 550px) {
    .success-container {
      padding: 5%;
    }
    
    .success-content {
      margin-top: 12%;
      padding: 5%;
    }
    
    .success-title {
      max-width: 90%;
      padding: 0 8px;
      margin-top: 144px;
      margin-bottom: 22px;
    }
    
    .success-text {
      margin-bottom: 42px;
      max-width: 90%;
    }
  }
  </style>
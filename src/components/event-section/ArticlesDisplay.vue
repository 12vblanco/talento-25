<!-- ArticlesDisplay.vue -->
<template>
    <div class="article-body">
      <div class="article-container">
        <h1 class="article-title">{{ articleTitle }}</h1>
        <div class="article-content">{{ articleContent }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      articleTitle: String,
      articleContent: String,
    },
  };
  </script>
  
  <style scoped>
  .article-body {
    position: relative;
    width: 60vw;
    height: 70vh;
    min-height: fit-content;
    background-image: url('../../assets/about1.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 50px;
    border-radius: 10px;
    color: #000;
  }
  
  .article-container {
    width: 78%;
    min-height: 80%;
    height: fit-content;
    background: var(--tertiary-color);
    opacity: 0.85;
    border-radius: 6px;
    padding: 1rem 1.6rem;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .article-title,
  .article-content {
    position: relative;
    z-index: 3;
  }
  
  .article-title {
    text-transform: capitalize;
    font-size: 32px;
    margin-bottom: 2rem;
  }
  
  .article-content {
    line-height: 1.6;
    text-align: left;
    white-space: pre-line;
  }
  
  @media (max-width: 899px) {
    .article-body {
      width: 96vw;
      margin: 0 auto;
    }
    
    .article-title {
      font-size: 28px;
    }
  }
  </style>
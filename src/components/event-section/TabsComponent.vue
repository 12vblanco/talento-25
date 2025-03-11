<template>
    <div class="tabs-container">
      <!-- Tab Navigation -->
      <div class="tabs">
        <button
          :class="['tab-button', { active: activeTab === 'admin' }]"
          @click="activeTab = 'admin'"
        >
          Admin Form
        </button>
        <button
          :class="['tab-button', { active: activeTab === 'articles' }]"
          @click="activeTab = 'articles'"
        >
          Articles Form
        </button>
      </div>
  
      <!-- Tab Content -->
      <div class="tab-content">
        <AdminForm
          v-if="activeTab === 'admin'"
          :series="series"
          :title="title"
          :date="date"
          :link="link"
          @update-series="$emit('update-series', $event)"
          @update-title="$emit('update-title', $event)"
          @update-date="$emit('update-date', $event)"
          @update-link="$emit('update-link', $event)"
          @logout="$emit('logout')"
        />
        <ArticlesForm
          v-if="activeTab === 'articles'"
          :articleTitle="articleTitle"
          :articleContent="articleContent"
          @update-article-title="$emit('update-article-title', $event)"
          @update-article-content="$emit('update-article-content', $event)"
        />
      </div>
    </div>
  </template>
  
  <script>
  import AdminForm from "./AdminForm.vue";
  import ArticlesForm from "./ArticlesForm.vue";
  
  export default {
    components: {
      AdminForm,
      ArticlesForm,
    },
    props: {
      series: String,
      title: String,
      date: String,
      link: String,
      articleTitle: String,
      articleContent: String,
    },
    data() {
      return {
        activeTab: "admin", // Default active tab
      };
    },
  };
  </script>
  
  <style scoped>
  .tabs-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .tab-button {
    padding: 10px 20px;
    background: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    transition: background 0.3s ease;
  }
  
  .tab-button.active {
    background: #007bff;
    color: white;
  }
  
  .tab-content {
    width: 100%;
  }
  </style>
<template>
  <div class="event-section">
    <!-- Tabs Navigation -->
    <div class="tabs-nav">
      <button 
        :class="['tab-button', { active: activeTab === 'events' }]" 
        @click="activeTab = 'events'"
      >
        Events
      </button>
      <button 
        :class="['tab-button', { active: activeTab === 'articles' }]" 
        @click="activeTab = 'articles'"
      >
        Articles
      </button>
    </div>

    <!-- Events Tab Content -->
    <div v-if="activeTab === 'events'" class="tab-content">
      <EventForm :series="series" :title="title" :date="date" :link="link" />
      <AdminLogin
        :series="series"
        :title="title"
        :date="date"
        :link="link"
        @update-series="setSeries"
        @update-title="setTitle"
        @update-date="setDate"
        @update-link="setLink"
        @logout="handleLogout"
      />
    </div>

    <!-- Articles Tab Content -->
    <div v-if="activeTab === 'articles'" class="tab-content">
      <ArticlesDisplay :articleTitle="articleTitle" :articleContent="articleContent" />
      <AdminLogin
        :articleTitle="articleTitle"
        :articleContent="articleContent"
        @update-article-title="setArticleTitle"
        @update-article-content="setArticleContent"
        @logout="handleLogout"
      />
    </div>
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";
import AdminLogin from "./AdminLogin.vue";
import ArticlesDisplay from "./ArticlesDisplay.vue";
import EventForm from "./EventForm.vue";
import { db } from "./firebase";

export default {
  components: {
    EventForm,
    AdminLogin,
    ArticlesDisplay,
  },
  setup() {
    // Event data
    const series = ref("");
    const title = ref("");
    const date = ref("");
    const link = ref("");
    
    // Article data
    const articleTitle = ref("");
    const articleContent = ref("");
    
    // Tab state
    const activeTab = ref("events");

    const fetchEventData = async () => {
      const eventDoc = doc(db, "events", "fixedEventId");
      const docSnap = await getDoc(eventDoc);
      if (docSnap.exists()) {
        series.value = docSnap.data().series;
        title.value = docSnap.data().title;
        date.value = docSnap.data().date;
        link.value = docSnap.data().link;
      } else {
        console.log("No event document found!");
      }
    };

    const fetchArticleData = async () => {
      const articleDoc = doc(db, "articles", "fixedArticleId");
      const docSnap = await getDoc(articleDoc);
      if (docSnap.exists()) {
        articleTitle.value = docSnap.data().articleTitle;
        articleContent.value = docSnap.data().articleContent;
      } else {
        console.log("No article document found!");
      }
    };

    onMounted(() => {
      fetchEventData();
      fetchArticleData();
    });

    // Event updaters
    const setSeries = (value) => (series.value = value);
    const setTitle = (value) => (title.value = value);
    const setDate = (value) => (date.value = value);
    const setLink = (value) => (link.value = value);
    
    // Article updaters
    const setArticleTitle = (value) => (articleTitle.value = value);
    const setArticleContent = (value) => (articleContent.value = value);

    const handleLogout = () => {
      console.log("Admin logged out");
    };

    return {
      // Event data
      series,
      title,
      date,
      link,
      setSeries,
      setTitle,
      setDate,
      setLink,
      
      // Article data
      articleTitle,
      articleContent,
      setArticleTitle,
      setArticleContent,
      
      // Tab state
      activeTab,
      
      handleLogout,
    };
  },
};
</script>

<style scoped>


.tabs-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 80%;
}

.tab-button {
  padding: 10px 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-weight: bold;
  margin: 0 5px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.tab-button.active {
  background-color: var(--primary-color);
  color: white;
}

.tab-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (max-width: 899px) {
  .event-section {
    width: 96vw;
    margin: 0 auto;
  }
}
</style>
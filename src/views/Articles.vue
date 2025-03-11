<!-- ArticlesSection.vue -->
<template>
    <div class="articles-section">
      <!-- Articles Display -->
      <ArticlesDisplay :articleTitle="articleTitle" :articleContent="articleContent" />
      
      <!-- Admin Login and Form -->
      <AdminLoginArticles
        :articleTitle="articleTitle"
        :articleContent="articleContent"
        @update-article-title="setArticleTitle"
        @update-article-content="setArticleContent"
        @logout="handleLogout"
      />
    </div>
  </template>
  
  <script>
  import { doc, getDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";
import AdminLoginArticles from "../components/event-section/AdminLoginArticles.vue";
import ArticlesDisplay from "../components/event-section/ArticlesDisplay.vue";
import { db } from "../components/event-section/firebase";
  
  export default {
    components: {
      ArticlesDisplay,
      AdminLoginArticles,
    },
    setup() {
      const articleTitle = ref("");
      const articleContent = ref("");
  
      const fetchArticleData = async () => {
        const articleDoc = doc(db, "articles", "fixedArticleId");
        const docSnap = await getDoc(articleDoc);
        if (docSnap.exists()) {
          articleTitle.value = docSnap.data().articleTitle;
          articleContent.value = docSnap.data().articleContent;
        } else {
          console.log("No such document!");
        }
      };
  
      onMounted(() => {
        fetchArticleData();
      });
  
      const setArticleTitle = (value) => (articleTitle.value = value);
      const setArticleContent = (value) => (articleContent.value = value);
  
      const handleLogout = () => {
        console.log("Admin logged out");
      };
  
      return {
        articleTitle,
        articleContent,
        setArticleTitle,
        setArticleContent,
        handleLogout,
      };
    },
  };
  </script>
  
  <style scoped>
  .articles-section {
    position: relative;
    width: 60vw;
    height: fit-content;
    background-image: url("../assets/img/about1.jpg");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 50px;
    border-radius: 10px;
    color: #000;
  }
  
  @media (max-width: 899px) {
    .articles-section {
      width: 96vw;
      margin: 0 auto;
    }
  }
  </style>
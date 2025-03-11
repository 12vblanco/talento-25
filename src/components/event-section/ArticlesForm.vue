<!-- ArticlesForm.vue -->
<template>
    <form @submit.prevent="handleSubmit" class="articles-form">
      <p>Admin, You Are Logged In!</p>
      <label>Article Title</label>
      <input
        type="text"
        v-model="localArticleTitle"
        placeholder="Article Title"
        class="form-input"
      />
      <label>Article Content</label>
      <textarea
        v-model="localArticleContent"
        placeholder="Article Content"
        class="form-input"
        rows="6"
      ></textarea>
      <button type="submit" class="form-button">Update Article</button>
    </form>
  </template>
  
  <script>
  import { doc, setDoc } from "firebase/firestore";
  import { ref } from "vue";
  import { db } from "./firebase";
  
  export default {
    props: {
      articleTitle: String,
      articleContent: String,
    },
    emits: ["update-article-title", "update-article-content"],
    setup(props, { emit }) {
      const localArticleTitle = ref(props.articleTitle || "");
      const localArticleContent = ref(props.articleContent || "");
  
      const handleSubmit = async () => {
        if (!localArticleTitle.value || !localArticleContent.value) {
          console.error("Title and content are required.");
          return;
        }
        
        try {
          const articleDoc = doc(db, "articles", "fixedArticleId");
          await setDoc(
            articleDoc,
            {
              articleTitle: localArticleTitle.value,
              articleContent: localArticleContent.value,
            },
            { merge: true }
          );
          
          console.log("Article updated successfully");
          emit("update-article-title", localArticleTitle.value);
          emit("update-article-content", localArticleContent.value);
        } catch (error) {
          console.error("Error updating article:", error.message);
        }
      };
  
      return {
        localArticleTitle,
        localArticleContent,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  .articles-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: var(--secondary-color);
    padding: 1.4rem;
    border-radius: 12px;
  }
  
  .form-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    background: var(--secondary-color);
    color: black;
  }
  
  textarea.form-input {
    min-height: 150px;
    resize: vertical;
  }
  
  label {
    text-align: left;
    margin-bottom: -0.8rem;
    margin-top: 0.6rem;
  }
  
  .form-button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
<!-- AdminLoginArticles.vue -->
<template>
    <div class="admin-login">
      <div v-if="!isLoggedIn" class="login-container">
        <p class="login-text" @click="toggleLoginForm">Admin login</p>
        <form v-if="isLoginActive" @submit.prevent="handleLogin" class="login-form">
          <input
            type="email"
            placeholder="Email"
            v-model="email"
            class="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            v-model="password"
            class="login-input"
          />
          <button type="submit" class="login-button">Login</button>
        </form>
      </div>
      <div v-if="isLoggedIn" class="admin-form-container">
        <ArticlesForm
          :articleTitle="articleTitle"
          :articleContent="articleContent"
          @update-article-title="$emit('update-article-title', $event)"
          @update-article-content="$emit('update-article-content', $event)"
        />
        <p class="logout-text" @click="handleLogout">Log Out</p>
      </div>
    </div>
  </template>
  
  <script>
  import { signInWithEmailAndPassword, signOut } from "firebase/auth";
  import { ref } from "vue";
  import ArticlesForm from "./ArticlesForm.vue";
  import { auth } from "./firebase";
  
  export default {
    components: {
      ArticlesForm,
    },
    props: {
      articleTitle: String,
      articleContent: String,
    },
    emits: ["update-article-title", "update-article-content", "logout"],
    setup(props, { emit }) {
      const email = ref("");
      const password = ref("");
      const isLoginActive = ref(false);
      const isLoggedIn = ref(false);
      
      const toggleLoginForm = () => {
        isLoginActive.value = !isLoginActive.value;
      };
      
      const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          isLoggedIn.value = true;
          isLoginActive.value = false;
        } catch (error) {
          console.error("Error logging in:", error.message);
        }
      };
      
      const handleLogout = async () => {
        try {
          await signOut(auth); // Sign out from Firebase
          isLoggedIn.value = false; // Update logged-in state
          emit("logout"); // Emit logout event to parent
          console.log("Admin logged out successfully");
        } catch (error) {
          console.error("Error logging out:", error.message);
        }
      };
      
      return {
        email,
        password,
        isLoginActive,
        isLoggedIn,
        toggleLoginForm,
        handleLogin,
        handleLogout,
      };
    },
  };
  </script>
  
  <style scoped>
  .admin-login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .login-text {
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 1rem;
  }
  
  .login-form {
    display: flex;
    gap: 10px;
    margin-top: 10px;
  }
  
  .login-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: var(--secondary-color);
    color: black;
  }
  
  .login-button {
    padding: 10px 20px;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .admin-form-container {
    background: white;
    border-radius: 12px;
    padding: 22px;
    margin-top: 16px;
    opacity: 0.85;
  }
  
  .logout-text {
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    text-align: center;
    margin-top: 1rem;
  }
  </style>
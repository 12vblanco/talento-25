<template>
    <form @submit.prevent="handleSubmit" class="admin-form">
      <p>Admin, You Are Logged In!</p>
      <label>Series name</label>
      <input
        type="text"
        v-model="localSeries"
        placeholder="Series"
        class="form-input"
      />
      <label>Title</label>
      <input
        type="text"
        v-model="localTitle"
        placeholder="Title"
        class="form-input"
      />
      <label>Date</label>
      <input
        type="text"
        v-model="localDate"
        placeholder="Date"
        class="form-input"
      />
      <label>Link</label>
      <input
        type="text"
        v-model="localLink"
        placeholder="Link"
        class="form-input"
      />
      <button type="submit" class="form-button">Update</button>
    </form>
  </template>
  
  <script>
  import { doc, setDoc } from "firebase/firestore";
import { ref } from "vue";
import { db } from "./firebase";
  
  export default {
    props: {
      series: String,
      title: String,
      date: String,
      link: String,
    },
    
    emits: ["update-series", "update-title", "update-date", "update-link", "logout"],
    setup(props, { emit }) {
      const localSeries = ref(props.series);
      const localTitle = ref(props.title);
      const localDate = ref(props.date);
      const localLink = ref(props.link);
  
      const handleSubmit = async () => {
        if (!localSeries.value || !localTitle.value || !localDate.value) {
          console.error("One or more fields are empty.");
          return;
        }
        
  
        try {
          const eventDoc = doc(db, "events", "fixedEventId");
          await setDoc(
            eventDoc,
            {
              series: localSeries.value,
              title: localTitle.value,
              date: localDate.value,
              link: localLink.value,
            },
            { merge: true }
          );
          console.log("Document updated successfully");
  
          emit("update-series", localSeries.value);
          emit("update-title", localTitle.value);
          emit("update-date", localDate.value);
          emit("update-link", localLink.value);
        } catch (error) {
          console.error("Error updating document:", error.message);
        }
      };
  
      return {
        localSeries,
        localTitle,
        localDate,
        localLink,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  .admin-form {
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
    width: 300px;
    background: var(--secondary-color);
    color: black;
  }
  label{
    text-align: left;
    margin-bottom: -.8rem;
    margin-top: .6rem;
  }
  
  .form-button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 400px) {
  .form-input {
    max-width: 100%;
  }
}

  </style>
<template>
  <div class="event-section">
    <div v-if="loading" class="loading-container">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
    <div v-else>
      <!-- Event Section -->
      <EventForm :series="series" :title="title" :date="date" :link="link" />

      <!-- Admin Login and Form -->
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
  </div>
</template>

<script>
import { doc, getDoc } from "firebase/firestore";
import { onMounted, ref } from "vue";
import AdminLogin from "../components/event-section/AdminLogin.vue";
import EventForm from "../components/event-section/EventForm.vue";
import { db } from "../components/event-section/firebase";

export default {
  components: {
    EventForm,
    AdminLogin,
  },
  setup() {
    const series = ref("");
    const title = ref("");
    const date = ref("");
    const link = ref("");
    const loading = ref(true);

    const fetchEventData = async () => {
      try {
        console.log("Attempting to fetch event data...");
        const eventDoc = doc(db, "events", "fixedEventId");
        const docSnap = await getDoc(eventDoc);

        if (docSnap.exists()) {
          series.value = docSnap.data().series;
          title.value = docSnap.data().title;
          date.value = docSnap.data().date;
          link.value = docSnap.data().link;
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchEventData();
    });

    const setSeries = (value) => (series.value = value);
    const setTitle = (value) => (title.value = value);
    const setDate = (value) => (date.value = value);
    const setLink = (value) => (link.value = value);

    const handleLogout = () => {
      console.log("Admin logged out");
    };

    return {
      series,
      title,
      date,
      link,
      loading,
      setSeries,
      setTitle,
      setDate,
      setLink,
      handleLogout,
    };
  },
};
</script>

<style scoped>
.event-section {
  position: relative;
  width: 60vw;
  min-height: 84vh;
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
  margin: 0 auto;
}
.event-section div{
  margin: 0 auto;
}

.loading-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 899px) {
  .event-section {
    width: 96vw;
    margin: 0 auto;
  }
}
</style>
<template>
  <div class="event-body">
    <div class="event-container">
      <h1 class="series">{{ series }}</h1>
      <h2 class="title">"{{ title }}"</h2>
      <p class="date">{{ date }}</p>
      <a :href="link" target="_blank" rel="noopener noreferrer" class="link">
        Google Link
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    series: String,
    title: String,
    date: String,
    link: String,
  },
};
</script>

<style scoped>
.event-body {
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

.event-container {
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

.series,
.title,
.date,
.link {
  position: relative;
  z-index: 3;
}

.series {
  text-transform: capitalize;
  font-size: 28px;
  margin-bottom: 2rem;
}

.title {
  text-transform: capitalize;
  font-size: 30px;
  margin-bottom: 2rem;
font-style: italic;
}

.date {
  font-weight: 700;
  margin-bottom: 2rem;

}

.link {
  cursor: pointer;
  color: blue;
}

.link:hover {
  color: white;
}

@media (max-width: 899px) {
  .event-body {
    width: 96vw;
    margin: 0 auto;
  }

  .title {
    font-size: 28px;
  }
}
</style>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import TitleItem from '../components/TitleItem.vue';
const titles = ref([]);

onMounted(async () => {
  await axios
    // Now Playing
    // .get('https://api.themoviedb.org/3/movie/now_playing?api_key=70d100dc02aa86f434714200877bff47&language=en-US&page=1&region=ID')

    // Popular
    .get('https://api.themoviedb.org/3/movie/popular?api_key=70d100dc02aa86f434714200877bff47&language=en-US&page=1')

    // Top Rated
    // .get('https://api.themoviedb.org/3/movie/top_rated?api_key=70d100dc02aa86f434714200877bff47&language=en-US&page=1')

    // Upcoming
    // .get('https://api.themoviedb.org/3/movie/upcoming?api_key=70d100dc02aa86f434714200877bff47&language=en-US&page=1&region=ID')
    
    .then(response => {
      titles.value = response.data;
    });
});
</script>

<template>
  <main class="py-4">
    <div class="container">
      <section class="space-y-2">
        <h2>Popular</h2>
  
        <div class="scrollbar-thin scrollbar-thumb-primary-lighter scrollbar-track-primary-light flex overflow-x-scroll pb-4 gap-6">
          <TitleItem
            v-for="title in titles.results"
            :key="title.id"
            :title="title"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
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

function getYear(date) {
  return date.slice(0, 4);
}
</script>

<template>
  <main class="py-4">
    <div class="container">
      <section class="space-y-2">
        <h2>Popular</h2>
  
        <div class="scrollbar-thin scrollbar-thumb-primary-lighter scrollbar-track-primary-light flex overflow-x-scroll pb-4 gap-6">
          <div
            v-for="movie in movies.results"
            :key="movie.id"
            class="basis-2/5 shrink-0 space-y-2 md:basis-1/4 xl:basis-1/6"
          >
            <div class="relative">
              <img
                :src="`https://image.tmdb.org/t/p/w300/${movie.poster_path}`"
                class="rounded-lg"
              >
  
              <p class="absolute flex items-center -right-2 top-2 px-2 py-1 rounded font-bold text-sm bg-primary-light gap-1 shadow">
                <font-awesome-icon
                  icon="star"
                  size="sm"
                  class="text-tertiary"
                />

                {{ movie.vote_average }}
              </p>
            </div>

            <div>
              <p class="font-bold">
                {{ movie.title }}
              </p>

              <p class="text-sm">
                {{ getYear(movie.release_date) }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import axios from 'axios';
import ItemList from '../components/ItemList.vue';

const API_KEY = "70d100dc02aa86f434714200877bff47";

const lists = [
  {
    id: 1,
    name: 'Now Playing',
    items: ref({}),
    info: 'genre',
  },

  {
    id: 2,
    name: 'Popular',
    items: ref({}),
    info: 'genre',
  },

  {
    id: 3,
    name: 'Upcoming',
    items: ref({}),
    info: 'release_date'
  },

  {
    id: 4,
    name: 'Top Rated',
    items: ref({}),
    info: 'vote_count'
  },
];

onMounted(async () => {
  await axios
    // Now Playing
    .get("https://api.themoviedb.org/3/movie/now_playing?api_key=" + API_KEY + "&language=en-US&page=1&region=ID")
    .then(response => {
      lists[0].items.value = response.data;
    });

  await axios
    // Popular
    .get("https://api.themoviedb.org/3/movie/popular?api_key=" + API_KEY + "&language=en-US&page=1")
    .then(response => {
      lists[1].items.value = response.data;
    });

  await axios
    // Upcoming
    .get("https://api.themoviedb.org/3/movie/upcoming?api_key=" + API_KEY + "&language=en-US&page=1&region=ID")
    .then(response => {
      lists[2].items.value = response.data;
    });

  await axios
    // Top Rated
    .get("https://api.themoviedb.org/3/movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=1")
    .then(response => {
      lists[3].items.value = response.data;
    });
});
</script>

<template>
  <main class="py-4">
    <div class="container space-y-4">
      <ItemList
        v-for="list in lists"
        :key="list.id"
        :name="list.name"
        :items="list.items.value"
        :info="list.info"
      />
    </div>
  </main>
</template>

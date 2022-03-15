<script setup>
import { inject } from 'vue';

defineProps({
  item: {
    type: Object,
    required: true,
  },

  info: {
    type: String,
    required: true,
  },
});

const genres = inject("genres");

function convertToDecimal(rating) {
  return Number.isInteger(rating) ? rating + ".0" : rating;
}

function formatDate(releaseDate) {
  const date = new Date(releaseDate);

  const options = {
    month: 'long',
    day: 'numeric'
  };

  return date.toLocaleDateString('en-US', options);
}
</script>

<template>
  <div class="basis-2/5 shrink-0 space-y-2 md:basis-1/4 xl:basis-1/6">
    <div class="relative">
      <img
        :src="`https://image.tmdb.org/t/p/w300/${item.poster_path}`"
        class="rounded-lg aspect-[2/3]"
      >
  
      <p class="absolute flex items-center -right-2 top-2 px-2 py-1 rounded font-bold text-sm bg-primary-light gap-1 shadow">
        <font-awesome-icon
          icon="star"
          size="sm"
          class="text-tertiary"
        />
  
        {{ item.vote_average === 0 ? "NR" : convertToDecimal(item.vote_average) }}
      </p>
    </div>
  
    <div>
      <p class="font-bold">
        {{ item.title }}
      </p>
  
      <p
        v-if="info == 'genre'"
        class="text-sm"
      >
        {{ findGenre(item.genre_ids[0]) }}
      </p>
  
      <p
        v-if="info == 'release_date'"
        class="text-sm"
      >
        {{ formatDate(item.release_date) }}
      </p>

      <p
        v-if="info == 'vote_count'"
        class="text-sm"
      >
        {{ item.vote_count }} votes
      </p>
    </div>
  </div>
</template>

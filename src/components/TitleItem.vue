<script setup>
defineProps({
  title: {
    type: Object,
    required: true,
  },
});

function getYear(date) {
  return date.slice(0, 4);
}
</script>

<template lang="">
  <div class="basis-2/5 shrink-0 space-y-2 md:basis-1/4 xl:basis-1/6">
    <div class="relative">
      <img
        :src="`https://image.tmdb.org/t/p/w300/${title.poster_path}`"
        class="rounded-lg"
      >
  
      <p class="absolute flex items-center -right-2 top-2 px-2 py-1 rounded font-bold text-sm bg-primary-light gap-1 shadow">
        <font-awesome-icon
          icon="star"
          size="sm"
          class="text-tertiary"
        />
  
        {{ title.vote_average }}
      </p>
    </div>
  
    <div>
      <p class="font-bold">
        {{ title.title }}
      </p>
  
      <p class="text-sm">
        {{ getYear(title.release_date) }}
      </p>
    </div>
  </div>
</template>

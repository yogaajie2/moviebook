<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});

function getYear(date) {
  return date.slice(0, 4);
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
  
        {{ item.vote_average }}
      </p>
    </div>
  
    <div>
      <p class="font-bold">
        {{ item.title }}
      </p>
  
      <p class="text-sm">
        {{ getYear(item.release_date) }}
      </p>
    </div>
  </div>
</template>

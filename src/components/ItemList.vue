<script setup>
import TheItem from './TheItem.vue';

defineProps({
  name: {
    type: String,
    required: true,
  },

  items: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section class="space-y-2">
    <h2>{{ name }}</h2>

    <div class="scrollbar-thin scrollbar-thumb-primary-lighter scrollbar-track-primary-light flex overflow-x-scroll pb-4 gap-6">
      <TheItem
        v-for="item in items.results"
        :key="item.id"
        :item="item"
      />
    </div>
  </section>
</template>

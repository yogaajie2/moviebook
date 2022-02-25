<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="py-2 bg-primary-light">
    <div class="container flex justify-between items-center">
      <font-awesome-icon
        icon="bars"
        size="lg"
        class="lg:hidden"
      />
  
      <div class="flex items-center gap-8">
        <router-link to="/">
          <h1 class="text-center lg:text-left">
            MovieBook
          </h1>
        </router-link>
  
        <nav class="hidden font-heading space-x-4 lg:block">
          <router-link to="/movies">
            Movies
          </router-link>
          <router-link to="/series">
            Series
          </router-link>
        </nav>
      </div>
      
      <font-awesome-icon
        icon="magnifying-glass"
        size="lg"
      />
    </div>
  </header>
</template>

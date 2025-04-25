<script>
import textContent from './text.json';

export default {
  data() {
    return {
      content: textContent  // Load all text externally
    }
  }
}
</script>

<template>
  <div>
    <h1>{{ content.greeting }}</h1>
    <p>{{ content.wish }}</p>
  </div>
</template>

<style scoped>
h1 {
    color: blue;
}

p {
    font-size: 16px;
    color: gray;
}
</style>
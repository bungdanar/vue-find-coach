<script>
import { defineComponent } from 'vue'
import TheHeader from './components/layout/TheHeader.vue'

export default defineComponent({
  components: { TheHeader },
})
</script>

<template>
  <TheHeader></TheHeader>
  <RouterView></RouterView>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

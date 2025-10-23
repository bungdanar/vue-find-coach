<script>
import CoachItem from '@/components/coaches/CoachItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    },
  },
})
</script>

<template>
  <section>FILTER</section>
  <section>
    <div class="control">
      <button>Refresh</button>
      <RouterLink to="/register">Register as Coach</RouterLink>
    </div>
    <ul v-if="hasCoaches">
      <CoachItem
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
      />
    </ul>
    <h3 v-else>No coaches found.</h3>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

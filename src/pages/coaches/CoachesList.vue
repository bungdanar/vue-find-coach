<script>
import CoachFilter from '@/components/coaches/CoachFilter.vue'
import CoachItem from '@/components/coaches/CoachItem.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseDialog from '@/components/ui/BaseDialog.vue'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { CoachItem, BaseCard, BaseButton, CoachFilter, BaseSpinner, BaseDialog },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches']
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }

        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }

        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }

        return false
      })
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches']
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach']
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true

      try {
        await this.$store.dispatch('coaches/loadCoaches', { forceRefresh: refresh })
      } catch (error) {
        this.error = error.message || 'Something went wrong'
      }

      this.isLoading = false
    },
    handleError() {
      this.error = null
    }
  },
  created() {
    this.loadCoaches()
  }
})
</script>

<template>
  <BaseDialog :show="!!error" title="An error occurred" @close="handleError">
    <p>{{ error }}</p>
  </BaseDialog>
  <section>
    <CoachFilter @change-filter="setFilters" />
  </section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline" @click="loadCoaches(true)">Refresh</BaseButton>
        <BaseButton v-if="!isCoach && !isLoading" :link="true" to="/register">Register as Coach</BaseButton>
      </div>
      <BaseSpinner v-if="isLoading"></BaseSpinner>
      <ul v-else-if="hasCoaches">
        <CoachItem v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName"
          :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas" />
      </ul>
      <h3 v-else>No coaches found.</h3>
    </BaseCard>
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

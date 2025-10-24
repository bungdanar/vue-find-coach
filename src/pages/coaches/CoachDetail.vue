<script>
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { BaseCard, BaseButton, BaseBadge },
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    }
  },
  computed: {
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`
    },
    contactLink() {
      return `${this.$route.path}/contact`
    },
    areas() {
      return this.selectedCoach.areas
    },
    rate() {
      return this.selectedCoach.hourlyRate
    },
    description() {
      return this.selectedCoach.description
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find((c) => c.id === this.id)
  },
})
</script>

<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h2>Interested? Reach out now!</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <RouterView></RouterView>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area">
        <p>{{ description }}</p>
      </BaseBadge>
    </BaseCard>
  </section>
</template>

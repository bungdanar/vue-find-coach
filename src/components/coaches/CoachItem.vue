<script>
import { defineComponent } from 'vue'
import BaseButton from '../ui/BaseButton.vue'
import BaseBadge from '../ui/BaseBadge.vue'

export default defineComponent({
  components: { BaseButton, BaseBadge },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`
    },
    coachDetailstLink() {
      return `${this.$route.path}/${this.id}`
    },
  },
})
</script>

<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <BaseBadge v-for="area in areas" :key="area" :type="area" :title="area"></BaseBadge>
    </div>
    <div class="actions">
      <BaseButton mode="outline" link :to="coachContactLink">Contact</BaseButton>
      <BaseButton link :to="coachDetailstLink">View Details</BaseButton>
    </div>
  </li>
</template>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>

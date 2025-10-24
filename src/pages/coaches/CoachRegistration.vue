<script>
import CoachForm from '@/components/coaches/CoachForm.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CoachForm,
    BaseCard,
  },

  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data)
      this.$router.replace('/coaches')
    },
  },
})
</script>

<template>
  <section>
    <BaseCard>
      <h2>Register as a coach now!</h2>
      <CoachForm @save-data="saveData"></CoachForm
    ></BaseCard>
  </section>
</template>

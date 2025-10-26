<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { BaseCard }
})
</script>

<template>
  <section>
    <BaseCard>
      <h2>Page not found</h2>
      <p>This page could not be found - maybe checkout all our <RouterLink to="/coaches">coaches</RouterLink>
      </p>
    </BaseCard>
  </section>
</template>

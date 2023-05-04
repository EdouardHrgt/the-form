<template>
  <div>
    <div class="plan-page">
      <div class="select-plan">
        <steps-comp stepNb="3" />

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StepsComp from '@/components/StepsComp.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.select-plan {
  border-radius: 0.5rem;
  background-color: var(--clr-white);
  display: flex;
  gap: 6rem;
  width: 960px;
  margin: auto;
  padding: 1rem;
  border: 3px solid var(--clr-strawberry-red);
}
</style>
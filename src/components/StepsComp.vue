<template>
  <div>
    <section class="steps">
      <ul>
        <li class="list">
          <div class="ball" :class="{ active: stepNb == 1 }">
            <p>1</p>
          </div>
          <div class="step-txt">
            <p class="step-number">step 1</p>
            <h2>your info</h2>
          </div>
        </li>
        <li class="list">
          <div class="ball" :class="{ active: stepNb == 2 }">
            <p>2</p>
          </div>
          <div class="step-txt">
            <p class="step-number">step 2</p>
            <h2>select plan</h2>
          </div>
        </li>
        <li class="list">
          <div class="ball" :class="{ active: stepNb == 3 }">
            <p>3</p>
          </div>
          <div class="step-txt">
            <p class="step-number">step 3</p>
            <h2>add-ons</h2>
          </div>
        </li>
        <li class="list">
          <div class="ball" :class="{ active: stepNb == 4 }">
            <p>4</p>
          </div>
          <div class="step-txt">
            <p class="step-number">step 4</p>
            <h2>summary</h2>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  stepNb: null,
});
</script>

<style scoped>
.steps {
  background-image: url('../assets/bg-sidebar-desktop.svg');
  background-repeat: no-repeat;
  height: 568px;
  width: 274px;
  padding: 2.5rem 2rem;
}

.ball {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: 2px solid var(--clr-white);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-white);
}

.ball p {
  font-size: var(--p-size-m);
  font-weight: var(--weight-3);
}

.active {
  background-color: var(--clr-light-blue);
  border: none;
  color: var(--clr-marine-blue);
}

.step-number,
h2 {
  text-transform: uppercase;
  font-weight: var(--weight-2);
  letter-spacing: 1px;
}

h2 {
  font-size: var(--p-size-m);
  color: var(--clr-white);
  margin-top: 0.3rem;
}

.step-number {
  font-size: var(--p-size-s);
  color: var(--clr-pastel-blue);
}

li {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

@media screen and (max-width: 800px) {
  .steps {
    background-image: url('../assets/bg-sidebar-mobile.svg');
    background-position: center;
    background-size: cover;
    height: 172px;
    width: 100%;
    padding: 1.5rem 0 0 0;
    margin: auto;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .step-txt {
    display: none;
  }

  li {
    margin: 0 0.5rem;
  }
}
</style>

<template>
  <div>
    <div class="plan-page">
      <div id="my-form">
        <steps-comp stepNb="2" />
        <main>
          <h1>Select your plan</h1>
          <p class="legend">You have the option of montlhy or yearly billing</p>
          <ul class="plan-list">
            <li :class="{ activeList: plan == 0 }" @click="plan = 0">
              <img src="../assets/icon-arcade.svg" alt="Select arcade plan" />
              <h3>Arcade</h3>
              <p class="plan-list-txt">$9/mo</p>
            </li>

            <li :class="{ activeList: plan == 1 }" @click="plan = 1">
              <img src="../assets/icon-advanced.svg" alt="Select advanced plan" />
              <h3>Advanced</h3>
              <p class="plan-list-txt">$12/mo</p>
            </li>

            <li :class="{ activeList: plan == 2 }" @click="plan = 2">
              <img src="../assets/icon-pro.svg" alt="Select pro plan" />
              <h3>Pro</h3>
              <p class="plan-list-txt">$15/mo</p>
            </li>
          </ul>
          <div class="montly-yearly">
            <p class="month-year-p" :class="{ activeTxt: !switcher }">Monthly</p>
            <div class="switcher" @click="switcher = !switcher">
              <div class="switcher-ball" :class="{ active: switcher }"></div>
            </div>
            <p class="month-year-p" :class="{ activeTxt: switcher }">Yearly</p>
          </div>
          <div class="btns">
            <input type="submit" value="Go Back" id="back-btn" @click="previousPage()" />
            <input type="submit" value="Next Step" id="submit-btn" @click="submitForm()" />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StepsComp from '@/components/StepsComp.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const switcher = ref(false);
let plan = ref(0);

const submitForm = function () {
  console.log(plan.value, switcher.value);
  router.push({ name: 'add' });
};

const previousPage = () => {
  router.push({ name: 'info' });
};
</script>

<style scoped>
main {
  padding-top: 2rem;
}

.plan-list {
  display: flex;
  gap: 1.5rem;
  margin: 3rem 0 0 0;
}

li {
  border: 2px solid var(--clr-light-gray);
  border-radius: 0.5rem;
  padding: 1rem;
  width: 138px;
  height: 160px;
  flex: 1;
  cursor: pointer;
}

.activeList {
  background-color: var(--clr-magnolia);
  border: 2px solid var(--clr-purplish-blue);
}

li img {
  margin: 0 0 2rem 0;
}

.plan-list-txt {
  font-size: var(--p-size-m);
  font-weight: var(--weight-2);
  color: var(--clr-cool-gray);
  margin: 0.5rem 0;
}

.montly-yearly {
  background-color: var(--clr-magnolia);
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
}

.month-year-p {
  font-size: var(--p-size-m);
  font-weight: var(--weight-3);
  letter-spacing: 1px;
  color: var(--clr-cool-gray);
  margin: 0 1.2rem;
}

.switcher {
  width: 43px;
  height: 20px;
  border-radius: 2rem;
  background-color: var(--clr-marine-blue);
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 0.3rem;
  cursor: pointer;
}

.switcher-ball {
  background-color: var(--clr-white);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.active {
  right: 0.3rem;
}

.activeTxt {
  color: var(--clr-marine-blue);
}
</style>

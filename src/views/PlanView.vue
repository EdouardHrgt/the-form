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
              <p class="plan-list-txt">${{ price.arcade }}/mo</p>
              <p class="plan-list-promo" v-if="price.promo.length">{{ price.promo }}</p>
            </li>

            <li :class="{ activeList: plan == 1 }" @click="plan = 1">
              <img src="../assets/icon-advanced.svg" alt="Select advanced plan" />
              <h3>Advanced</h3>
              <p class="plan-list-txt">${{ price.advanced }}/mo</p>
              <p class="plan-list-promo" v-if="price.promo.length">{{ price.promo }}</p>
            </li>

            <li :class="{ activeList: plan == 2 }" @click="plan = 2">
              <img src="../assets/icon-pro.svg" alt="Select pro plan" />
              <h3>Pro</h3>
              <p class="plan-list-txt">${{ price.pro }}/mo</p>
              <p class="plan-list-promo" v-if="price.promo.length">{{ price.promo }}</p>
            </li>
          </ul>
          <div class="montly-yearly">
            <p class="month-year-p" :class="{ activeTxt: !switcher }">Monthly</p>
            <div class="switcher" @click="switchDuration()">
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
let switcher = ref(false);
let plan = ref(0);

let price = ref({ name: 'monthly', arcade: 9, advanced: 12, pro: 15, promo: '' });

const switchDuration = function () {
  if (switcher.value == true) {
    switcher.value = false;
    price = { name: 'monthly', arcade: 9, advanced: 12, pro: 15, promo: '' };
  } else if (switcher.value == false) {
    switcher.value = true;
    price = { name: 'yearly', arcade: 90, advanced: 120, pro: 150, promo: '2 months free' };
  }
};

const submitForm = function () {
  let setDuration = null;

  if (switcher.value) {
    setDuration = 'Yearly';
  } else {
    setDuration = 'Monthly';
  }
  const storage = {
    plan: plan.value,
    duration: setDuration,
  };

  localStorage.setItem('PLAN', JSON.stringify(storage));
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

.plan-list-promo {
  font-size: var(--p-size-s);
  color: var(--clr-marine-blue);
  font-weight: var(--weight-3);
  margin-top: -0.3rem;
}

@media screen and (max-width: 800px) {
  main {
    background-color: var(--clr-white);
    padding: 1rem;
    border-radius: 0.5rem;
    margin: -5rem auto 0;
    width: 90%;
  }
  .plan-list {
    flex-direction: column;
    gap: 2rem;
  }
  li {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  .btns {
    margin: auto;
    width: 80%;
  }
}
</style>

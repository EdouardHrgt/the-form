<template>
  <div>
    <section id="my-form">
      <steps-comp stepNb="4" />
      <main>
        <h1>Finishing up</h1>
        <p class="legend">Double-check everything looks OK before confirming</p>
        <div class="validation" v-if="confirmation">
          <img src="../assets/icon-thank-you.svg" alt="Thnak you for purchasing" />
          <h2>Thank You!</h2>
          <p>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you
            ever need support, please feel free to email us at support@loremgaming.com.
          </p>
        </div>

        <div class="recap">
          <div class="plan-recap">
            <div class="plan-recap-name">
              <h3 v-if="recap.plan.plan == 0">Arcade ({{ recap.plan.duration }})</h3>
              <h3 v-if="recap.plan.plan == 1">Advanced ({{ recap.plan.duration }})</h3>
              <h3 v-if="recap.plan.plan == 2">Pro ({{ recap.plan.duration }})</h3>
              <a href="#" class="text change-link">Change</a>
            </div>
            <div class="recap-plan-price">
              <p v-if="recap.plan.plan == 0">${{ finalPlan.arcade }}/mo</p>
              <p v-if="recap.plan.plan == 1">${{ finalPlan.advanced }}/mo</p>
              <p v-if="recap.plan.plan == 2">${{ finalPlan.pro }}/mo</p>
            </div>
          </div>

          <div class="recap-addon" v-for="add in addons" :key="add.name">
            <p class="text">{{ add.txt }}</p>
            <p class="addon-price text">+${{ add.price }}/mo</p>
          </div>
        </div>
        <section class="total">
          <p class="text">Total (per month)</p>
          <p class="total-price">+{{ totalPrice }}$/mo</p>
        </section>
        <div class="btns">
          <input type="submit" value="Go Back" id="back-btn" @click="previousPage()" />
          <input type="submit" value="Next Step" id="submit-btn" @click="confirmation = true" />
        </div>
      </main>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import StepsComp from '@/components/StepsComp.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const previousPage = function () {
  router.push({ name: 'add' });
};

let confirmation = ref(false);

const recap = ref({
  plan: JSON.parse(localStorage.getItem('PLAN')),
  addon: JSON.parse(localStorage.getItem('ADD-ON')),
  infos: JSON.parse(localStorage.getItem('INFOS')),
});

let addons = ref([]);
const addonsList = [
  {
    name: 'service',
    txt: 'Online service',
    price: '1',
  },
  {
    name: 'storage',
    txt: 'Larger storage',
    price: '2',
  },
  {
    name: 'profile',
    txt: 'Customizable profile',
    price: '2',
  },
];

let totalPrice = ref(0);
let finalPlan = { arcade: 9, advanced: 12, pro: 15 };

onMounted(() => {
  // Calculate the final price
  if (recap.value.plan.plan === 0) {
    totalPrice = 9;
  } else if (recap.value.plan.plan === 1) {
    totalPrice = 12;
  } else if (recap.value.plan.plan === 2) {
    totalPrice = 15;
  }
  if (recap.value.addon.service) {
    // Inject add-ons in the DOM
    addons.value.push(addonsList[0]);
    totalPrice += 1;
  }
  if (recap.value.addon.storage) {
    addons.value.push(addonsList[1]);
    totalPrice += 2;
  }
  if (recap.value.addon.profile) {
    addons.value.push(addonsList[2]);
    totalPrice += 2;
  }
});
</script>

<style scoped>
main {
  padding-top: 2rem;
  position: relative;
}
h2 {
  color: var(--clr-marine-blue);
  font-size: var(--h1-size);
  font-weight: var(--weight-3);
  letter-spacing: 1px;
  margin-bottom: 1rem;
}
.validation {
  background-color: var(--clr-white);
  position: absolute;
  z-index: 5;
  top: 0;
  bottom: 0;
  right: -1.5rem;
  left: -1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 9rem;
}
.validation img {
  margin-bottom: 2rem;
}
.validation p {
  color: var(--clr-light-gray);
  text-align: center;
  line-height: 1.4rem;
}
.recap {
  background-color: var(--clr-magnolia);
  border-radius: 0.5rem;
  padding: 1rem;
}
.plan-recap {
  border-bottom: 1px solid var(--clr-light-gray);
  padding-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h3 {
  margin-bottom: 0.5rem;
}
.change-link {
  transition: 0.3s;
}
.change-link:hover {
  color: var(--clr-purplish-blue);
}
.text {
  font-size: var(--p-size-m);
  font-weight: var(--weight-2);
  color: var(--clr-cool-gray);
  line-height: 20px;
}
.recap-plan-price p {
  font-size: var(--p-size-l);
  font-weight: var(--weight-3);
  color: var(--clr-marine-blue);
  line-height: 20px;
}
.recap-addon {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.2rem;
}

.addon-price {
  color: var(--clr-marine-blue);
}
.total-price {
  font-size: 20px;
  font-weight: var(--weight-3);
  color: var(--clr-purplish-blue);
  line-height: 20px;
}
.total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  margin-bottom: 2rem;
}
.btns {
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1rem;
}
@media screen and (max-width: 800px) {
  main {
    padding: 2rem 0.5rem 5rem 0.5rem;
    position: relative;
    top: -4.5rem;
    background-color: var(--clr-white);
    width: 90%;
    margin: auto;
    border-radius: 0.5rem;
  }
  .recap {
    margin: 2rem 0;
  }
  .btns {
    position: static;
  }
}
</style>

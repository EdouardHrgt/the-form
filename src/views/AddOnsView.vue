<template>
  <div>
    <div class="addon-page">
      <div id="my-form">
        <steps-comp stepNb="3" />
        <main>
          <h1>Pick add-ons</h1>
          <p class="legend">Add-ons help enhance your gaming experience.</p>
          <div class="add-on" :class="{ activeAddOn: onlineServive }">
            <input
              type="checkbox"
              name="online-service"
              id="online-service"
              v-model="onlineServive"
            />
            <div class="add-on-txt">
              <div class="add-on-txt-title">
                <h3>Online service</h3>
                <p>Access to multiplayer games</p>
              </div>
              <p class="price">+$1/mo</p>
            </div>
          </div>
          <div class="add-on" :class="{ activeAddOn: storage }">
            <input
              type="checkbox"
              name="larger-storage"
              id="larger-storage"
              v-model="largerStorage"
            />
            <div class="add-on-txt">
              <div class="add-on-txt-title">
                <h3>Larger storage</h3>
                <p>Extra 1TB of cloud save</p>
              </div>
              <p class="price">+$2/mo</p>
            </div>
          </div>
          <div class="add-on" :class="{ activeAddOn: profile }">
            <input
              type="checkbox"
              name="customizable-profile"
              id="customizable-profile"
              v-model="Customprofile"
            />
            <div class="add-on-txt">
              <div class="add-on-txt-title">
                <h3>Customizable profile</h3>
                <p>Custom theme on your profile</p>
              </div>
              <p class="price">+$2/mo</p>
            </div>
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

const onlineServive = ref(false);
const largerStorage = ref(false);
const Customprofile = ref(false);

function submitForm() {
  const storage = {
    service: onlineServive.value,
    storage: largerStorage.value,
    profile: Customprofile.value,
  };

  localStorage.setItem('ADD-ON', JSON.stringify(storage));
  router.push({ name: 'finishing' });
}

function previousPage() {
  router.push({ name: 'plan' });
}
</script>

<style scoped>
main {
  padding: 2rem 6rem 0 0;
  width: 100%;
}

.add-on {
  border: 2px solid var(--clr-light-gray);
  border-radius: 0.5rem;
  margin: 1.2rem 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.2rem 2rem 1.2rem 1rem;
}

.add-on-txt {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

h3 {
  font-size: var(--p-size-l);
  font-weight: var(--weight-3);
  color: var(--clr-marine-blue);
  margin-bottom: 0.4rem;
}

.add-on-txt p {
  font-size: var(--p-size-m);
}

.add-on-txt-title p {
  color: var(--clr-cool-gray);
}

.price {
  color: var(--clr-purplish-blue);
}

input[type='checkbox'] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.btns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2.5rem;
}

.activeAddOn {
  background-color: var(--clr-magnolia);
  border: 2px solid var(--clr-purplish-blue);
}
@media screen and (max-width: 800px) {
  main {
    background-color: var(--clr-white);
    padding: 1rem;
    border-radius: 0.5rem;
    margin: -5rem auto 0;
    width: 90%;
  }
  .add-on {
    margin: 2rem auto;
    width: 80%;
  }
  .btns {
    margin: auto;
    width: 80%;
  }
}
</style>

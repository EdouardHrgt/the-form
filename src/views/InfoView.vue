<template>
  <div>
    <div class="info-page">
      <section class="personal-info">
        <steps-comp />
        <main>
          <h1>Personal info</h1>
          <p class="legend">Please provide your name, email address and phone number.</p>
          <form novalidate @submit.prevent="submitForm()">
            <div class="form-group">
              <div class="label-err">
                <label for="name">Name</label>
                <p class="err-msg" v-if="errMsg.name">This field is required</p>
              </div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="e.g Stephen King"
                v-model="myForm.name"
                :class="{ activeErr: errMsg.name }"
              />
            </div>
            <div class="form-group">
              <div class="label-err">
                <label for="email">Email Address</label>
                <p class="err-msg" v-if="errMsg.email">This field is required</p>
              </div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="e.g Stephenking@lorem.com"
                v-model="myForm.email"
                :class="{ activeErr: errMsg.email }"
              />
            </div>
            <div class="form-group">
              <div class="label-err">
                <label for="phone">Phone Number</label>
                <p class="err-msg" v-if="errMsg.phone">This field is required</p>
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="e.g +1 234 567 890"
                v-model="myForm.phone"
                :class="{ activeErr: errMsg.phone }"
              />
            </div>
            <div class="form-group">
              <input type="submit" value="Next Step" id="submit-btn" />
            </div>
          </form>
        </main>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import StepsComp from '@/components/StepsComp.vue';

const myForm = ref({
  name: '',
  email: '',
  phone: '',
});

const errMsg = ref({
  name: false,
  email: false,
  phone: false,
});

const submitForm = function () {
  if (myForm.value.name && myForm.value.email && myForm.value.phone) {
    Object.values(errMsg.value).forEach((val) => (val = false));
    alert('OK');
  }
  if (!myForm.value.name) {
    errMsg.value.name = true;
  } else {
    errMsg.value.name = false;
  }
  if (!myForm.value.email) {
    errMsg.value.email = true;
  } else {
    errMsg.value.email = false;
  }
  if (!myForm.value.phone) {
    errMsg.value.phone = true;
  } else {
    errMsg.value.phone = false;
  }
};
</script>

<style scoped>
.activeErr {
  border: 1px solid var(--clr-strawberry-red);
}

.info-page {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-magnolia);
  min-height: 100dvh;
}

.personal-info {
  border-radius: 0.5rem;
  background-color: var(--clr-white);
  display: flex;
  gap: 6rem;
  width: 960px;
  margin: auto;
  padding: 1rem;
}

main {
  padding-top: 2rem;
}

form {
  position: relative;
}

.form-group {
  margin: 1rem 0;
}

.label-err {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

label {
  font-size: var(--p-size-m);
  color: var(--clr-marine-blue);
  font-weight: var(--weight-2);
  line-height: 2rem;
}

input {
  border: 1px solid var(--clr-light-gray);
  border-radius: 0.5rem;
  padding: 0.98rem 1rem;
  width: 100%;
}

input::placeholder {
  font-size: var(--p-size-l);
  color: var(--clr-cool-gray);
  font-weight: var(--weight-3);
}

#submit-btn {
  width: unset;
  margin-top: 4rem;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 980px) {
  .personal-info {
    gap: 2rem;
    width: 95%;
  }
}
</style>

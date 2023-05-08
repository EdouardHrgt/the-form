<template>
  <div>
    <div class="info-page">
      <section id="my-form">
        <steps-comp stepNb="1" />
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
            <div class="form-group btn-wrapper">
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
import { useRouter } from 'vue-router';

const router = useRouter();

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

const checkEmail = function () {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
    myForm.value.email
  );
};

const submitForm = function () {
  if (myForm.value.name && checkEmail() && myForm.value.phone) {
    const storage = {
      name: myForm.value.name,
      email: myForm.value.email,
      phone: myForm.value.phone,
    };

    localStorage.setItem('INFOS', JSON.stringify(storage));

    Object.values(errMsg.value).forEach((val) => (val = false));
    router.push({ name: 'plan' });
  }

  if (!myForm.value.name) {
    errMsg.value.name = true;
  } else {
    errMsg.value.name = false;
  }
  if (!checkEmail()) {
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

@media screen and (max-width: 800px) {
  main {
    background-color: var(--clr-white);
    padding: 1rem;
    border-radius: 0.5rem;
    margin: -5rem auto 0;
    width: 90%;
  }
  .form-group {
    margin: 2rem 0;
  }
  .btn-wrapper {
    text-align: end;
  }
  #submit-btn {
    position: static;
  }
}
</style>

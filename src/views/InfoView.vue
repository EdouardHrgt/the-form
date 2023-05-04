<template>
  <div>
    <div class="info-page">
      <steps-comp />
      <main>
        <h1>Personal info</h1>
        <p class="legend">Please provide your name, email address and phone number.</p>
        <small>{{ myForm }}</small>
        <form novalidate>
          <div class="form-group">
            <div class="label-err">
              <label for="name">Name</label>
              <p class="err-msg">This field is required</p>
            </div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g Stephen King"
              v-model="myForm.name"
            />
          </div>
          <div class="form-group">
            <div class="label-err">
              <label for="email">Email Address</label>
              <p class="err-msg">This field is required</p>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g Stephenking@lorem.com"
              v-model="myForm.email"
            />
          </div>
          <div class="form-group">
            <div class="label-err">
              <label for="phone">Phone Number</label>
              <p class="err-msg">This field is required</p>
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="e.g +1 234 567 890"
              v-model="myForm.phone"
            />
          </div>
          <div class="form-group">
            <input type="submit" value="Next Step" id="submit-btn" />
          </div>
        </form>
      </main>
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
</script>

<style scoped>
.info-page {
  border: 3px solid red;
  display: flex;
  gap: 5rem;
  position: absolute;
  top: 50%;
  left: 7vw;
  right: 7vw;
  transform: translate(0, -50%);
}

.label-err {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.err-msg {
  display: none;
}
</style>

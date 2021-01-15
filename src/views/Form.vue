<template>
  <div>
    <form @submit.prevent="submitForm">
      <div>
        <label for="">Email</label>
        <input type="text" v-model="email" debounce="500">
      </div>
      <div>
        <label for="">Password</label>
        <input type="password" v-model="password">
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
    
  </div>
</template>
<script>
export default {
  name: 'Form',
  computed: {
    email: {
      get() {
        return this.$store.state.auth.email;
      },
      set(value) {
        this.$store.dispatch({
          type: 'auth/updateEmail',
          email: value
        });
      }
    },
    password: {
      get() {
        return this.$store.state.auth.password;
      },
      set(value) {
        this.$store.dispatch({
          type: 'auth/updatePassword',
          password: value
        });
      }
    }
  },
  methods: {
    submitForm() {
      console.log('firij')
    }
  }
}
</script>
<style scoped>

</style>
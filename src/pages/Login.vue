// Login.vue
Copy code
<template>
  <div class="flex h-screen bg-mfc-dark-gray">
    <div class="m-auto w-full max-w-sm">
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <h1 class="text-2xl font-medium mb-4 text-center">Login</h1>
          <div class="mb-4">
            <input class="border border-gray-400 p-2 w-full rounded-lg" type="text" placeholder="Username">
          </div>
          <div class="mb-6">
            <input class="border border-gray-400 p-2 w-full rounded-lg" type="password" placeholder="Password">
          </div>
          <button v-on:click="handleLogin" class="bg-green text-white p-2 rounded-full w-full hover:bg-green-500">Login</button>
        </div>
    </div>
  </div>
</template>

<style>
.h-64 {
  height: 64vh;
  min-height: 300px;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Voeg hier uw inloglogica toe
      this.$router.push({path:'/dashboard'});
    },
  },
};
</script>

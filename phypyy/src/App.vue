<template>
  <Navbar />
  <RouterView />

</template>

<script>
import {RouterView} from "vue-router"
import Navbar from "../src/components/Navbar.vue"

export default {
  components: {
    Navbar,
  },
};
</script>

<style>

</style>

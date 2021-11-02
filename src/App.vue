<template>
  <div id="app">
    <search />
    <inbox-screen />
  </div>
</template>

<script>
import store from "./store";
import InboxScreen from "./components/InboxScreen/InboxScreen.vue";
import Search from "./components/Search/Search";
export default {
  name: "app",
  store,
  components: {
    Search,
    InboxScreen,
  },
  methods: {},
};
</script>
<style>
@import "./index.css";
</style>

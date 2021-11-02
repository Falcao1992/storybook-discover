<template>
  <div class="search_container">
    <div class="search_block_label">
      <label class="search_label">
        <input
          type="search"
          id="search"
          placeholder="Rechercher..."
          v-model="valueInput"
        />
      </label>
    </div>
    <button type="button" class="search_button" @click="addTask">save</button>
  </div>
</template>

<script>
import store from "../../store";

export default {
  name: "Search",
  data: () => {
    return {
      valueInput: "",
    };
  },
  methods: {
    addTask() {
      this.$emit("addTask", this.valueInput);
      store.commit("ADD_TASK", this.valueInput);
      this.valueInput = "";
    },
  },
  computed: {},
};
</script>

<style>
@import "./search.css";
</style>

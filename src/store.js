import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: "1", title: "Quelque chose", state: "TASK_PINNED" },
      { id: "2", title: "Quelque chose de plus", state: "TASK_INBOX" },
      { id: "3", title: "Autre chose", state: "TASK_INBOX" },
      { id: "4", title: "Encore quelque chose", state: "TASK_INBOX" },
      { id: "10", title: "Quelque chose", state: "TASK_ARCHIVED" },
      { id: "11", title: "Quelque chose de plus", state: "TASK_ARCHIVED" }
    ],
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      const taskTarget = state.tasks.find((task) => task.id === id);
      taskTarget.state = "TASK_ARCHIVED";
    },
    UNARCHIVED_TASK(state, id) {
      const task = state.tasks.find((task) => task.id === id);
      task.state = "TASK_INBOX";
    },
    PIN_TASK(state, id) {
      const task = state.tasks.find((task) => task.id === id);
      task.state === "TASK_PINNED"
        ? (task.state = "TASK_INBOX")
        : (task.state = "TASK_PINNED");
    },
    REMOVE_TASK(state, id) {
      const taskTarget = state.tasks.find((task) => task.id === id);
      const index = state.tasks.indexOf(taskTarget);
      if (index > -1) {
        state.tasks.splice(index, 1);
      }
    },
    ADD_TASK(state, task) {
      state.tasks.push({
        id: state.tasks.length.toString(),
        title: task,
        state: "TASK_INBOX",
      });
    },
  },
  actions: {
    archiveTask({ commit }, id) {
      commit("ARCHIVE_TASK", id);
    },
    pinTask({ commit }, id) {
      commit("PIN_TASK", id);
    },
    removeTask({ commit }, id) {
      commit("REMOVE_TASK", id);
    },
    addTask({ commit }, task) {
      commit("ADD_TASK", task);
    },
  },
});

<template>
  <div>
    <div v-if="loading">
      <div class="loading-item" v-for="(n, index) in 5" :key="index">
        <span class="glow-checkbox" />
        <span class="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    </div>
    <div class="list-items" v-if="noTasks && !this.loading">
      <div class="wrapper-message">
        <span class="icon-check" />
        <div class="title-message">You have no tasks</div>
        <div class="subtitle-message">Sit back and relax</div>
      </div>
    </div>
    <div class="list-items" v-if="showTasks">
      <task
        v-for="(task, index) in tasksInOrder"
        @removeTask="removeTask"
        @archiveTask="archiveTask"
        @pinTask="pinTask"
        :key="index"
        :task="task"
      />
    </div>
  </div>
</template>

<script>
import Task from "../Task/Task";
import store from "../../store";
export default {
  name: "task-list",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    tasks: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "default",
    },
  },
  components: {
    Task,
  },
  methods: {
    removeTask(id) {
      if (this.type === "default") {
        store.commit("REMOVE_TASK", id);
      } else {
        store.commit("UNARCHIVED_TASK", id);
      }
    },
    archiveTask(id) {
      store.commit("ARCHIVE_TASK", id);
    },
    pinTask(id) {
      store.commit("PIN_TASK", id);
    },
  },
  computed: {
    noTasks() {
      return this.tasks.length === 0;
    },
    showTasks() {
      return !this.loading && !this.noTasks;
    },
    tasksInOrder() {
      return [
        ...this.tasks.filter((t) => t.state === "TASK_PINNED"),
        ...this.tasks.filter((t) => t.state !== "TASK_PINNED"),
      ];
    },
  },
};
</script>

<template>
  <div :class="taskClass">
    <label class="checkbox">
      <input
        type="checkbox"
        :checked="isChecked"
        :disabled="true"
        name="checked"
      />
      <span class="checkbox-custom" @click="archiveTask(task.id)" />
    </label>
    <div class="title">
      <input
        type="text"
        :readonly="true"
        :value="this.task.title"
        placeholder="Input title"
      />
    </div>
    <div class="block-actions">
      <div class="actions">
        <a @click="pinTask(task.id)" v-if="!isChecked">
          <span class="icon-star" />
        </a>
      </div>
      <div class="actions">
        <button @click="removeTask(task.id)" class="action_cross">X</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "task",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        state: "",
        title: "",
      }),
    },
  },
  methods: {
    pinTask(id) {
      this.$emit("pinTask", id);
    },
    archiveTask(id) {
      this.$emit("archiveTask", id);
    },
    removeTask(id) {
      this.$emit("removeTask", id);
    },
  },
  computed: {
    taskClass() {
      return `list-item ${this.task.state}`;
    },
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    },
  },
};
</script>

<style>
.block-actions {
  display: flex;
  align-items: center;
}
.action_cross {
  color: red;
  font-weight: 600;
  background-color: transparent;
  font-size: 18px;
}
</style>

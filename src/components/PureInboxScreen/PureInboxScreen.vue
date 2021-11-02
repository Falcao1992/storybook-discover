<template>
  <div>
    <div class="page lists-show" v-if="error">
      <div class="wrapper-message">
        <span class="icon-face-sad" />
        <div class="title-message">Oh no!</div>
        <div class="subtitle-message">Something went wrong</div>
      </div>
    </div>
    <div class="page lists-show" v-else>
      <section class="list-block">
        <nav>
          <h1 class="title-page">
            <span class="title-wrapper">Taskbox</span>
            <span class="counter-tasks">{{ tasks.length }}</span>
          </h1>
        </nav>
        <pure-task-list :tasks="tasks" type="default" />
      </section>
      <section class="list-block">
        <nav>
          <h1 class="title-page">
            <span class="title-wrapper">Task Important</span>
            <span class="counter-tasks">{{ currentTasks.length }}</span>
          </h1>
        </nav>
        <pure-task-list :tasks="currentTasks" type="important" />
      </section>
      <section class="list-block">
        <nav>
          <h1 class="title-page">
            <span class="title-wrapper">Task Finis</span>
            <span class="counter-tasks">{{ finishTasks.length }}</span>
          </h1>
        </nav>
        <pure-task-list :tasks="finishTasks" type="finish" />
      </section>
    </div>
  </div>
</template>

<script>
import PureTaskList from "../TaskList/PureTaskList";

export default {
  name: "pure-inbox-screen",
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    PureTaskList,
  },
  computed: {
    tasks() {
      return this.$store.state.tasks.filter(task => task.state === "TASK_INBOX");
    },
    currentTasks() {
      return this.$store.state.tasks.filter(task => task.state === "TASK_PINNED");
    },
    finishTasks() {
      return this.$store.state.tasks.filter(task => task.state === "TASK_ARCHIVED");
    },
  },
};
</script>

<style>
.list-block {

}

.counter-tasks{
  padding: 2px;
  color: aliceblue;
  background-color: #4b457e;
  border-radius: 25px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

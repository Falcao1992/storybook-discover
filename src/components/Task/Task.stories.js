// src/components/Task.stories.js
import { action } from "@storybook/addon-actions";
import Task from "./Task";
export default {
  title: "Task",
  // Nos exports se terminant par "Data" ne sont pas des stories.
  excludeStories: /.*Data$/,
};
export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: "Task_INBOX",
  updated_at: new Date(2019, 0, 1, 9, 0),
};

const taskTemplate = `<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask"/>`;

// Etat par défaut d'une tâche
export const Default = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => taskData,
    },
  },
  methods: actionsData,
});
// Etat épinglé d'une tâche
export const Pinned = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: "TASK_PINNED",
      }),
    },
  },
  methods: actionsData,
});
// Etat archivé d'une tâche
export const Archived = () => ({
  components: { Task },
  template: taskTemplate,
  props: {
    task: {
      default: () => ({
        ...taskData,
        state: "TASK_ARCHIVED",
      }),
    },
  },
  methods: actionsData,
});

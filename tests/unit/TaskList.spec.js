import Vue from "vue";
import PureTaskList from "../../src/components/TaskList/PureTaskList";
import { withPinnedTasksData } from "../../src/components/TaskList/PureTaskList.stories";

it("renders pinned tasks at the start of the list", () => {
  const Constructor = Vue.extend(PureTaskList);
  const vm = new Constructor({
    propsData: { tasks: withPinnedTasksData },
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector(
    ".list-item:nth-child(1).TASK_PINNED"
  );

  // Nous nous attendons à ce que la tâche épinglée soit rendue en premier, pas à la fin
  expect(firstTaskPinned).not.toBe(null);
});

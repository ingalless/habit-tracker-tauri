import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import HabitCheckbox from "./components/HabitCheckbox.vue";
import HabitList from "./components/HabitList.vue";

createApp(App)
  .component("HabitCheckbox", HabitCheckbox)
  .component("HabitList", HabitList)
  .mount("#app");

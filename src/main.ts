import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import CompletionRecord from "./components/CompletionRecord.vue";
import HabitList from "./components/HabitList.vue";

createApp(App)
  .component("CompletionRecord", CompletionRecord)
  .component("HabitList", HabitList)
  .mount("#app");

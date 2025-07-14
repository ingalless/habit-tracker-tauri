<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import { Habit } from "./types";

const name = ref("");
const habits = ref<Habit[]>([]);

async function addHabit() {
    habits.value.push(await invoke<Habit>("add_habit", { name: name.value }));
    name.value = "";
}
</script>

<template>
    <main class="container max-w-xl mx-auto">
        <h1 class="text-2xl">Daily Habit Tracker</h1>

        <form class="grid grid-cols-2" @submit.prevent="addHabit">
            <input
                id="greet-input"
                v-model="name"
                placeholder="What do you want to track?"
            />
            <button
                class="bg-teal-200 text-teal-950 rounded-xl p-1"
                type="submit"
            >
                Add
            </button>
        </form>
        <HabitList :records="habits" />
    </main>
</template>

<style scoped></style>
<style></style>

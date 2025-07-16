<script setup lang="ts">
import { Habit } from "../types";

interface Props {
    records: Habit[];
}
const props = defineProps<Props>();
</script>

<template>
    <div v-for="p in props.records" class="grid grid-cols-4">
        <p class="col-span-1">{{ p.name }}</p>
        <ul class="col-span-3 w-full flex items-center justify-start">
            <li v-for="h in p.history" class="px-1">
                <input
                    type="checkbox"
                    :checked="h"
                    disabled="true"
                    class="w-4 h-4"
                />
            </li>
            <li class="px-1">
                <HabitCheckbox />
            </li>
        </ul>
    </div>
</template>

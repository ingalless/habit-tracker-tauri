<script setup lang="ts">
import { ref } from "vue";

// interface Props {}
// const props = defineProps<Props>();

enum States {
    INIT,
    CHARGING,
    CHECKED,
}
const state = ref(States.INIT);

function startAnimation() {
    state.value = States.CHARGING;
}
</script>

<template>
    <div
        v-if="state === States.INIT"
        @onmousedown="startAnimation"
        class="w-4 h-4 bg-teal-400 border-teal-900 rounded-lg"
    />
    <span v-if="state === States.CHARGING"> Charging... </span>
    <span v-if="state === States.CHECKED"> </span>
</template>

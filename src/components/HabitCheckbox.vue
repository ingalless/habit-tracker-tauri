<script setup lang="ts">
import { ref } from "vue";
import { useAudio } from "../composables/useAudio";
import {
    vibrate,
    selectionFeedback,
    impactFeedback,
} from "@tauri-apps/plugin-haptics";

// interface Props {}
// const props = defineProps<Props>();

enum States {
    UNCHECKED,
    CHARGING,
    CHECKED,
}
const state = ref(States.UNCHECKED);
let timer = ref<number | undefined>(undefined);

const { play, pause } = useAudio("/pop.mp3");

function startPress() {
    // TODO: Maintain state correctly
    cancelPress();
    state.value = States.CHARGING;
    play();
    timer.value = setTimeout(async () => {
        state.value = States.CHECKED;
        await impactFeedback("heavy");
    }, 400);
}

function cancelPress() {
    console.log("cancelled press.");
    pause();
    if (timer.value !== undefined) {
        clearTimeout(timer.value);
        timer.value = undefined;
    }
}
</script>

<template>
    <label
        for="check"
        class="inline-flex items-center cursor-pointer select-none"
        @mousedown="startPress"
        @touchstart="startPress"
        @mouseup="cancelPress"
        @mouseleave="cancelPress"
        @touchend="cancelPress"
        @touchcancel="cancelPress"
    >
        <input
            name="check"
            type="checkbox"
            class="hidden"
            :value="state === States.CHECKED"
        />
        <span
            v-if="state === States.UNCHECKED"
            class="size-6 bg-teal-100 rounded-full border-teal-900"
        />
        <span
            v-if="state === States.CHARGING"
            class="size-6 bg-teal-300 shadow-inner rounded-full border-teal-900"
        />
        <span
            v-if="state === States.CHECKED"
            class="size-8 bg-teal-900 text-teal-200 rounded-full border-teal-900 inline-flex items-center justify-center"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="4"
                stroke="currentColor"
                class="size-4"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                />
            </svg>
        </span>
    </label>
</template>

import { ref } from "vue";

export function useAudio(src: string) {
  const audio = new Audio(src);
  const isPlaying = ref(false);

  const play = () => {
    audio.currentTime = 0;
    audio.play().catch((e) => {
      // TODO: Add Tauri logging
      console.warn("Audio playback failed:", e);
    });
    isPlaying.value = true;
  };

  const pause = () => {
    audio.pause();
    isPlaying.value = false;
  };
  const stop = () => {
    pause();
    audio.currentTime = 0;
  };

  audio.onended = () => {
    isPlaying.value = false;
  };

  return { play, pause, stop, isPlaying };
}

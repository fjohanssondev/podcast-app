import { create } from "zustand";

interface AudioStore {
  audioRef: HTMLAudioElement | null;
  setAudioRef: (audioRef: HTMLAudioElement | null) => void;
}

export const useAudioStore = create<AudioStore>((set) => ({
  audioRef: null,
  setAudioRef: (audioRef) => set({ audioRef }),
}));
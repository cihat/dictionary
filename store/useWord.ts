import { create } from 'zustand'
import Words from '../lib/randomWord'

type WordState = {
  words: string[];
  setRandomWords: (wordCount: number, wordLength: number, firstLetter: string, alphabetize: boolean) => Promise<void>;
}

export const useWord = create<WordState>((set) => ({
  words: [],
  setRandomWords: async (wordCount: number, wordLength: number, firstLetter: string, alphabetize: boolean) => {
    const words = new Words();
    await words.setRandomWords(wordCount, wordLength, firstLetter, alphabetize);
    set({ words: words.getRandomWords() });
  }
}))

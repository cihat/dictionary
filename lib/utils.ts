import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function randomAlphabet() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return randomLetter;
}

export function randomNumberFromRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
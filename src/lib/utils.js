import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names using clsx and optimizes them with tailwind-merge
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

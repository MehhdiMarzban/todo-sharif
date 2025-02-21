import { clsx, type ClassValue } from "clsx"
import { formatDistanceToNow } from "date-fns-jalali";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fromNow(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
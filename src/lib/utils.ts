import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pt-AO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date)
}

export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("pt-AO", { hour: "2-digit", minute: "2-digit", hour12: false }).format(date)
}

export function formatTimeRange(start: Date, end: Date): string {
  return `${formatTime(start)} - ${formatTime(end)}`
}

export function getMonthName(date: Date): string {
  return new Intl.DateTimeFormat("pt-AO", { month: "long" }).format(date)
}

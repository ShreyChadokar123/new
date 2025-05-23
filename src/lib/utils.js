import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

export function formatCurrency(value) {
  if (typeof value !== "number") return value;
  return value.toLocaleString("en-IN", {
    style: "decimal",
    maximumFractionDigits: 2,
  });
}

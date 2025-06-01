import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

/*
 *  Utility function for combining class names

    Handle conditional class names (clsx)

    Automatically merge Tailwind conflicting classes (twMerge)

    cn("bg-red-500", isActive && "text-white", "p-4")
 */

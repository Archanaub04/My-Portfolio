import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

/* ---------------- framer motion -------------------------- */

export const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ----------------------------------------------------------- */

/*
 *  Utility function for combining class names

    Handle conditional class names (clsx)

    Automatically merge Tailwind conflicting classes (twMerge)

    cn("bg-red-500", isActive && "text-white", "p-4")
 */

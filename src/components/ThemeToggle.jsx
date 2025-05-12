// import { Moon, Sun } from "lucide-react";
// import { useEffect, useState } from "react";
// import { cn } from "./../lib/utils/cn.js"; // Adjust the import path as necessary

// export const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       if (storedTheme === "dark") {
//         setIsDarkMode(true);
//         document.documentElement.classList.add("dark");
//       } else {
//         setIsDarkMode(false);
//       }
//     } else {
//       localStorage.setItem("theme", "light"); // Default to light theme
//       setIsDarkMode(false);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setIsDarkMode(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setIsDarkMode(true);
//     }
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className={cn(
//         "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
//         "focus:outline-none"
//       )}
//       aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
//     >
//       {isDarkMode ? (
//         <Sun className="h-6 w-6 text-yellow-300" />
//       ) : (
//         <Moon className="h-6 w-6 text-blue-900" />
//       )}
//     </button>
//   );
// };

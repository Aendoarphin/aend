import { createContext } from "react";

export const ThemeContext = createContext({
  theme: "dark",
  //@ts-expect-error: Not an error
  setTheme: (theme: string) => {} 
})
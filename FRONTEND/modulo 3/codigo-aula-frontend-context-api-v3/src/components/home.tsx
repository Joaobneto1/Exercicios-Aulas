import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <main>Tema: {theme}</main>
  )
}
import { useTheme } from "../hook/useTheme"

export function Footer() {
  const { theme } = useTheme()
  return (
    <footer>footer: {theme}</footer>
  )
}
import { useTheme } from "../hook/useTheme"

export function Header() {
  const { setTheme } = useTheme()
  return (
    <header>
      <h1>Header</h1>
      <button onClick={() => setTheme('LIGHT')}>trocar o tema</button>
    </header>
  )
}
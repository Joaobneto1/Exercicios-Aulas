import { useEffect, useState } from "react"

export function App1(): JSX.Element {
  const [nome, setNome] = useState<string>('Jess')
  // todas as renderizações
  useEffect(() => {
    console.log("renderizou")
  })

  function mudarNome() {
    setNome(`Jessica ${Math.random()}`)
  }
  return (
    <>
      <h1>{nome}</h1>
      <button onClick={mudarNome}>Clique</button>
    </>

  )
}


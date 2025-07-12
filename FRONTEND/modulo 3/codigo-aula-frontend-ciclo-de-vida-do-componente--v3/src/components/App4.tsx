import { useEffect, useState } from "react"


export function App4(): JSX.Element {
  const [mostrar, setMostrar] = useState<boolean>(false)


  return (
    <>
      {mostrar ? <Notificacao /> : null}
      <button onClick={() => setMostrar(!mostrar)}>{mostrar ? 'Remover' : 'Adicionar'}</button>
    </>


  )
}

function Notificacao(): JSX.Element {
  //executo quando o component é removido
  // renderizado com alteração nas dependencias`
  useEffect(() => {
    window.document.title = 'Notificacao importante'
  }, [])
  useEffect(() => {
    return () => {
      window.document.title = 'Vite + React + TS'
      console.log(`executo quando o component é removido ou 
      renderizado com alteração nas dependencias`)
    }
  }, [])

  return <h1>Notificacao</h1>
}



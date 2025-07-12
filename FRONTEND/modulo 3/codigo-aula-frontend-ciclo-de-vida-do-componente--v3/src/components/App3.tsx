import { useEffect, useState } from "react"


export function App3(): JSX.Element {
  const [dependencia, setDependencia] = useState<boolean>(false)

  // executa na primeira renderização
  // e quando a dependencia é alterada
  useEffect(() => {
    console.log(" executa na primeira renderização");
    console.log(" e quando a dependencia é alterada");
  }, [dependencia])


  return (

    <button onClick={() => setDependencia(!dependencia)}>clique</button>


  )
}



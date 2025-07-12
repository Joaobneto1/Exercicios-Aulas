import { useEffect, useState } from "react"

interface ITarefas {
  completed: boolean
  id: number
  title: string
  userId: number
}

export function App2(): JSX.Element {
  const [tarefas, setTarefas] = useState<ITarefas[]>([])


  // executa na primeira renderização
  useEffect(() => {
    carregarTarefas()
  }, [])

  async function carregarTarefas() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/todos')
    const respostaFormatada = await resposta.json()
    setTarefas(respostaFormatada)
    console.log(tarefas)
  }
  return (
    <>
      <h1>Tarefas</h1>
      {tarefas.map(item => <p key={item.id}>{item.title}</p>)}
    </>

  )
}



export function Exemplo2() {

  // executa na primeira renderização
  useEffect(() => {
    console.log('executou na primeira renderização')
  }, [])


  return (
    <h1>Tarefas</h1>
  )
}


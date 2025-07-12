import { useState } from "react"
import { Lista } from "../../components/Lista"
import styles from './app.module.css'

function App() {
  const [filmes, setFilmes] = useState<string[]>([
    'Senhor dos Aneis',
    'Harry Potter',
    'Jogos vorazes'])

  function addFilme() {
    // const novoFilmes = [...filmes, 'Divergentes'];
    setFilmes((filmesAnteriores: string[]) => {
      return [...filmesAnteriores, 'Divergentes'];
    })
    // setFilmes((filmesAnteriores: string[]) => {
    //   return [...filmesAnteriores, 'Divergentes'];
    // })

  }

  return (
    <section className={styles.lista}>
      <h1 className={styles.title}>Filmes ({filmes.length})</h1>
      <Lista itens={filmes} setItens={setFilmes} />
      <button onClick={addFilme}>Adicionar Filme</button>
    </section>

  )
}

export default App

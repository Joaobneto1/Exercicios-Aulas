import { useState } from "react"
import { Lista } from "../../components/Lista"
import styles from './filmes.module.css'
import { Cadastra } from "../../components/Cadastra"
import { Altera } from "../../components/Altera"
import { FilmesProps } from "../../interface/filmesInterfaces"

export function Filmes() {
  const [modalAlterar, setModalAlterar] = useState<boolean>(false)

  const [filmeAtual, setFilmeAtual] = useState<FilmesProps>({
    id: '',
    nome: ''
  });

  const [filmes, setFilmes] = useState<FilmesProps[]>([{
    id: '1',
    nome: 'Harry Potter'
  }, {
    id: '2',
    nome: 'Jogos Vorazes'
  }]);

  function lidarComOAlterar(filme: FilmesProps) {
    // selecionar o filme clicado
    setFilmeAtual(filme);
    // abrir modal
    setModalAlterar(true);
  }

  return (
    <section className={styles.filmes}>
      <h1 className={styles.titulo}>Filmes ({filmes.length})</h1>
      <Cadastra setFilmes={setFilmes} />
      <Altera
        modalAlterar={modalAlterar}
        setModalAlterar={setModalAlterar}
        filmeAtual={filmeAtual}
        setFilmeAtual={setFilmeAtual}
        filmes={filmes}
        setFilmes={setFilmes} />
      <Lista lidarComOAlterar={lidarComOAlterar} itens={filmes} setItens={setFilmes} />
    </section>

  )
}

import { ChangeEvent, FormEvent } from 'react';
import { AlteraProps } from '../../interface/alteraInterfaces';
import styles from './altera.module.css';

export function Altera({
  modalAlterar,
  setModalAlterar,
  filmeAtual,
  setFilmeAtual,
  filmes,
  setFilmes }: AlteraProps): JSX.Element {

  function alterarNomeFilme(event: ChangeEvent<HTMLInputElement>) {
    const novoFilme = {
      id: filmeAtual.id,
      nome: event.target.value
    }
    setFilmeAtual(novoFilme)
  }

  function alterarFilme(event: FormEvent) {
    event.preventDefault();

    const IndexDofilmeQueVaiSerAlterado = filmes.findIndex(filme =>
      filme.id == filmeAtual.id);

    if (IndexDofilmeQueVaiSerAlterado == -1) return

    const novosFilmes = [...filmes]
    const novoFilme = {
      ...novosFilmes[IndexDofilmeQueVaiSerAlterado],
      nome: filmeAtual.nome
    }
    //  novoFilme.nome = filmeAtual.nome
    novosFilmes[IndexDofilmeQueVaiSerAlterado] = novoFilme;

    setFilmes(novosFilmes);
    setModalAlterar(false);

  }

  function lidarComOFecharModal() {
    setFilmeAtual({
      id: '',
      nome: ''
    })
    setModalAlterar(false)
  }

  return (
    <>
      {modalAlterar ?

        <form onSubmit={alterarFilme} className={styles.formulario}>
          <h1 className={styles.form__titulo}>Alterar Filme</h1>
          <input value={filmeAtual.nome} onChange={alterarNomeFilme} placeholder='Digite o nome do filme' className={styles.formulario__nomeFilme} />
          <button className={`botao ${styles.botao__alterar}`}>Alterar Filme</button>
          <button type='button' onClick={lidarComOFecharModal} className={`botao ${styles.botao__fechar}`}>Fechar</button>
        </form>

        : null}
    </>
  )
}
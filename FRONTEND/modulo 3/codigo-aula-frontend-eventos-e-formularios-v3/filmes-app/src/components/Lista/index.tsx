import styles from './lista.module.css';
import { ListaProps } from '../../interface/listaInterfaces';

export function Lista({ itens, setItens, lidarComOAlterar }: Readonly<ListaProps>): JSX.Element {

  function deletarFilme(id: string) {
    const novosFilmes = itens.filter(item => item.id !== id)
    setItens(novosFilmes)
  }


  return (
    <ul className={styles['lista']}>
      {itens.map((filme) =>
        <li key={filme.id} className={styles.lista__item}>
          {filme.nome}
          <button onClick={() => deletarFilme(filme.id)} className={`botao ${styles.botao__excluir}`}>Excluir</button>
          <button onClick={() => lidarComOAlterar(filme)} className={`botao ${styles.botao__alterar}`}>Alterar</button>
        </li>
      )}
    </ul>
  )
}
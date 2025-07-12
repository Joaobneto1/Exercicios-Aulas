import { Dispatch, SetStateAction } from 'react';
import styles from './lista.module.css';

interface ListaProps {
  itens: string[];
  setItens: Dispatch<SetStateAction<string[]>>
}
export function Lista({ itens, setItens }: Readonly<ListaProps>): JSX.Element {

  function deletarFilme(filme: string) {
    const novosFilmes = itens.filter(item => item !== filme)
    setItens(novosFilmes)
  }

  return (
    <ul className={styles['lista-container']}>
      {itens.map(filme =>
        <li key={filme} className={styles.lista__item}>
          {filme}
          <button onClick={() => deletarFilme(filme)}>Excluir</button>
        </li>
      )}
    </ul>
  )
}
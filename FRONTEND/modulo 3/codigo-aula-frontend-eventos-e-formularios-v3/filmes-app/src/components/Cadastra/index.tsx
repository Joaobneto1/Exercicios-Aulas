import { FormEvent, useRef } from 'react';
import styles from './cadastra.module.css';
import { CadastraProps } from '../../interface/cadastraInterfaces';


export function Cadastra({ setFilmes }: Readonly<CadastraProps>) {
  const nomeFilmeRef = useRef<HTMLInputElement>(null)

  function addFilme(event: FormEvent) {
    event.preventDefault();

    const nomeFilmeValor = nomeFilmeRef?.current?.value

    if (!nomeFilmeValor) {
      alert('Preencha o nome do filme')
      return
    }

    const novoFilme = {
      id: crypto.randomUUID(),
      nome: nomeFilmeValor
    }

    setFilmes(listaFilmesAnterior => [...listaFilmesAnterior, novoFilme])

    nomeFilmeRef.current.value = ''
  }

  return (
    <form onSubmit={addFilme} className={styles.formulario}>
      <input type="text" ref={nomeFilmeRef} className={styles.formulario__nomeFilme} placeholder='Digite o nome do filme' />
      <button className={`botao ${styles.botao__cadastrar}`}>Adicionar Filme</button>
    </form>
  )
}
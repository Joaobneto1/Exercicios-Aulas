import { Lista } from "../components/Lista"
import { Produto } from "../components/Produto";

function App() {
  const tecnologias = [
    'react',
    'node',
    'javascript'
  ];
  const frutas = [
    'maça',
    'banana',
    'goiaba'
  ]
  const produtoQSeraMostrado = 1;
  const carregando = false

  return (
    <>
      <Lista title="tecnologias" items={tecnologias} />
      <Lista title="frutas" items={frutas} />

      {!carregando && <h1>Carregando</h1>}
      {
        produtoQSeraMostrado == 1 ?
          <Produto>
            <h1>Produto 1</h1>
            <h2>R$ 1000</h2>
            <button>Comprar</button>
          </Produto>
          : <Produto>
            <h1>Produto 2</h1>
            <h2>R$ 1000</h2>
            <button>Comprar</button>
          </Produto>}



    </>
  )
}

export default App



interface ProdutoProps {
  children: JSX.Element[]
}
export function Produto(props: ProdutoProps): JSX.Element {
  console.log(props.children)
  return <div>
    {props.children}
  </div>
}
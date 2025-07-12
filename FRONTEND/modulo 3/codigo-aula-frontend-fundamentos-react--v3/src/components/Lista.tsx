
interface ListaProps {
  title: string
  items: string[]
}
export function Lista({ items, title }: ListaProps): JSX.Element {
  console.log(items)
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {items.filter(item => item !== 'react').map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}

      </ul>
    </>
  )
}
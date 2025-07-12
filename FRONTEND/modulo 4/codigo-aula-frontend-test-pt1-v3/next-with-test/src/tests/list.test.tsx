import { List } from '@/components/list'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('List Skills', () => {
  it('listar os dados corretamente na renderização', () => {
    const data = [
      {
        id: '1',
        name: 'HTML'
      },
      {
        id: '2',
        name: 'CSS'
      },
      {
        id: '3',
        name: 'Javascript'
      }
    ]
    const wrapper = render(<List skills={data}/>)
    // wrapper.debug()
    const liHTML = screen.queryByText('HTML')
    const liCSS = screen.queryByText('CSS')
    const liJavascript = screen.queryByText('Javascript')

    expect(liHTML).toBeVisible()
    expect(liCSS).toBeVisible()
    expect(liJavascript).toBeVisible()

  })
  test('não listar dados vazios', () => {
    render(<List skills={[]} />)
    
    const lis = screen.queryAllByRole('listitem')
    
    expect(lis).toHaveLength(0)
  })
})
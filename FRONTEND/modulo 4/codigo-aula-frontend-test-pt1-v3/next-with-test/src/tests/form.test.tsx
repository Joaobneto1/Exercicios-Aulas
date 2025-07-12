import { Form } from "@/components/form"
import { fireEvent, render, screen } from "@testing-library/react"

const handleForm = jest.fn()
describe('Form Skills', () => {
  
  beforeEach(() => {
    // jest.clearAllMocks()
    render(<Form handleForm={handleForm}/>)
  })

  it('cadastrar nova skill e ver se a fn handleForm foi executada', () => {
    
    const input = screen.getByPlaceholderText('Digite sua skill')
    const button = screen.getByRole('button')

    // adicionando valor no input
    fireEvent.change(input, 
      { target: { value: 'Typescript'} }
    )

    // clique no btn
    fireEvent.click(button)

    expect(handleForm).toHaveBeenCalled()

  }) 

  test('cadastrar com o input vazio e ver se a fn handleForm foi executada', () => {
    const button = screen.getByRole('button')

    // clique no btn
    fireEvent.click(button)

    expect(handleForm).not.toHaveBeenCalled()
  })
  
})
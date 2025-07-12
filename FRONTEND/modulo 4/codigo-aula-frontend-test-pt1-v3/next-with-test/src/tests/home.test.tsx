import Home from "@/app/page"
import { render, screen } from "@testing-library/react"
import React from "react"
import '@testing-library/jest-dom'

jest.mock('../utils/createRequest', () => ({
  createRequest: jest.fn()
}))

const setSkills = jest.fn()
jest.spyOn(React, 'useState').mockReturnValue([[], setSkills])

describe('Page Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('verificar se no h1 existe o texto Minhas Skills', () => {
    const heading = screen.queryByRole('heading');

    expect(heading).toHaveTextContent('Minhas Skills')
  })
  
  it('verificar se no h1 tem a classe title', () => {
    const heading = screen.queryByRole('heading');

    expect(heading).toHaveClass('title')
  })
})
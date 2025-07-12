describe('Page Home', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('deve renderizar a pagina corretamente', () => {

    cy.contains('Minhas Skills').should('exist')
    cy.get('form').should('exist')
    cy.get('input').should('exist')
    cy.get('button.btn-save').should('exist')
    cy.get('ul').should('exist')

  })

  it('deve cadastrar uma skill', () =>  {
    const textSkill = 'skill teste cadastro'

    //cadastrar
    createSkill(textSkill)

    // deletar
    deleteSkill(textSkill)
  })

  it('não deve cadastrar uma skill com o input vazio', () => {
    cy.get('button.btn-save').click()

    cy.get('ul').should('not.contain', 'li:empty')
  })

  it('deve editar a skill', () => {
    const textSkill = 'skill teste editar'
    const newTextSkill = 'novo valor de editar'

    // cadastrar
    createSkill(textSkill)

   

    // selecionar a skill que vai ser editada
    selectedSkill(textSkill)
    
    // editar
    cy.get('input')
      .clear()
      .type(newTextSkill)
    
    cy.get('button.btn-save').click();

    
    // verificando
    cy.get('ul').should('contain', newTextSkill)

    cy.get('ul').should('not.contain', textSkill)

    // deletar
    deleteSkill(newTextSkill)

  })

  it('deve deletar a skill', () => {
    const textSkill = 'skill teste deletar'

     // cadastrar 
     createSkill(textSkill)

     // deletar
     deleteSkill(textSkill)
  })

  function deleteSkill(textSkill: string) {
    cy.contains('li', textSkill)
    .should('exist')
    .find('button.btn-delete')
    .click()


    cy.get('ul').should('not.contain', textSkill)
  }

  function createSkill(textSkill: string) { 
    cy.get('input').type(textSkill)
    cy.get('button.btn-save').click()

    cy.get('ul').should('contain', textSkill)
  }

  function selectedSkill(textSkill: string) {
    cy.contains('li', textSkill)
      .should('exist')
      .find('button.btn-edit')
      .click()
    
    cy.get('input')
      .should('have.value', textSkill)
  }
})
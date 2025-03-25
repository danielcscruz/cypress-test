/// <reference types="cypress" />

describe('Testes para Agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })
    it('Testar inclusão de um contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').its('length').then((cards) => {
            console.log('Number of elements:', cards)
            console.log('Number of expecteds elements after click:', cards+1)
            cy.get('input[type="text"]').type('Daniel')
            cy.get('input[type="email"]').type('meu@email.com')
            cy.get('input[type="tel"]').type('71 9995858585')

            cy.get('button[type="submit"]').click()

            cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length',cards+1)
        })
    }),
    it('Testar alteração de um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input').should('have.length', 3)

    }),
    it('Testar remoção de um contato', () => {
        cy.get('.sc-beqWaB.eQdhbg.contato').its('length').then((cards) => {
            if (cards !== 0) {
                cy.get('.delete').first().click()
                cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length',cards-1)
            }
        })

    })
})
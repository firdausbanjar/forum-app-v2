import {
	beforeEach, cy, describe, expect, it,
} from 'local-cypress';

/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when username or password is wrong
 *   - should display the thread page when the email and password are correct
 */

describe('login spec', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/login');
	});

	it('should display login page correctly', () => {
		cy.get('input[name="email"]').should('be.visible');
		cy.get('input[name="password"]').should('be.visible');
		cy.get('button').contains(/^Masuk$/).should('be.visible');
	});

	it('should display alert when email is empty', () => {
		cy.get('button').contains(/^Masuk$/).click();

		cy.on('window:alert', (str) => {
			expect(str).to.equal('"email" is not allowed to be empty');
		});
	});

	it('should display alert when password is empty', () => {
		cy.get('input[name="email"]').type('firdaus@email.com');
		cy.get('button').contains(/^Masuk$/).click();

		cy.on('window:alert', (str) => {
			expect(str).to.equal('"password" is not allowed to be empty');
		});
	});

	it('should display alert when username or password is wrong', () => {
		cy.get('input[name="email"]').type('wrong@email.com');
		cy.get('input[name="password"]').type('wrongpassword');
		cy.get('button').contains(/^Masuk$/).click();

		cy.on('window:alert', (str) => {
			expect(str).to.equal('email or password is wrong');
		});
	});

	it('should display the thread page when the email and password are correct', () => {
		cy.get('input[name="email"]').type('firdaus@email.com');
		cy.get('input[name="password"]').type('asdasd');
		cy.get('button').contains(/^Masuk$/).click();

		cy.get('a[href="/threads/new"]').should('be.visible');
	});
});

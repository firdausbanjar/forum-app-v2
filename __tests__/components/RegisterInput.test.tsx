import {
	afterEach,
	describe,
	expect,
	it,
	jest,
} from '@jest/globals';
import matchers from '@testing-library/jest-dom/matchers';
import {
	cleanup,
	render,
	screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from '@/components/RegisterInput';

/**
 * Scenario Test
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when "Daftar" button is clicked
 */

expect.extend(matchers);

describe('RegisterInput component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should handle name typing correctly', async () => {
		render(<RegisterInput onRegister={() => { }} />);
		const nameInput = screen.getByTestId('name');

		await userEvent.type(nameInput, 'firdaus');

		expect(nameInput).toHaveProperty('value', 'firdaus');
	});

	it('should handle email typing correctly', async () => {
		render(<RegisterInput onRegister={() => { }} />);
		const emailInput = screen.getByTestId('email');

		await userEvent.type(emailInput, 'firdaus@email.com');

		expect(emailInput).toHaveProperty('value', 'firdaus@email.com');
	});

	it('should handle password typing correctly', async () => {
		render(<RegisterInput onRegister={() => { }} />);
		const passwordInput = screen.getByTestId('password');

		await userEvent.type(passwordInput, 'firdaus12345');

		expect(passwordInput).toHaveProperty('value', 'firdaus12345');
	});

	it('should call register function when "Daftar" button is clicked', async () => {
		const mockRegister = jest.fn();
		render(<RegisterInput onRegister={mockRegister} />);
		const nameInput = screen.getByTestId('name');
		await userEvent.type(nameInput, 'firdaus');
		const emailInput = screen.getByTestId('email');
		await userEvent.type(emailInput, 'firdaus@email.com');
		const passwordInput = screen.getByTestId('password');
		await userEvent.type(passwordInput, 'firdaus12345');
		const registerButton = screen.getByRole('button', { name: 'Daftar' });

		await userEvent.click(registerButton);

		expect(mockRegister).toBeCalledWith({
			name: 'firdaus',
			email: 'firdaus@email.com',
			password: 'firdaus12345',
		});
	});
});

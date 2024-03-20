import {
	afterEach,
	describe,
	expect,
	it,
	jest,
} from '@jest/globals';
import matchers from '@testing-library/jest-dom/matchers';
import {
	cleanup, render, screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from '@/components/ThreadInput';

/**
 * Scenario Test
 *
 * - RegisterInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call upload function when "Unggah" button is clicked
 */

expect.extend(matchers);

describe('ThreadInput component', () => {
	afterEach(() => {
		cleanup();
	});

	it('should handle title typing correctly', async () => {
		render(<ThreadInput onUpload={() => { }} />);
		const titleInput = screen.getByTestId('title');

		await userEvent.type(titleInput, 'Thread-1');

		expect(titleInput).toHaveProperty('value', 'Thread-1');
	});

	it('should handle category typing correctly', async () => {
		render(<ThreadInput onUpload={() => { }} />);
		const categoryInput = screen.getByTestId('category');

		await userEvent.type(categoryInput, 'testing');

		expect(categoryInput).toHaveProperty('value', 'testing');
	});

	it('should handle body typing correctly', async () => {
		render(<ThreadInput onUpload={() => { }} />);
		const bodyInput = screen.getByTestId('body');

		await userEvent.type(bodyInput, 'Ini adalah thread pertama saya');

		expect(bodyInput.textContent).toEqual('Ini adalah thread pertama saya');
	});

	it('should call upload function when "Unggah" button is clicked', async () => {
		const mockUpload = jest.fn();
		render(<ThreadInput onUpload={mockUpload} />);
		const titleInput = screen.getByTestId('title');
		await userEvent.type(titleInput, 'Thread-1');
		const categoryInput = screen.getByTestId('category');
		await userEvent.type(categoryInput, 'testing');
		const bodyInput = screen.getByTestId('body');
		await userEvent.type(bodyInput, 'Ini adalah thread pertama saya');
		const uploadButton = screen.getByRole('button', { name: 'Unggah' });

		await userEvent.click(uploadButton);

		expect(mockUpload).toBeCalledWith({
			title: 'Thread-1',
			body: 'Ini adalah thread pertama saya',
			category: 'testing',
		});
	});
});

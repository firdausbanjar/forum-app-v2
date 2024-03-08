import { useEffect, useState } from 'react';

const useTheme = (): [
	string,
	() => void,
] => {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

	const toggleTheme = () => {
		setTheme((prevState) => {
			const newTheme = prevState !== 'dark' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, []);

	return [theme, toggleTheme];
};

export default useTheme;

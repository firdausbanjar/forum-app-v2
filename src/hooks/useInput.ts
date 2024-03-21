import { ChangeEvent, useState } from 'react';

const useInput = (defaultValue = ''): [
	string,
	(even: ChangeEvent<HTMLInputElement>) => void,
] => {
	const [value, setValue] = useState(defaultValue);

	const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return [value];
};

export default useInput;

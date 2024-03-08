import { FormEvent, useState } from 'react';

const useContentEditable = (defaultValue: string = ''): [
	string,
	(event: FormEvent<HTMLElement>) => void,
] => {
	const [value, setValue] = useState(defaultValue);

	const handleValueChange = (event: FormEvent<HTMLElement>) => {
		setValue(event.currentTarget.innerHTML);
	};

	return [value, handleValueChange];
};

export default useContentEditable;

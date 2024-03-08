const showFormattedDate = (date: string, lang: Intl.LocalesArgument) => {
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	return new Date(date).toLocaleDateString(lang, options);
};

export { showFormattedDate };

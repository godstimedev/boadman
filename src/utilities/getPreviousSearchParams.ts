const getPreviousSearchParams = (searchParams: URLSearchParams) => {
	if (!searchParams) return {};

	const previousParams: { [key: string]: string } = {};

	for (const entry of searchParams.entries()) {
		previousParams[entry[0]] = entry[1];
	}

	return previousParams;
};

export default getPreviousSearchParams;

const maskNumber = (number: string) => {
	// Convert the number to a string if it isn't already
	const numberStr = number;

	// Ensure it’s a 16-digit number
	if (numberStr.length !== 16) {
		throw new Error('Number must be 16 digits long');
	}

	// Mask the first 12 digits and leave the last 4 visible
	return '**** **** **** ' + numberStr.slice(-4);
};

export default maskNumber;

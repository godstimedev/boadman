// Supported formats
// mm yyyy - Oct 2023
// mm dd yyyy - Oct 10, 2023
// dd mm yyyy - 10 Oct, 2023
// dd/mm/yyyy - 10/10/2023

type GetDateArgsType = {
	value: string;
	format: 'mm yyyy' | 'mm dd yyyy' | 'dd mm yyyy' | 'dd/mm/yyyy';
	isDate: boolean;
};

const getDateTime = (args: GetDateArgsType) => {
	const { value, format = 'dd/mm/yyyy', isDate = true } = args;

	const date = new Date(value);

	if (isNaN(date.getTime())) {
		return '';
	}

	if (isDate) {
		const splittedDate = new Date(value).toDateString().split(' ');

		if (format === 'mm dd yyyy') {
			return `${splittedDate?.[1]} ${splittedDate?.[2]}, ${splittedDate?.[3]}`;
		} else if (format === 'dd mm yyyy') {
			return `${splittedDate?.[2]} ${splittedDate?.[1]}, ${splittedDate?.[3]}`;
		} else if (format === 'mm yyyy') {
			return `${splittedDate?.[1]} ${splittedDate?.[3]}`;
		} else if (format === 'dd/mm/yyyy') {
			const day = date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate();
			const month = (date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
			const year = date.getFullYear().toString().length === 1 ? `0${date.getFullYear()}` : date.getFullYear();

			return `${day}/${month}/${year}`;
		}
	} else {
		let period = 'AM';
		let hours: string | number = date.getHours();
		let minutes: string | number = date.getMinutes();

		if (hours === 0) {
			hours = 12;
		} else if (hours === 12) {
			period = 'PM';
		} else if (hours > 12) {
			hours %= 12;
			period = 'PM';
		}
		hours = `0${hours}`;
		hours = hours.slice(hours.length - 2, hours.length);

		minutes = `0${minutes}`;
		minutes = minutes.slice(minutes.length - 2, minutes.length);

		return `${hours}:${minutes} ${period}`;
	}
};

export default getDateTime;

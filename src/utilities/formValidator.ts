import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { isEmail, isUrl } from '.';

type InputType = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type InputsType = InputType[];
type HandleErrorViewingType = (errorCon: HTMLElement | null, message?: string) => void;

/*
Data properties supported and what they do
- data-ignore: If value is true, it won't try to validate the input
- data-componentid: used to locate the InputGroup container of the input involved
- data-customerror: if it has a value, validation will fail (currently only being used for  password)
- data-type: used to check the type also (currently only being used for password because password type changes from text to password)
- data-telvalue: used to get the actual value of the number being returned by react-phone-number-input
*/

const formValidator = (inputs: InputsType) => {
	let validated = true;
	let firstFailedInput: InputType | undefined = undefined;

	Array.from(inputs)
		.filter((input) => input.getAttribute('data-ignore') !== 'true')
		.forEach((input) => {
			const { type, value, required, tagName } = input;

			const errorCon = document.getElementById(input.getAttribute('data-componentid') || '');
			const customError = input.getAttribute('data-customerror') || '';
			const isPassword = input.getAttribute('data-type') === 'password' ? true : false;
			const isCode = input.getAttribute('data-type') === 'code' ? true : false;

			if (type === 'email') {
				if (isEmail(value)) {
					removeError(errorCon);
				} else if (required) {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showError(errorCon, 'Invalid email address');
				}
			} else if (type === 'tel') {
				const newValue = input.getAttribute('data-telvalue') || '';

				if (isPossiblePhoneNumber(newValue)) {
					removeError(errorCon);
				} else {
					if (required || newValue) {
						if (!firstFailedInput) {
							firstFailedInput = input;
						}
						validated = false;
						showError(errorCon, 'Invalid phone number');
					}
				}
			} else if (type === 'url') {
				if (isUrl(value)) {
					removeError(errorCon);
				} else if (required) {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showError(errorCon, 'Invalid Url');
				}
			} else if (type === 'checkbox') {
				const { checked: isChecked } = input as HTMLInputElement;
				const errorCon = input.parentElement;

				if (isChecked) {
					removeCheckboxError(errorCon);
				} else if (required) {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showCheckboxError(errorCon);
				}
			} else if (tagName === 'SELECT') {
				// Not tested
				if (value) {
					removeError(errorCon);
				} else if (required) {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showError(errorCon, 'Invalid selection');
				}
			} else if (type === 'file') {
				// Not tested
				if (value && required) {
					removeError(errorCon);
				} else if (required) {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showError(errorCon, 'This field cannot be blank');
				}
			} else if (type === 'password' || isPassword) {
				if (value) {
					if (customError) {
						if (!firstFailedInput) {
							firstFailedInput = input;
						}
						validated = false;
						showError(errorCon, customError);
					} else {
						removeError(errorCon);
					}
				} else if (required) {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showError(errorCon, `Password cannot be blank`);
				}
			} else if (type === 'code' || isCode) {
				if (value) {
					removeError(errorCon);
				} else if (required) {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showError(errorCon, 'All fields must be filled');
				}
			} else if (required) {
				if (value) {
					removeError(errorCon);
				} else {
					if (!firstFailedInput) {
						firstFailedInput = input;
					}
					validated = false;
					showError(errorCon, 'This field cannot be blank');
				}
			}
		});

	if (firstFailedInput) {
		(firstFailedInput as InputType).focus();
	}
	return validated;
};

const removeError: HandleErrorViewingType = (errorCon) => {
	const infoCon = errorCon?.querySelector('#info-con') || null;
	const spanEl = infoCon ? infoCon?.querySelector('span') : null;

	errorCon?.classList.remove('error');
	infoCon?.classList.remove('active');
	spanEl && (spanEl.innerHTML = '');
};
const showError: HandleErrorViewingType = (errorCon, message = '') => {
	const infoCon = errorCon?.querySelector('#info-con') || null;
	const spanEl = infoCon ? infoCon?.querySelector('span') : null;

	errorCon?.classList.add('error');
	infoCon?.classList.add('active');
	spanEl && (spanEl.innerHTML = message);
};
const removeCheckboxError: HandleErrorViewingType = (errorCon) => {
	errorCon?.classList.remove('error');
};
const showCheckboxError: HandleErrorViewingType = (errorCon) => {
	errorCon?.classList.add('error');
};

export default formValidator;

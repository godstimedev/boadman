import { useRef } from 'react';
import { InputInfo } from '../../../assets/svgs';
import { StyledInputContainer } from '../styles';
import { v4 as uuidv4 } from 'uuid';
import 'react-phone-number-input/style.css';
import { CodeGroupPropType } from '../types';

const CodeGroup = (props: CodeGroupPropType) => {
	const {
		required,
		name,
		label,
		customLabel,
		// Onchange passed should follow this pattern: (event, name, value => void)
		onChange,
		value = ['', '', '', ''],
		numberOfInputBox = 4,
		...rest
	} = props;

	/* 
	The following dataset attributes are being used by formValidator to determine the manner in which the input will be validated.
	Refer to formValidator file to see what each attribute does
	- data-ignore
	- data-componentid
	- data-customerror
	- data-type
	- data-telvalue
	*/

	const infoRef = useRef<HTMLDivElement>(null);
	const componentRef = useRef<HTMLDivElement>(null);
	const componentId = uuidv4();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
		const inputValue = event.target.value || '';
		const next = event.target.dataset?.next || 'null';
		const newValue = [...value];

		if (inputValue.length > 1) {
			return;
		}

		newValue[index] = inputValue;
		onChange(null, name, newValue);
		infoRef.current?.classList.remove('active');
		componentRef.current?.classList.remove('error');

		if (inputValue.length > 0) {
			(document.querySelector(`#input_${next}_${componentId}`) as HTMLInputElement)?.focus();
		}
	};
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
		if (event.key === 'Backspace') {
			const inputValue = (event.target as HTMLInputElement).value || '';
			const prev = (event.target as HTMLInputElement).dataset?.prev || 'null';

			if (inputValue.length === 0) {
				const newValue = [...value];
				newValue[index - 1] = '';

				onChange(null, name, newValue);

				(document.querySelector(`#input_${prev}_${componentId}`) as HTMLInputElement)?.focus();

				if (index !== 0) {
					infoRef.current?.classList.remove('active');
					componentRef.current?.classList.remove('error');
				}
			}
		}
	};
	const handlePaste = () => {
		navigator.clipboard.readText().then((pastedText) => {
			const shavedText = pastedText.replace(/[^0-9]/g, '');

			const newValue = [];
			for (let i = 0; i < shavedText.length && i < numberOfInputBox; i++) {
				newValue.push(shavedText[i]);
			}

			onChange(null, name, newValue);
			(document.querySelector(`#input_${numberOfInputBox - 1}`) as HTMLInputElement)?.focus();
		});
	};

	return (
		<StyledInputContainer ref={componentRef} id={componentId}>
			{customLabel ? (
				customLabel
			) : label ? (
				<label htmlFor={name}>
					{label} {required ? <span>*</span> : null}
				</label>
			) : null}

			<div className="input-group code-group">
				{Array(numberOfInputBox)
					.fill('')
					.map((_value, index) => (
						<input
							key={index}
							type="number"
							data-type="code"
							data-next={index + 1 !== numberOfInputBox ? index + 1 : ''}
							data-prev={index !== 0 ? index - 1 : ''}
							min={0}
							maxLength={1}
							name={name}
							required={required}
							data-componentid={componentId}
							value={value?.[index] || ''}
							id={`input_${index}_${componentId}`}
							className="code"
							onChange={(event) => handleChange(event, index)}
							onKeyDown={(event) => handleKeyDown(event, index)}
							onPaste={handlePaste}
							{...rest}
						/>
					))}
			</div>

			<div className="info-con" id="info-con" ref={infoRef}>
				<InputInfo /> <span></span>
			</div>
		</StyledInputContainer>
	);
};

export default CodeGroup;

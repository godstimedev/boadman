import { useRef } from 'react';
import { InputInfo } from '../../../assets/svgs';
import { StyledInputContainer } from '../styles';
import { v4 as uuidv4 } from 'uuid';
import 'react-phone-number-input/style.css';
import { TextAreaPropType } from '../types';

const TextArea = (props: TextAreaPropType) => {
	const {
		required,
		name,
		label,
		customLabel,
		// Onchange passed should follow this pattern
		onChange,
		placeholder,
		value,
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
	const componentId = uuidv4();

	return (
		<StyledInputContainer id={componentId}>
			{customLabel ? (
				customLabel
			) : label ? (
				<label htmlFor={name}>
					{label} {required ? <span>*</span> : null}
				</label>
			) : null}

			<div className="input-group">
				<textarea
					name={name}
					cols={10}
					rows={4}
					placeholder={placeholder}
					required={required}
					data-componentid={componentId}
					value={value}
					onChange={(event) => {
						infoRef.current?.classList.remove('active');

						onChange(event);
					}}
					{...rest}
				></textarea>
			</div>
			<div className="info-con" id="info-con" ref={infoRef}>
				<InputInfo /> <span></span>
			</div>
		</StyledInputContainer>
	);
};

export default TextArea;

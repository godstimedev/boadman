import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { StyledInputContainer } from '../styles';
import { DateTimePropType } from '../types';
import { InputDateTime, InputInfo } from '@/assets/svgs';
import DatePicker from 'react-datepicker';

const DateTime = (props: DateTimePropType) => {
	const { name, value, customLabel, onChange, required, label, placeholder } = props;

	const inputRef = useRef<HTMLInputElement>(null);
	const infoRef = useRef<HTMLDivElement>(null);
	const componentRef = useRef<HTMLDivElement>(null);
	const componentId = uuidv4();

	// Wrapper to handle the `onChange` and match it with the prop's function signature
	const handleDateChange = (date: Date | null) => {
		infoRef.current?.classList.remove('active');
		componentRef.current?.classList.remove('error');

		// Directly pass the selected date (or null) to onChange
		onChange(date);
	};

	return (
		<StyledInputContainer ref={componentRef} id={componentId}>
			{customLabel ? (
				customLabel
			) : (
				<label htmlFor={name}>
					{label} {required ? <span>*</span> : null}
				</label>
			)}

			<div className="input-group">
				<DatePicker
					selected={value}
					onChange={handleDateChange}
					showTimeSelect
					dateFormat="MMMM d, yyyy h:mm aa"
					customInput={
						<div className="input-icon">
							<input
								name={name}
								ref={inputRef}
								required={required}
								value={value?.toLocaleDateString()}
								placeholder={placeholder}
								readOnly
							/>

							<InputDateTime />
						</div>
					}
				/>
			</div>

			<div className="info-con" id="info-con" ref={infoRef}>
				<InputInfo /> <span></span>
			</div>
		</StyledInputContainer>
	);
};

export default DateTime;

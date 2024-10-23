import { useState, useRef } from 'react';
import { InputCaretDown, InputInfo, SelectClose } from '../../../assets/svgs';
import { StyledInputContainer } from '../styles';
import { v4 as uuidv4 } from 'uuid';
import { SelectPropType } from '../types';

const Select = (props: SelectPropType) => {
	const {
		// Type advanced means the select component can select multiple values as an answer
		type = 'basic',
		required,
		name,
		label,
		customLabel,
		options = [],

		// Should filter the options as they type
		suggestWhileTyping = false,
		dropdownPosition = 'bottom',
		dropdownAlign = 'center',

		// Onchange passed should follow this pattern
		onChange,
		placeholder,
		value,

		// Works with type advanced. initialSuggestions shows a modal for the user to select from. A dropdown only shows after they type
		initialSuggestions = [],
		suggestionTitle,

		// Allows the user to type in a value of their choice and select it
		allowNewSuggestions = false,

		// Allows an option clicked to trigger an input box
		// Type advanced does not support this
		otherValue = '',
		otherName = '',
		shouldHaveOtherOption = false,
		otherOptionText = 'Other',
		otherOptionPlaceholder = '',
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

	const seperator = '|';
	const inputRef = useRef<HTMLInputElement>(null);
	const infoRef = useRef<HTMLDivElement>(null);
	const componentRef = useRef<HTMLDivElement>(null);
	const componentId = uuidv4();
	const [dropdownOptions, setDropdownOptions] = useState(options);
	const [inputVal, setInputVal] = useState('');

	const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const eventValue = event.target.value;

		const dropdownValue =
			options.find((option) => option.name.toString().toLowerCase() === eventValue.toLowerCase())
				?.value || '';

		if (type === 'basic') {
			onChange(null, name, dropdownValue);
		}
	};
	const handleDropdownFilter = (value = '') => {
		setDropdownOptions(
			options.filter(
				(option) => option.name.toString().toLowerCase().indexOf(value.toLowerCase()) >= 0
			)
		);
	};
	const handleRemoveAdvancedValue = (valueToRemove: string) => {
		const newValue = value
			.split(seperator)
			.filter((val) => val !== valueToRemove)
			.join(seperator);

		setInputVal('');
		onChange(null, name, newValue);
	};
	const handleOtherOptionBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const eventValue = event.target.value;

		setInputVal('');

		if (eventValue) {
			onChange(null, name, '');
			onChange(null, otherName, eventValue);
			handleDropdownFilter();
		}
	};

	return (
		<StyledInputContainer
			ref={componentRef}
			id={componentId}
			$dropdownPosBottom={dropdownPosition === 'bottom' ? true : false}
			$dropdownItemsAlign={dropdownAlign === 'center' ? true : false}
		>
			{customLabel ? (
				customLabel
			) : (
				<label htmlFor={name}>
					{label} {required ? <span>*</span> : null}
				</label>
			)}

			<div className={`input-group ${type === 'advanced' ? 'advanced-group' : ''}`}>
				<div className="input-icon">
					<input
						type="text"
						name={name}
						required={type === 'advanced' ? (required ? (value ? false : true) : required) : required}
						placeholder={placeholder}
						value={
							type === 'advanced' ? inputVal : shouldHaveOtherOption && otherValue ? otherValue : value
						}
						data-componentid={componentId}
						ref={inputRef}
						onBlur={handleBlur}
						onFocus={(event) => {
							if (!event.target.value) {
								handleDropdownFilter();
							}
						}}
						onChange={(event) => {
							infoRef.current?.classList.remove('active');
							componentRef.current?.classList.remove('error');

							if (!otherValue) {
								handleDropdownFilter(event.target.value);
							}
							if (type === 'advanced') {
								setInputVal(event.target.value);
							} else {
								if (shouldHaveOtherOption && otherValue) {
									onChange(null, otherName, event.target.value);
								} else {
									onChange(event);
								}
							}

							setInputVal(event.target.value);
						}}
						readOnly={!suggestWhileTyping}
						{...rest}
					/>

					{/* <div className="svg-con"> */}
					<InputCaretDown />
					{/* </div> */}
				</div>

				{type === 'advanced' && !inputVal.length && initialSuggestions.length ? (
					<div className="dropdown select-advanced-type">
						<span>{suggestionTitle}</span>
						<ul>
							{initialSuggestions.map((suggestion) => (
								<li
									key={suggestion}
									tabIndex={0}
									className={value.split(seperator).includes(suggestion) ? 'active' : ''}
									onKeyUp={(event) => {
										if (event.key === 'Enter') {
											(event.target as HTMLLIElement).click();
										}
									}}
									onClick={(event) => {
										infoRef.current?.classList.remove('active');
										componentRef.current?.classList.remove('error');

										const newValue = value
											? value.split(seperator).includes(suggestion)
												? value
												: [...value.split(seperator), suggestion].join(seperator)
											: suggestion;

										onChange(null, name, newValue);
										(event.target as HTMLLIElement).blur();
									}}
								>
									{suggestion}
								</li>
							))}
						</ul>
					</div>
				) : (
					<ul className="dropdown">
						{dropdownOptions.map((option) => (
							<li
								key={option.value}
								tabIndex={0}
								onKeyUp={(event) => {
									if (event.key === 'Enter') {
										(event.target as HTMLLIElement).click();
									}
								}}
								onClick={(event) => {
									infoRef.current?.classList.remove('active');
									componentRef.current?.classList.remove('error');

									if (type === 'advanced') {
										const newValue = value
											? value.split(seperator).includes(option.value.toString())
												? value
												: [...value.split(seperator), option.value].join(seperator)
											: option.value;

										setInputVal('');
										onChange(null, name, newValue);
									} else {
										onChange(null, name, option.value);
										otherName && onChange(null, otherName, '');
									}

									(event.target as HTMLLIElement).blur();
								}}
							>
								{option.name}
							</li>
						))}
						{allowNewSuggestions && inputVal ? (
							<li
								tabIndex={0}
								onKeyUp={(event) => {
									if (event.key === 'Enter') {
										(event.target as HTMLLIElement).click();
									}
								}}
								onClick={(event) => {
									infoRef.current?.classList.remove('active');
									componentRef.current?.classList.remove('error');

									if (type === 'advanced') {
										const newValue = value
											? value.toLowerCase().split(seperator).includes(inputVal.toLowerCase())
												? value
												: [...value.split(seperator), inputVal].join(seperator)
											: inputVal;

										setInputVal('');
										onChange(null, name, newValue);
									} else {
										onChange(null, name, inputVal);
									}

									(event.target as HTMLLIElement).blur();
								}}
							>
								{inputVal}
							</li>
						) : null}
						{shouldHaveOtherOption ? (
							<div className={`other-option-con ${otherValue ? 'active' : ''}`}>
								<li
									tabIndex={0}
									onClick={(event) => {
										if (event.currentTarget?.parentElement?.parentElement)
											event.currentTarget.parentElement.parentElement.scrollTop =
												event.currentTarget.parentElement.offsetTop;
										setInputVal('');
									}}
								>
									{otherOptionText}

									<input
										type="text"
										name={otherName}
										placeholder={otherOptionPlaceholder}
										value={otherValue}
										data-ignore
										onBlur={handleOtherOptionBlur}
										onChange={(event) => {
											infoRef.current?.classList.remove('active');
											componentRef.current?.classList.remove('error');

											onChange(event);
										}}
									/>
								</li>
							</div>
						) : null}
					</ul>
				)}

				{type === 'advanced' && value ? (
					<div
						className="select-advanced-values"
						onClick={(event) => event.currentTarget === event.target && inputRef.current?.focus()}
					>
						{value.split(seperator).map((val) => (
							<div key={val}>
								{val}
								<span onClick={() => handleRemoveAdvancedValue(val)}>
									<SelectClose />
								</span>
							</div>
						))}
					</div>
				) : null}
			</div>

			<div className="info-con" id="info-con" ref={infoRef}>
				<InputInfo /> <span></span>
			</div>
		</StyledInputContainer>
	);
};

export default Select;

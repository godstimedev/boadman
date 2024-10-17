import { useState, useRef } from 'react';
import { InputCheckmark, InputInfo, InputEye, InputEyeSlashed } from '../../assets/svgs';
import { StyledInputContainer } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { InputGroupPropType } from './types';
import PhoneInput, {
	DefaultInputComponentProps,
	getCountryCallingCode,
} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const InputGroup = (props: InputGroupPropType) => {
	const {
		type = 'text',
		required,
		name,
		label,
		customLabel,
		// Onchange passed should follow this pattern: (event, name, value => void)
		onChange,
		placeholder,
		value,
		defaultCountry = 'NG',
		passwordValid,
		validatePassword = false,
		hidePasswordControls = false,
		customErrorMsg = '',
		variant,
		icon,
		iconPosition = 'left',
		moreInfo,
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

	const isCheckBoxChecked = type === 'checkbox' ? /^true$/i.test(value.toString()) : false;
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [countryCode, setCountryCode] = useState<string | number>(
		getCountryCallingCode(defaultCountry) || '234'
	);
	const infoRef = useRef<HTMLDivElement>(null);
	const componentRef = useRef<HTMLDivElement>(null);
	const componentId = uuidv4();

	const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		switch (type) {
			case 'url':
				if (!value.startsWith('http') && value.length > 0) {
					onChange(undefined, name, `https://${value}`);
				}

				break;
			default:
				return;
		}
	};

	return (
		<StyledInputContainer
			ref={componentRef}
			id={componentId}
			$variant={variant ? variant : 'primary'}
			$posLeft={iconPosition === 'left' && icon ? true : iconPosition === 'right' ? false : undefined}
			className={type === 'password' && validatePassword ? (passwordValid ? 'success' : 'error') : ''}
		>
			{type !== 'checkbox' &&
				(customLabel ? (
					customLabel
				) : label ? (
					<label htmlFor={name}>
						{label} {required ? <span>*</span> : null}
					</label>
				) : null)}

			{type === 'tel' ? (
				<div className="input-group phone-group">
					<div className="input-icon">
						<PhoneInput
							type={type}
							name={name}
							required={required}
							placeholder={placeholder}
							value={value as string}
							data-componentid={componentId}
							data-telvalue={value}
							defaultCountry={defaultCountry}
							onChange={(number) => {
								infoRef.current?.classList.remove('active');
								componentRef.current?.classList.remove('error');

								onChange(undefined, name, number);
							}}
							onCountryChange={(countryCode) => {
								setCountryCode(countryCode ? getCountryCallingCode(countryCode) : 0);
							}}
							{...(rest as DefaultInputComponentProps)}
						/>
						<div className="country-code">+{countryCode}</div>
					</div>
				</div>
			) : type === 'password' ? (
				<div className="input-group">
					<div className="input-icon">
						<input
							type={passwordVisible ? 'text' : 'password'}
							data-type="password"
							name={name}
							required={required}
							placeholder={placeholder}
							value={value}
							data-componentid={componentId}
							data-customerror={customErrorMsg}
							onChange={(event) => {
								infoRef.current?.classList.remove('active');
								componentRef.current?.classList.remove('error');

								onChange(event);
							}}
							{...rest}
						/>

						{!hidePasswordControls ? (
							passwordVisible ? (
								<InputEye
									className="password-control"
									onClick={() => setPasswordVisible((prev) => !prev)}
								/>
							) : (
								<InputEyeSlashed
									className="password-control"
									onClick={() => setPasswordVisible((prev) => !prev)}
								/>
							)
						) : null}
						<InputCheckmark className="checkmark" />
					</div>
				</div>
			) : type === 'checkbox' ? (
				<div
					className="input-group checkbox-container"
					onClick={(event) => {
						onChange(undefined, name, !isCheckBoxChecked);

						infoRef.current?.classList.remove('active');
						event.currentTarget?.classList.remove('error');
					}}
				>
					<input
						type="checkbox"
						name={name}
						required={required}
						checked={isCheckBoxChecked}
						data-componentid={componentId}
						readOnly
						{...rest}
					/>
					<div className={`custom-checkbox ${isCheckBoxChecked ? 'checked' : ''}`}>
						<div />
					</div>
					{customLabel ? (
						customLabel
					) : (
						<label htmlFor={name}>
							{label} {required ? <span>*</span> : null}
						</label>
					)}
				</div>
			) : type === 'search' ? (
				<div className="search-input-group">
					<div className={icon ? 'input-icon' : ''}>
						<input
							type={'text'}
							name={name}
							required={required}
							placeholder={placeholder}
							value={value}
							data-componentid={componentId}
							onChange={(event) => {
								infoRef.current?.classList.remove('active');
								componentRef.current?.classList.remove('error');

								onChange(event);
							}}
							onBlur={handleBlur}
							{...rest}
						/>
						{icon && <div className="search-icon">{icon}</div>}
					</div>
				</div>
			) : (
				<div className="input-group">
					<div className="input-icon">
						<div className="prop-icon">{icon}</div>
						<input
							type={type}
							name={name}
							required={required}
							placeholder={placeholder}
							value={value}
							data-componentid={componentId}
							onChange={(event) => {
								infoRef.current?.classList.remove('active');
								componentRef.current?.classList.remove('error');

								onChange(event);
							}}
							onBlur={handleBlur}
							{...rest}
						/>
					</div>
				</div>
			)}

			<div className="info-wrapper">
				{moreInfo && (
					<div className="more-info">
						<InputInfo /> <span>{moreInfo}</span>
					</div>
				)}
				<div className="info-con" id="info-con" ref={infoRef}>
					<InputInfo /> <span></span>
				</div>
			</div>
		</StyledInputContainer>
	);
};

export default InputGroup;

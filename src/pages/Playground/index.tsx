import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Bracket, RoundProps } from 'react-brackets';
import {
	Button,
	InputGroup,
	CodeGroup,
	Loader,
	Select,
	TextArea,
	Table,
	FaqAccordion,
	Dropdown,
} from '../../ui';
import { Container, Flex } from './styles';
import { useNotify } from '../../hooks';
import { Search } from '../../assets/svgs';
import { COUNTRIES } from '../../constants';
import {
	hasBothUpperAndLower,
	hasMin1Num,
	hasMinOf8Chars,
	hasMin1SpecialChars,
	formValidator,
} from '../../utilities';
import { GeneralChangeEventType } from '../../types';
import DateTime from '@/ui/InputGroup/DateTime';

const Playground = () => {
	const notify = useNotify();

	const [formData, setFormData] = useState({
		search: '',
		date_time: null as Date | null,
		phone_number: '',
		company_website: '',
		startup_stage: '',
		type_of_funding: '',
		designation: '',
		number_of_employees: '',
		old_password: '',
		new_password: '',
		confirm_new_password: '',
		remember_me: false,
		number_of_engineers: '',
		email: '',
		password: '',
		codeOne: ['', '', '', ''],
		codeTwo: ['', '', '', '', '', ''],
		country: '',
		assessments: '',
		location: '',
		stacks: '',
		message: '',
		favorite_color: '',
		other_favorite_color: '',
		favorite_color_again: '',
		other_favorite_color_again: '',
	});

	const handleDateChange = (date: Date | null) => {
		setFormData((prev) => ({ ...prev, date_time: date }));
	};

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value ?? value ?? '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	let newPasswordCustomErrorMsg = '';
	let confirmPasswordCustomErrMsg = '';
	let oldPasswordCustomErrMsg = '';

	if (!hasMinOf8Chars(formData.new_password)) {
		newPasswordCustomErrorMsg = 'Password must contain at least 8+ characters';
	} else if (!hasBothUpperAndLower(formData.new_password)) {
		newPasswordCustomErrorMsg =
			'Password must contain both lower (a-z) and upper case letters (A - Z)';
	} else if (!hasMin1Num(formData.new_password)) {
		newPasswordCustomErrorMsg = 'Password must contain at least 1 number';
	} else if (!hasMin1SpecialChars(formData.new_password)) {
		newPasswordCustomErrorMsg = 'Password must contain at least 1 special character';
	}

	oldPasswordCustomErrMsg = formData.old_password !== '123456' ? 'Incorrect Password' : '';
	confirmPasswordCustomErrMsg =
		formData.confirm_new_password?.length > 0 &&
		!(formData.new_password === formData.confirm_new_password)
			? "Password's don't match"
			: '';

	const tableData = [
		{
			rowId: 1,
			rowData: [
				<>
					<div>Item One</div>
					<span>Item one child</span>
				</>,
				<div>Item Two</div>,
				'Item three',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 2,
			rowData: [
				<>
					<div>Item One</div>
					<span>Item one child</span>
				</>,
				<div>Item Two</div>,
				'Item three',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 3,
			rowData: [
				<>
					<div>Item One</div>
					<span>Item one child</span>
				</>,
				<div>Item Two</div>,
				'Item three',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 4,
			rowData: [
				<>
					<div>Item One</div>
					<span>Item one child</span>
				</>,
				<div>Item Two</div>,
				'Item three',
			],
			onRowClick: () => console.log('clicked'),
		},
		{
			rowId: 5,
			rowData: [
				<>
					<div>Item One</div>
					<span>Item one child</span>
				</>,
				<div>Item Two</div>,
				'Item three',
			],
			onRowClick: () => console.log('clicked'),
		},
	];

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(formData);

		if (
			!formValidator([
				...event.currentTarget.querySelectorAll('input'),
				...event.currentTarget.querySelectorAll('textarea'),
			])
		)
			return;
	};

	// const rounds: RoundProps[] = [
	// 	{
	// 		title: 'Round one',
	// 		seeds: [
	// 			{
	// 				id: 1,
	// 				date: new Date().toDateString(),
	// 				teams: [{ name: 'Team A' }, { name: 'Team B' }],
	// 			},
	// 			{
	// 				id: 2,
	// 				date: new Date().toDateString(),
	// 				teams: [{ name: 'Team C' }, { name: 'Team D' }],
	// 			},
	// 		],
	// 	},
	// 	{
	// 		title: 'Round one',
	// 		seeds: [
	// 			{
	// 				id: 3,
	// 				date: new Date().toDateString(),
	// 				teams: [{ name: 'Team A' }, { name: 'Team C' }],
	// 			},
	// 		],
	// 	},
	// ];

	return (
		<Container>
			<h1>App components</h1>
			<h3>Buttons</h3>
			<br />
			<Flex>
				<Flex $direction="column" $align="center">
					<Button size="large" shadow>
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Primary (default)</li>
						<li>Size: Big</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="secondary">Button</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Secondary</li>
						<li>Size: Medium (default)</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="outline">Button</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Outline</li>
						<li>Size: Medium (default)</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="subtle" size="small">
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Subtle</li>
						<li>Size: Small</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="text">Button</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Text</li>
						<li>Size: Medium (default)</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button loading size="large">
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Primary (default)</li>
						<li>Size: Big</li>
						<li>Loading</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button variant="text" loading>
						Button
					</Button>

					<ul>
						<li>Props</li>
						<li>Variant: Text</li>
						<li>Size: Medium (default)</li>
						<li>Loading</li>
					</ul>
				</Flex>
			</Flex>
			{/* <br />
			<br />
			<h3>Brackets</h3>
			<br />
			<Flex>
				<Bracket rounds={rounds} />
			</Flex> */}
			<br />
			<br />
			<h3>Dropdowns</h3>
			<br />
			<Flex>
				<Flex $direction="column" $align="center">
					<Dropdown trigger={<button>Dropdown</button>} position="bottom">
						<div>
							<button>Item One</button>
							<button>Item Two</button>
							<button>Item Three</button>
						</div>
					</Dropdown>

					<ul>
						<li>Props</li>
						<li>position: bottom (default) - width starts on the left and grows to the right</li>
						<li>trigger: A button element</li>
						<li>children: A div element with buttons containing the dropdown items</li>
					</ul>
				</Flex>
				<Flex $direction="column" $align="center">
					<Dropdown trigger={<button>Dropdown</button>} position="top">
						<div>
							<button>Item One</button>
							<button>Item Two</button>
							<button>Item Three</button>
						</div>
					</Dropdown>

					<ul>
						<li>Props</li>
						<li>position: top - width starts on the left and grows to the right</li>
						<li>trigger: A button element</li>
						<li>children: A div element with buttons containing the dropdown items</li>
					</ul>
				</Flex>
				<Flex $direction="column" $align="center">
					<Dropdown trigger={<button>Dropdown</button>} position="topRight">
						<div>
							<button>Item One</button>
							<button>Item Two</button>
							<button>Item Three</button>
						</div>
					</Dropdown>

					<ul>
						<li>Props</li>
						<li>position: topRight - width starts on the right and grows to the left</li>
						<li>trigger: A button element</li>
						<li>children: A div element with buttons containing the dropdown items</li>
					</ul>
				</Flex>
				<Flex $direction="column" $align="center">
					<Dropdown trigger={<button>Dropdown</button>} position="bottomRight">
						<div>
							<button>Item One</button>
							<button>Item Two</button>
							<button>Item Three</button>
						</div>
					</Dropdown>

					<ul>
						<li>Props</li>
						<li>position: bottomRight - width starts on the right and grows to the left</li>
						<li>trigger: A button element</li>
						<li>children: A div element with buttons containing the dropdown items</li>
					</ul>
				</Flex>
			</Flex>
			<br />
			<br />
			<br />
			<br />
			<h3>DateTime Picker</h3>
			<br />
			<Flex>
				<Flex $align="center">
					<DateTime
						name="date_time"
						placeholder="Date Time"
						value={formData.date_time}
						onChange={handleDateChange}
					/>
				</Flex>
			</Flex>
			<br />
			<br />
			<h3>Accordion</h3>
			<br />
			<div className="w-full">
				<Flex>
					<FaqAccordion />
				</Flex>
			</div>
			<br />
			<br />
			<h3>Table</h3>
			<br />
			<p style={{ maxWidth: '60%', margin: '0 auto 2rem' }}>
				The Prev button, Next button, Items per page select box only changes the params of the url, if
				there are multiple tables on the page, pass the table number/id
			</p>
			<Flex>
				<Table
					maxPage={3}
					loading={false}
					columnNames={['Role', 'Type', 'Status']}
					itemsPerPageOptions={[2, 4, 6]}
					tableData={tableData}
				/>

				<ul>
					<li>Props</li>
					<li>maxPage: 3</li>
					<li>loading: false</li>
					<li>columnNames: ['Role', 'Type', 'Status']</li>
					<li>itemsPerPageOptions: [2, 4, 6]</li>
					<li>tableData: [&#123; rowId, rowData, onRowClick: () =&gt; &#123;&#125; &#125;]</li>
					<li>tableNumber: 1 (default)</li>
				</ul>
			</Flex>
			<br />
			<br />
			<Flex>
				<Table
					maxPage={4}
					loading={false}
					columnNames={['Role', 'Type', 'Status']}
					tableData={tableData}
					tableNumber={2}
				/>

				<ul>
					<li>Props</li>
					<li>maxPage: 4</li>
					<li>loading: false</li>
					<li>columnNames: ['Role', 'Type', 'Status']</li>
					<li>itemsPerPageOptions: [10, 20, 30] (default)</li>
					<li>tableData: [&#123; rowId, rowData, onRowClick: () =&gt; &#123;&#125; &#125;]</li>
					<li>tableNumber: 2</li>
				</ul>
			</Flex>
			<br />
			<br />
			<Flex>
				<Table
					maxPage={5}
					loading={false}
					columnNames={['Role', 'Type', 'Status']}
					tableData={tableData}
					tableNumber={3}
				/>

				<ul>
					<li>Props</li>
					<li>maxPage: 5</li>
					<li>loading: false</li>
					<li>columnNames: ['Role', 'Type', 'Status']</li>
					<li>itemsPerPageOptions: [10, 20, 30] (default)</li>
					<li>tableData: [&#123; rowId, rowData, onRowClick: () =&gt; &#123;&#125; &#125;]</li>
					<li>tableNumber: 3</li>
				</ul>
			</Flex>
			{/* InputGroup */}
			<form onSubmit={handleSubmit} noValidate>
				<h3>InputGroup</h3>

				<br />
				<Flex>
					<div>
						<InputGroup
							type="number"
							label="Number of Engineers"
							name="number_of_engineers"
							value={formData.number_of_engineers}
							onChange={handleChange}
							placeholder="e.g. 200"
							required
						/>
						<ul>
							<li>Props of InputGroup</li>
							<li>type: number</li>
							<li>label: Number of Engineers</li>
							<li>name: number_of_engineers</li>
							<li>value: ''</li>
							<li>onChange: handleChange</li>
							<li>placeholder: e.g. 200</li>
							<li>required</li>
						</ul>
					</div>

					<div>
						<InputGroup
							placeholder="Search..."
							name="search"
							autoComplete="off"
							value={formData.search}
							onChange={handleChange}
							icon={<Search />}
						/>
						<ul>
							<li>Props of InputGroup</li>
							<li>placeholder: Search...</li>
							<li>name: search</li>
							<li>autoComplete: off</li>
							<li>Value: ''</li>
							<li>onChange: handleChange</li>
							<li>icon: &lt;Search /&gt;</li>
						</ul>
					</div>

					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.email}
							name="email"
							type="email"
							placeholder="e.g. jamesdsn@microsoft.com"
							label="Work Email"
							required
						/>
						<ul>
							<li>Props of InputGroup</li>
							<li>placeholder: Search...</li>
							<li>name: email</li>
							<li>type: email</li>
							<li>value: ''</li>
							<li>onChange: handleChange</li>

							<li>placeholder: e.g. jamesdsn@microsoft.com</li>
							<li>label: Work Email</li>
							<li>required</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />

				<Flex $flex={1}>
					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.password}
							name="password"
							type="password"
							placeholder="--------------------------"
							customLabel={
								<>
									<label
										htmlFor="password"
										className="password-label"
										style={{ display: 'flex', justifyContent: 'space-between' }}
									>
										<div>
											Password <span>*</span>
										</div>{' '}
										<Link to={'/playground'} style={{ color: 'blue' }}>
											Reset Password
										</Link>
									</label>
								</>
							}
							required
						/>

						<ul>
							<li>Props of InputGroup</li>
							<li>onChange: handleChange</li>
							<li>value: ''</li>
							<li>name: password</li>
							<li>type: password</li>
							<li>placeholder: --------------------------</li>
							<li>required</li>
							<li>
								customLabel:{' '}
								{`
									<>
										<label htmlFor="password" className="password-label" style={{display: "flex", justifyContent: "space-between"}}>
											<div>
												Password <span>*</span>
											</div>{' '}
											<Link to={'/playground'} style={{color: "blue"}}>Reset Password</Link>
										</label>
									</>
									`}
							</li>
						</ul>
					</div>

					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.old_password}
							name="old_password"
							type="password"
							placeholder="--------------------------"
							label="Old Password"
							required
							hidePasswordControls
							customErrorMsg={oldPasswordCustomErrMsg}
						/>

						<ul>
							<li>Props of InputGroup</li>
							<li>onChange: handleChange</li>
							<li>value: formData.old_password</li>
							<li>name: old_password</li>
							<li>type: password</li>
							<li>placeholder: --------------------------</li>
							<li>label: Old Password</li>
							<li>required</li>
							<li>hidePasswordControls</li>
							<li>customErrorMsg: {oldPasswordCustomErrMsg} (will show error if password !== 123456)</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />

				<Flex $flex={1}>
					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.new_password}
							name="new_password"
							type="password"
							placeholder="--------------------------"
							label="New Password"
							required
							customErrorMsg={newPasswordCustomErrorMsg}
						/>

						<ul>
							<li>Props of InputGroup</li>
							<li>onChange: handleChange</li>
							<li>value: formData.new_password</li>
							<li>name: new_password</li>
							<li>type: password</li>
							<li>placeholder: --------------------------</li>
							<li>label: New Password</li>
							<li>required</li>
							<li>customErrorMsg: {newPasswordCustomErrorMsg}</li>
						</ul>
					</div>
					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.confirm_new_password}
							name="confirm_new_password"
							type="password"
							placeholder="--------------------------"
							label="Confirm New Password"
							required
							validatePassword={formData.confirm_new_password?.length > 0}
							passwordValid={formData.new_password === formData.confirm_new_password}
							customErrorMsg={confirmPasswordCustomErrMsg}
						/>

						<ul>
							<li>Props of InputGroup</li>
							<li>onChange: handleChange</li>
							<li>value:''</li>
							<li>name: confirm_new_password</li>
							<li>type: password</li>
							<li>placeholder: --------------------------</li>
							<li>label: Confirm New Password</li>
							<li>required</li>
							<li>
								validatePassword: formData.confirm_new_password?.length &gt; 0 (
								{(formData.confirm_new_password?.length > 0).toString()})
							</li>
							<li>
								passwordValid: (formData.new_password === formData.confirm_new_password).toString()) (
								{(formData.new_password === formData.confirm_new_password).toString()})
							</li>
							<li>customErrorMsg={confirmPasswordCustomErrMsg} (type to see)</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />

				<Flex $flex={1}>
					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.phone_number}
							name="phone_number"
							type="tel"
							placeholder="123456789"
							label="Contact Number"
							required
						/>

						<ul>
							<li>Props of InputGroup</li>
							<li>onChange: handleChange</li>
							<li>value: ''</li>
							<li>name: phone_number</li>
							<li>type: tel</li>
							<li>placeholder: 123456789</li>
							<li>label: Contact Number</li>
							<li>required</li>
						</ul>
					</div>

					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.company_website}
							name="company_website"
							type="url"
							placeholder="e.g. www.microsoft.com"
							label="Company Website"
							required
						/>

						<ul>
							<li>Props of InputGroup</li>
							<li>onChange: handleChange</li>
							<li>value: ''</li>
							<li>name: company_website</li>
							<li>type: url</li>
							<li>placeholder: e.g. www.microsoft.com</li>
							<li>label: Company Website</li>
							<li>required</li>
						</ul>
					</div>

					<div>
						<InputGroup
							onChange={handleChange}
							value={formData.remember_me.toString()}
							name="remember_me"
							type="checkbox"
							label="Remember Me"
							required
						/>

						<ul>
							<li>Props of InputGroup</li>
							<li>onChange: handleChange</li>
							<li>value: {formData.remember_me.toString()}</li>
							<li>name: remember_me</li>
							<li>type: checkbox</li>
							<li>label: Remember Me</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />
			</form>
			{/* CodeGroup */}
			<form onSubmit={handleSubmit} noValidate>
				<h3>CodeGroup</h3>
				<br />
				<Flex $flex={1}>
					<div>
						<CodeGroup
							onChange={handleChange}
							value={formData.codeOne}
							name="codeOne"
							label="Verification Code One"
							required
						/>

						<ul>
							<li>Props of CodeGroup</li>
							<li>onChange: handleChange</li>
							<li>value: ''</li>
							<li>name: codeOne</li>
							<li>label: Verification Code One</li>
							<li>required</li>
							<li>numberOfInputBox: 4 (default)</li>
						</ul>
					</div>
					<div>
						<CodeGroup
							onChange={handleChange}
							value={formData.codeTwo}
							name="codeTwo"
							label="Verification Code Two"
							required
							numberOfInputBox={6}
						/>

						<ul>
							<li>Props of CodeGroup</li>
							<li>onChange: handleChange</li>
							<li>value: ''</li>
							<li>name: codeTwo</li>
							<li>label: Verification Code Two</li>
							<li>required</li>
							<li>numberOfInputBox: 6</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />
			</form>
			{/* Select */}
			<form onSubmit={handleSubmit} noValidate>
				<h3>Select</h3>
				<br />
				<Flex $flex={1}>
					<div>
						<Select
							onChange={handleChange}
							value={formData.country}
							name="country"
							dropdownPosition="top"
							suggestWhileTyping={true}
							options={COUNTRIES.map((country) => ({ name: country, value: country }))}
							placeholder="e.g. Canada"
							label="Country"
							required
						/>

						<ul>
							<li>Props of Select</li>
							<li>onChange: handleChange</li>
							<li>value: ''</li>
							<li>name: country</li>
							<li>dropdownPosition: top</li>
							<li>suggestWhileTyping: true</li>
							<li>options: COUNTRIES</li>
							<li>placeholder: e.g. Canada</li>
							<li>label: Country</li>
							<li>required</li>
						</ul>
					</div>

					<div>
						<Select
							label="Location"
							name="location"
							value={formData.location}
							onChange={handleChange}
							options={COUNTRIES.map((country) => ({ name: country, value: country }))}
							placeholder="Select"
							required
						/>

						<ul>
							<li>Props of Select</li>
							<li>label: Location</li>
							<li>name: location</li>
							<li>value: ''</li>
							<li>onChange: handleChange</li>
							<li>options: COUNTRIES</li>
							<li>placeholder: Select</li>
							<li>required</li>
							<li>dropdownPosition: bottom (default)</li>
							<li>suggestWhileTyping: false (default)</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />

				<Flex $flex={1}>
					<div>
						<Select
							label="Favorite Color"
							name="favorite_color"
							value={formData.favorite_color}
							onChange={handleChange}
							options={['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'].map((color) => ({
								name: color,
								value: color,
							}))}
							placeholder="Select your favorite color"
							required
							otherValue={formData.other_favorite_color}
							otherName="other_favorite_color"
							shouldHaveOtherOption
							otherOptionText="Other"
							otherOptionPlaceholder="What's your other favorite color?"
						/>

						<ul>
							<li>label: Favorite Color</li>
							<li>name: favorite_color</li>
							<li>value: formData.favorite_color</li>
							<li>onChange: handleChange</li>
							<li>options: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']</li>
							<li>placeholder: Select your favorite color</li>
							<li>required</li>
							<li>otherValue: formData.other_favorite_color</li>
							<li>otherName: other_favorite_color</li>
							<li>shouldHaveOtherOption: true</li>
							<li>otherOptionText: Other</li>
							<li>otherOptionPlaceholder: What's your other favorite color?</li>
						</ul>
					</div>
					<div>
						<Select
							label="Favorite Color Again"
							name="favorite_color_again"
							value={formData.favorite_color_again}
							onChange={handleChange}
							options={['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'].map((color) => ({
								name: color,
								value: color,
							}))}
							placeholder="Select your favorite color again"
							required
							otherValue={formData.other_favorite_color_again}
							otherName="other_favorite_color_again"
							shouldHaveOtherOption={true}
							otherOptionText="Other"
							suggestWhileTyping
							allowNewSuggestions
							otherOptionPlaceholder="What's your other favorite color again?"
						/>

						<ul>
							<li>label: Favorite Color</li>
							<li>name: favorite_color_again</li>
							<li>value: formData.favorite_color_again</li>
							<li>onChange: handleChange</li>
							<li>options: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']</li>
							<li>placeholder: Select your favorite color again</li>
							<li>required</li>
							<li>otherValue: formData.other_favorite_color_again</li>
							<li>otherName: other_favorite_color_again</li>
							<li>shouldHaveOtherOption: true</li>
							<li>otherOptionText: Other</li>
							<li>suggestWhileTyping</li>
							<li>allowNewSuggestions</li>
							<li>otherOptionPlaceholder: What's your other favorite color again?</li>
						</ul>
						<br />
						<p>
							<b>Note:</b> Use either shouldHaveOtherOption or allowNewSuggestions, you shouldn't use the
							two as done above. It could be confusing to the user
						</p>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />

				<Flex $flex={1}>
					<div>
						<Select
							label="Stacks Combination"
							name="assessments"
							value={formData.assessments}
							onChange={handleChange}
							options={[
								'Personality Test',
								'Cognitive Test',
								'Coding test',
								'Role-based Test',
								'Remote work Assessment',
								'Language Proficiency Test',
								'Background Test',
							].map((stack) => ({ name: stack, value: stack }))}
							placeholder="Select assessment(s)"
							required
							type="advanced"
						/>

						<ul>
							<li>label: Stacks Combination</li>
							<li>name: assessments</li>
							<li>value: ''</li>
							<li>onChange: handleChange</li>
							<li>options: []</li>
							<li>placeholder: Select assessment(s)</li>
							<li>required</li>
							<li>type: advanced</li>
						</ul>
					</div>
					<div>
						<Select
							suggestWhileTyping={true}
							label="Stacks Combination"
							name="stacks"
							value={formData.stacks}
							onChange={handleChange}
							options={[
								'Python',
								'Javascript',
								'Docker',
								'AWS',
								'Jenkins',
								'React',
								'Node.js',
								'Chef',
								'Azure',
								'Bamboo',
								'Puppet',
								'Shell',
							].map((stack) => ({ name: stack, value: stack }))}
							placeholder="Type to search..."
							required
							dropdownPosition="top"
							type="advanced"
							suggestionTitle="Suggested stacks:"
							initialSuggestions={['Python', 'Javascript', 'Docker', 'AWS']}
							allowNewSuggestions={true}
						/>

						<ul>
							<li>suggestWhileTyping: true</li>
							<li>label: Stacks Combination</li>
							<li>name: stacks</li>
							<li>value: ''</li>
							<li>onChange: handleChange</li>
							<li>options: []</li>
							<li>placeholder: Type to search...</li>
							<li>required</li>
							<li>dropdownPosition: top</li>
							<li>type: advanced</li>
							<li>suggestionTitle: Suggested stacks:</li>
							<li>initialSuggestions: ['Python', 'Javascript', 'Docker', 'AWS']</li>
							<li>allowNewSuggestions: true</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />
				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
				<br />
				<br />
			</form>
			{/* TextArea */}
			<form onSubmit={handleSubmit} noValidate>
				<h3>TextArea</h3>
				<br />

				<Flex>
					<div>
						<TextArea
							label="Message"
							placeholder="Provide more details..."
							value={formData.message}
							name="message"
							onChange={handleChange}
						/>

						<ul>
							<li>Props of TextArea</li>
							<li>onChange: handleChange</li>
							<li>value: ''</li>
							<li>name: message</li>
							<li>label: Message</li>
							<li>placeholder: Provide more details...</li>
						</ul>
					</div>
				</Flex>
				<br />
				<br />

				<center>
					<Button size="large" type="submit">
						Submit
					</Button>
				</center>
			</form>
			<br />
			<br />
			<h3>Loader</h3>
			<br />
			<Flex>
				<Flex $direction="column" $align="center">
					<Loader />

					<ul>
						<li>Props</li>
						<li>Size: null (default)</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Loader size="2rem" />

					<ul>
						<li>Props</li>
						<li>Size: 2rem</li>
					</ul>
				</Flex>
			</Flex>
			<br />
			<br />
			<h1>Hooks</h1>
			<h3>useNotify</h3>
			<p>Click button to view effect</p>
			<br />
			<Flex>
				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of an info toast',
								toastOptions: { toastId: 'playground_toast_info' },
							})
						}
					>
						Info
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example toast'</li>
						<li>Status: info (default)</li>
						<li>Variant: major (default)</li>
						<li>ToastOptions: &#123; toastId: 'playground_toast_info' &#125;</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of a success toast',
								status: 'success',
								toastOptions: { toastId: 'playground_toast_success' },
							})
						}
					>
						Success
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example of a success toast'</li>
						<li>Status: success</li>
						<li>Variant: major (default)</li>
						<li>ToastOptions: &#123; toastId: 'playground_toast_success' &#125;</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of an error toast',
								status: 'error',
								toastOptions: { toastId: 'playground_toast_error' },
							})
						}
					>
						Error
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example of an error toast'</li>
						<li>Status: error</li>
						<li>Variant: major (default)</li>
						<li>ToastOptions: &#123; toastId: 'playground_toast_error' &#125;</li>
					</ul>
				</Flex>

				<Flex $direction="column" $align="center">
					<Button
						onClick={() =>
							notify({
								message: 'This is an example of a minor toast',
								variant: 'minor',
								toastOptions: { toastId: 'playground_toast_minor', position: 'bottom-center' },
							})
						}
					>
						Error
					</Button>

					<ul>
						<li>Props</li>
						<li>Message: 'This is an example of a minor toast'</li>
						<li>Status: info (default)</li>
						<li>Variant: minor</li>
						<li>
							ToastOptions: &#123; toastId: 'playground_toast_minor', position: 'bottom-center' &#125;
						</li>
					</ul>
				</Flex>
			</Flex>
			<br />
			<br />
		</Container>
	);
};

export default Playground;

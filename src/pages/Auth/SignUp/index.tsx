import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import { useState } from 'react';
import { GeneralChangeEventType } from '@/types';
import { APP_ROUTES } from '@/constants';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		phone_number: '',
		password: '',
		confirm_password: '',
		terms: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<Container>
			<div className="wrapper">
				<div className="content">
					<div>
						<h3>Create an Account</h3>
						<p>Provide Credentials below to create an Account</p>
					</div>

					<form onSubmit={handleSubmit}>
						<InputGroup
							type="text"
							name="username"
							placeholder="Username"
							value={formData.username}
							onChange={handleChange}
							variant="secondary"
						/>
						<InputGroup
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
							onChange={handleChange}
							variant="secondary"
						/>
						<InputGroup
							type="tel"
							name="phone_number"
							placeholder="xxx xxxx xxxx"
							value={formData.phone_number}
							onChange={handleChange}
							variant="secondary"
						/>
						<InputGroup
							type="password"
							name="password"
							placeholder="Password"
							value={formData.password}
							onChange={handleChange}
							variant="secondary"
						/>
						<InputGroup
							type="password"
							name="confirm_password"
							placeholder="Confirm Password"
							value={formData.confirm_password}
							onChange={handleChange}
							variant="secondary"
						/>
						<InputGroup
							type="checkbox"
							name="terms"
							// placeholder="Confirm Password"
							checked={false}
							value={formData.terms}
							onChange={handleChange}
							variant="secondary"
							customLabel={
								<>
									<label
										htmlFor="terms"
										className="text-start !text-base !leading-5 !font-normal !text-[#979797]"
									>
										I have read and agree to Boardman stated conditions in{' '}
										<Link to={'#'} className="text-[#FF5733] font-medium">
											Privacy Policy
										</Link>{' '}
										and{' '}
										<Link to={'#'} className="text-[#FF5733] font-medium">
											Terms Conditions
										</Link>
									</label>
								</>
							}
						/>

						<div className="button">
							<Button type="submit" variant="primary" size="large">
								Create Account
							</Button>

							<p>
								If you already have an account, you can <br className="sm:hidden" />{' '}
								<Link to={APP_ROUTES.login}> Login here </Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default SignUp;

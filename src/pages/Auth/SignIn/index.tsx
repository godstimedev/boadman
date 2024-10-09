import { Button, InputGroup } from '@/ui';
import { Container } from './styles';
import { useState } from 'react';
import { GeneralChangeEventType } from '@/types';
import { APP_ROUTES } from '@/constants';
import { Link } from 'react-router-dom';

const SignIn = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
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
						<h3>Sign In</h3>
						<p>Provide Credentials below to Login</p>
					</div>

					<form onSubmit={handleSubmit}>
						<InputGroup
							type="email"
							name="email"
							placeholder="Email"
							value={formData.email}
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

						<div className="button">
							<Link to={APP_ROUTES.dashboard}>
								<Button type="submit" variant="primary" size="large">
									Login
								</Button>
							</Link>

							<p>
								Don't have an account, I want <br className="sm:hidden" />{' '}
								<Link to={APP_ROUTES.register}>Get Started</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
};

export default SignIn;

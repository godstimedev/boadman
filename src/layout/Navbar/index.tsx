import { Link, NavLink } from 'react-router-dom';
// import { Boadman } from '../../assets/images';
import { Container } from './styles';
import { Button } from '../../ui';
import { BoadmanLogo, MenuIcon, NavClose } from '../../assets/svgs';
import { useState } from 'react';
import { APP_ROUTES } from '@/constants';

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);

	return (
		<Container>
			<nav>
				<Link to={APP_ROUTES.home}>
					{/* <img src={Boadman} alt="Boadman Logo" /> */}
					<BoadmanLogo />
				</Link>

				<div className="hidden lg:flex gap-28">
					<ul className="flex items-center gap-10">
						<li className="">
							<NavLink to="/">About</NavLink>
						</li>
						<li>
							<NavLink to="/">Rewards</NavLink>
						</li>
						<li>
							<NavLink to="/">How it works</NavLink>
						</li>
						<li>
							<NavLink to="/">Contact</NavLink>
						</li>
					</ul>

					<div className="flex items-center gap-4">
						<NavLink to={APP_ROUTES.login}>
							<Button variant="secondary">Login</Button>
						</NavLink>
						<NavLink to={APP_ROUTES.register}>
							<Button variant="primary">Get Started for free</Button>
						</NavLink>
					</div>
				</div>

				{showNav ? (
					<button
						className="text-xl font-bold transition-all py-[.375rem] px-3"
						onClick={() => setShowNav(false)}
					>
						<NavClose />
					</button>
				) : (
					<button
						onClick={() => setShowNav(!showNav)}
						className="transition-all lg:hidden cursor-pointer "
					>
						<MenuIcon />
					</button>
				)}

				<div className={`${showNav ? 'show' : 'close'} mobile-nav`}>
					<ul className="flex flex-col justify-start items-center gap-10">
						<li className="text-xl">
							<NavLink to="/">About</NavLink>
						</li>
						<li className="text-xl">
							<NavLink to="/">Rewards</NavLink>
						</li>
						<li className="text-xl">
							<NavLink to="/">How it works</NavLink>
						</li>
						<li className="text-xl">
							<NavLink to="/">Contact</NavLink>
						</li>
					</ul>

					<div className="flex items-center gap-6 mt-24">
						<NavLink to={APP_ROUTES.login}>
							<Button variant="secondary" size="large">
								Login
							</Button>
						</NavLink>
						<NavLink to={APP_ROUTES.register}>
							<Button variant="primary" size="large">
								Get Started for free
							</Button>
						</NavLink>
					</div>
				</div>
			</nav>
		</Container>
	);
};

export default Navbar;

import { Container } from './styles';
// import { Boadman } from '../../assets/images';
import { Button } from '../../ui';
import { BoadmanLogo, Instagram, Linkedin, TikTok, X, YouTube } from '../../assets/svgs';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<Container>
			<div className="top">
				<div className="space-y-5">
					<BoadmanLogo />
					<p className="lg:pr-8 leading-6">
						We are a one-of-a-kind platform, where everyone plays, enjoys themselves and most importantly,
						win prizes.
					</p>
					<div className="pt-4">
						<Button variant="primary" size="large">
							Get Started
						</Button>
					</div>
				</div>

				<div className="space-y-3">
					<h6 className="text-[1.5rem]">Links</h6>
					<ul>
						<li>
							<Link to={'/'}>About</Link>
						</li>
						<li>
							<Link to={'/'}>Rewards</Link>
						</li>
						<li>
							<Link to={'/'}>Articles</Link>
						</li>
						<li>
							<Link to={'/'}>Blogs</Link>
						</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h6 className="text-[1.5rem]">Contact</h6>
					<ul>
						<li>
							<Link to={'mailto:info@boadman.com'}>info@boadman.com</Link>
						</li>
						<li>
							<Link to={'tel:+477-8556-7851'}>+477-8556-7851</Link>
						</li>
					</ul>
				</div>

				<div className="space-y-3">
					<h6 className="text-[1.5rem]">We're Online</h6>
					<p className="leading-6">Follow us for updates, events and ways to earn.</p>
					<div className="flex items-center gap-4 pt-4 socials">
						<Link to={'/'}>
							<X />
						</Link>
						<Link to={'/'}>
							<Linkedin />
						</Link>
						<Link to={'/'}>
							<Instagram />
						</Link>
						<Link to={'/'}>
							<TikTok />
						</Link>
						<Link to={'/'}>
							<YouTube />
						</Link>
					</div>
				</div>
			</div>

			<div className="bottom">
				<div className="flex gap-4 items-center max-sm:flex-col max-sm:mb-8">
					<p>
						<Link to={'/'}>Terms of Use</Link>
					</p>
					<p>
						<Link to={'/'}>Privacy Policy</Link>
					</p>
					<p>
						<Link to={'/'}>Code of Conduct</Link>
					</p>
					<p>
						<Link to={'/'}>FAQ</Link>
					</p>
				</div>

				<p className="max-lg:py-2">© Boadman 2024. All Rights Reserved.</p>
				<div className="flex gap-4 items-center flex-wrap max-lg:mt-4">
					<p>
						<Link to={'/'}>Refund Policy</Link>
					</p>
					<p>
						<Link to={'/'}>Community Guidelines</Link>
					</p>
				</div>
			</div>
		</Container>
	);
};

export default Footer;

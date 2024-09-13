import {
	Achievement1,
	Achievement2,
	Achievement3,
	Achievement4,
	Achievement5,
	Achievement6,
	GameAmount,
	GamePointEarned,
	GamerAvatar,
	GameTime,
	StyledCheckmark,
} from '../../../assets/svgs';
import { Button } from '../../../ui';
import { CursorIllustration, HeroAvatar } from '../../../assets/images';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<h1 className="display1">
				Game and <span>earn</span> by <br /> expanding your passion
			</h1>

			<p className="md:text-xl md:leading-10">
				We are a one-of-a-kind platform, where everyone plays, enjoys themselves <br /> and most
				importantly, win prizes.
			</p>

			{/* Game Card */}
			<div className="gamer-card lg:w-[950px] lg:h-[290px] max-md:py-4 max-md:pr-2  sm:pl-[1rem] sm:pr-[5rem]">
				<div className="max-w-full ">
					<img src={HeroAvatar} alt="/" />
				</div>

				<div className="gamer-info flex flex-col space-y-1 md:space-y-4">
					<div className="flex justify-between items-center">
						<div className="flex flex-col items-start max-md:gap-1">
							<span className="card-title">Gamer</span>
							<div className="flex items-center md:gap-1">
								<h6 className="whitespace-nowrap">Flunk god</h6>
								<StyledCheckmark className="!w-6" />
							</div>
						</div>

						<Button variant="primary" size="small" className="whitespace-nowrap max-sm:!px-2 !ml-2">
							View Profile
						</Button>
					</div>

					<div className="flex max-lg:flex-col gap-3 lg:gap-8">
						<div className="text-start">
							<span className="card-title">Latest Achievements</span>
							<div className="flex items-center lg:gap-1 flex-wrap">
								<Achievement1 />
								<Achievement2 />
								<Achievement3 />
								<Achievement4 />
								<Achievement5 />
								<Achievement6 />
								<p className="card-text">+10</p>
							</div>
						</div>
						<span className="h-[3.2rem] w-[1.17px] bg-[#313337] my-auto max-lg:hidden" />
						<div className="text-start hidden sm:block">
							<span className="card-title">Joined team</span>
							<div className="flex items-center gap-6">
								<div className="flex items-center  stacked-avatar">
									<GamerAvatar />
									<GamerAvatar />
									<GamerAvatar />
									<GamerAvatar />
								</div>
								<p className="card-text">+10</p>
							</div>
						</div>
					</div>

					<hr />

					<div className="flex flex-wrap max-lg:justify-between lg:gap-6 text-start">
						<div className="flex items-center gap-2">
							<GameTime />
							<div className="space-y-[-.4rem]">
								<span className="card-title">Played</span>
								<p className="card-text">360 hours</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<GameAmount />
							<div className="space-y-[-.4rem]">
								<span className="card-title">Games</span>
								<p className="card-text">340</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<GamePointEarned />
							<div className="space-y-[-.4rem]">
								<span className="card-title">Won</span>
								<p className="card-text">170</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<GamePointEarned />
							<div className="space-y-[-.4rem]">
								<span className="card-title">Earned</span>
								<p className="card-text">1200 coins</p>
							</div>
						</div>
					</div>
				</div>
				<img className="cursor max-lg:w-20" src={CursorIllustration} alt="/" />
			</div>

			<div className="my-8">
				<Button variant="primary" size="large" shadow>
					Get Started
				</Button>
			</div>
		</Container>
	);
};

export default Hero;

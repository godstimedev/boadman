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
	HeroAvatar,
	StyledCheckmark,
} from '../../../assets/svgs';
import { Button } from '../../../ui';
import { CursorIllustration } from '../../../assets/images';
import { Container } from './styles';

const Hero = () => {
	return (
		<Container>
			<h1>
				Game and <span>earn</span> by <br className="max-sm:hidden" /> expanding your passion
			</h1>

			<p className="md:text-xl">
				We are a one-of-a-kind platform, where everyone plays, enjoys themselves{' '}
				<br className="max-sm:hidden" /> and most importantly, win prizes.
			</p>

			{/* Game Card */}
			<div className="gamer-card ">
				<div className="avatar">
					{/* <img src={HeroAvatar} alt="/" /> */}
					<HeroAvatar />
				</div>

				<div className="gamer-info ">
					<div>
						<div>
							<span className="">Gamer</span>
							<div>
								<h6>Flunk god</h6>
								<StyledCheckmark className="!w-6" />
							</div>
						</div>

						<Button
							variant="primary"
							size="small"
							className="whitespace-nowrap !text-xs max-sm:!px-2 !ml-2"
						>
							View Profile
						</Button>
					</div>

					<div>
						<div className="text-start">
							<span>Latest Achievements</span>
							<div className="flex items-center lg:gap-1 flex-wrap">
								<Achievement1 />
								<Achievement2 />
								<Achievement3 />
								<Achievement4 />
								<Achievement5 />
								<Achievement6 />
								<p className="">+10</p>
							</div>
						</div>

						<span className="h-[3.2rem] w-[1.17px] bg-[#313337] my-auto max-lg:hidden" />

						<div className="text-start hidden lg:block">
							<span className="">Joined team</span>
							<div className="flex items-center gap-6">
								<div className=" stacked-avatar">
									<GamerAvatar />
									<GamerAvatar />
									<GamerAvatar />
									<GamerAvatar />
								</div>
								<p className="">+10</p>
							</div>
						</div>
					</div>

					<hr />

					<div className="bottom-dets">
						<div className="flex items-center gap-2">
							<GameTime />
							<div className="text-start  flex flex-col justify-center gap-2">
								<span className="">Played</span>
								<p className="">360 hours</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<GameAmount />
							<div className="text-start flex flex-col justify-center gap-2">
								<span className="">Games</span>
								<p className="">340</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<GamePointEarned />
							<div className="text-start flex flex-col justify-center gap-2">
								<span className="">Won</span>
								<p className="">170</p>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<GamePointEarned />
							<div className="text-start flex flex-col justify-center gap-2">
								<span className="">Earned</span>
								<p className="">1200 coins</p>
							</div>
						</div>
					</div>
				</div>
				<img className="cursor " src={CursorIllustration} alt="/" />
			</div>

			<div className="mt-5 mb-8">
				<Button variant="primary" size="large" shadow>
					Explore now
				</Button>
			</div>
		</Container>
	);
};

export default Hero;

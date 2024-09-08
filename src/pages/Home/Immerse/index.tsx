import {
	ImmerseVector1,
	ImmerseVector2,
	ImmerseVector3,
	ImmerseVector4,
	ImmerseVector5,
} from '../../../assets/svgs';
import { Container } from './styles';

const Immerse = () => {
	return (
		<Container>
			<div className="head">
				<div className="title">
					<h2 className="">
						Immerse yourself <br /> in adventure
					</h2>
					<ImmerseVector1 />
				</div>
				<p className="md:text-xl">
					Designjoy replaces unreliable freelancers and expensive agencies for one{' '}
					<br className="max-sm:hidden" /> flat monthly fee, with designs delivered so fast that it will
					blow your mind.
				</p>
			</div>

			<div className="flex flex-col gap-4">
				<div className="grid-container">
					<div className="grid-item">
						<ImmerseVector2 />
						<h2 className="md:text-6xl">
							Experience <br className="hidden xl:block" /> games like <br className="hidden xl:block" />{' '}
							never before
						</h2>
						<p className="sm:text-xl">
							Designjoy replaces unreliable freelancers and <br className="hidden xl:block" /> expensive
							agencies for one flat monthly fee, with designs
						</p>
						<ImmerseVector3 />
					</div>
					<div className="flex-container">
						<div className="flex-item1">
							<div>
								<p className="lg:text-lg">Document your wins</p>
								<span className="badge text-sm ">Experience</span>
							</div>

							<div>
								<h4>
									Upload your <br className="max-md:hidden" /> game streams on{' '}
									<br className="max-md:hidden" /> your profile
								</h4>
							</div>
						</div>

						<div className="flex-item2">
							<div>
								<p className="lg:text-lg">Play your favourite players</p>
								<span className="badge text-sm">Experience</span>
							</div>

							<div>
								<h4>
									Challenge <br className="max-md:hidden" /> anyone to a <br className="max-md:hidden" />{' '}
									game anytime
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div className="grid-container-2">
					<div className="flex-container">
						<div className="flex-item1">
							<div>
								<p className="lg:text-lg">Win more with friends</p>
								<span className="badge text-sm ">Experience</span>
							</div>

							<div>
								<h4>
									Create a winning <br className="max-md:hidden" /> team with others
								</h4>
							</div>
						</div>

						<div className="flex-item2">
							<div>
								<p className="lg:text-lg">Be one of the best</p>
								<span className="badge text-sm">Experience</span>
							</div>

							<div>
								<h4>
									See your rank <br className="max-md:hidden" /> worldwide in our{' '}
									<br className="max-md:hidden" /> leaderboard
								</h4>
							</div>
						</div>
					</div>
					<div className="grid-item">
						<ImmerseVector4 />
						<h2 className="md:text-6xl">
							Create teams <br className="hidden xl:block" /> for more <br className="hidden xl:block" />{' '}
							winnings
						</h2>
						<p className="sm:text-xl">
							Designjoy replaces unreliable freelancers and <br className="hidden xl:block" /> expensive
							agencies for one flat monthly fee, with designs
						</p>
						<ImmerseVector5 />
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Immerse;

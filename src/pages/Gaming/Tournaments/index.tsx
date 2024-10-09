import { CaretDown } from '@/assets/svgs';
import { Container } from './styles';
import { FeaturedTournament } from '@/components';
import { CyberPunk } from '@/assets/images';
import { Dropdown } from '@/ui';

const Tournaments = () => {
	return (
		<Container>
			<div className="dropdowns">
				<Dropdown
					trigger={
						<div className="dropdown">
							All tournaments <CaretDown className="caret" />
						</div>
					}
					position="bottom"
				>
					<div>
						<button>All matches</button>
						<button>Upcoming</button>
						<button>Finished</button>
						<button>In progress</button>
						<button>Cancelled</button>
					</div>
				</Dropdown>
				<Dropdown
					trigger={
						<div className="dropdown">
							All games <CaretDown className="caret" />
						</div>
					}
				>
					<div>
						<button>All games</button>
						<button>Call of duty</button>
						<button>Fortnite</button>
						<button>Valorant</button>
						<button>League of legends</button>
					</div>
				</Dropdown>
			</div>

			<div className="tournaments">
				<FeaturedTournament
					key={1}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={2}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={3}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={4}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={5}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={6}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={7}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={8}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={9}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={10}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={11}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={12}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={13}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={14}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={15}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
				<FeaturedTournament
					key={16}
					image={CyberPunk}
					categories={['Call of duty', 'Team']}
					status={'IN PROGRESS'}
					period={' Finishing in 20 days'}
					title={'Rebirth Resurgence express '}
					description={
						'Join the call of duty tournament and get a chance to win up to $ 2000 prize..... '
					}
					prize={'3500'}
					game_mode={'3 v 3'}
					game_slot={'60/64'}
				/>
			</div>
		</Container>
	);
};

export default Tournaments;

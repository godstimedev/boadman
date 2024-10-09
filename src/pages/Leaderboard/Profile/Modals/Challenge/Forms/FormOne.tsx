import { Button, InputGroup, Select } from '@/ui';
import { Container } from '../styles';
import { FormType } from '..';
import { GAMES } from '@/constants';

const FormOne = (props: FormType) => {
	const { formData, handleChange, setStage } = props;
	return (
		<Container>
			<div>
				<h6>Create Challenge</h6>
				<span>Challenge</span>
			</div>
			<form>
				<Select
					type="basic"
					name="game"
					placeholder="Game"
					options={GAMES.map((game) => ({ name: game, value: game }))}
					value={formData.game}
					onChange={handleChange}
				/>
				<InputGroup
					type="text"
					name="game_type"
					placeholder="Game type"
					value={formData.game_type}
					onChange={handleChange}
				/>
				<InputGroup
					type="text"
					name="game_name"
					placeholder="Game name"
					value={formData.game_name}
					onChange={handleChange}
				/>
				<InputGroup
					type="date"
					name="date_time"
					placeholder="Date & Time"
					value={formData.date_time}
					onChange={handleChange}
				/>

				<hr />
				<InputGroup
					type="text"
					name="wager_amount"
					placeholder="Wager amount"
					value={formData.wager_amount}
					onChange={handleChange}
				/>
				<InputGroup
					type="text"
					name="player"
					placeholder="Flunk god"
					value={formData.player}
					onChange={handleChange}
				/>
				<InputGroup
					type="text"
					name="time_limit"
					placeholder="Time limit to accept challenge"
					value={formData.time_limit}
					onChange={handleChange}
				/>
			</form>

			<div>
				<Button onClick={() => setStage(2)} type="button" variant="primary" size="large">
					Next
				</Button>
			</div>
		</Container>
	);
};

export default FormOne;

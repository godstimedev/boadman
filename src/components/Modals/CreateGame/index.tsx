import { Button, Modal } from '@/ui';
import { useState } from 'react';
import FormOne from './Forms/FormOne';
import FormTwo from './Forms/FormTwo';
import { CreateGameType, GeneralChangeEventType } from '@/types';
import { Container, SuccessCon } from './styles';
import { RequestSuccess } from '@/assets/images';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/constants';

export type FormType = {
	formData: CreateGameType;
	handleChange: GeneralChangeEventType;
	setStage: React.Dispatch<React.SetStateAction<number>>;
	setFormData: React.Dispatch<React.SetStateAction<CreateGameType>>;
};

type PropsType = {
	gameModal: boolean;
	setGameModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CreateGame = (props: PropsType) => {
	const { gameModal, setGameModal } = props;

	const [stage, setStage] = useState(1);
	const [formData, setFormData] = useState<CreateGameType>({
		game: '',
		game_type: '',
		game_name: '',
		date_time: null,
		wager_amount: '',
		time_limit: '',
		platform: '',
		format: '',
		mode: '',
		rounds: '',
		map: '',
		banned_weapons: '',
	});

	const handleChange: GeneralChangeEventType = (event, name, value) => {
		name = event?.target.name || name || '';
		value = event?.target.value || value || '';

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Modal isModalOpen={gameModal} setIsModalOpen={setGameModal}>
			{stage !== 3 ? (
				<Container>
					{stage === 1 ? (
						<FormOne
							formData={formData}
							setFormData={setFormData}
							handleChange={handleChange}
							setStage={setStage}
						/>
					) : stage === 2 ? (
						<FormTwo
							formData={formData}
							handleChange={handleChange}
							setFormData={setFormData}
							setStage={setStage}
						/>
					) : null}
				</Container>
			) : (
				<SuccessCon>
					<div className="img-con">
						<img src={RequestSuccess} alt="/" />
					</div>
					<div>
						<h6>Congratulations</h6>
						<span>Game successfully created</span>
					</div>
					<p>
						You have created a valorant game that will be added to matches page pool. You will get a
						notification once a player join your game
					</p>

					<div>
						<Link to={APP_ROUTES.matches.initial}>
							{' '}
							<Button variant="primary">Back to match page</Button>
						</Link>
					</div>
				</SuccessCon>
			)}
		</Modal>
	);
};

export default CreateGame;

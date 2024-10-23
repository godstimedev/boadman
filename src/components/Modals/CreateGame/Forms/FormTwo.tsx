import { Button, InputGroup, Select } from '@/ui';
import { FormType } from '..';

const FormTwo = (props: FormType) => {
	const { formData, handleChange, setStage } = props;

	const handleSubmit = () => {
		// console.log(formData);
		setStage(3);
	};

	return (
		<div>
			<div>
				<h6>Set game rules</h6>
				<span>Set the basic rule for your Apex Legends game</span>
			</div>
			<form>
				<Select
					type="basic"
					name="platform"
					placeholder="Platform"
					options={['PC', 'PS4', 'XBOX'].map((platform) => ({ name: platform, value: platform }))}
					value={formData.platform}
					onChange={handleChange}
				/>
				<InputGroup
					type="text"
					name="format"
					placeholder="Format"
					value={formData.format}
					onChange={handleChange}
				/>
				<Select
					type="basic"
					name="mode"
					placeholder="Mode"
					options={['PC', 'PS4', 'XBOX'].map((platform) => ({ name: platform, value: platform }))}
					value={formData.mode}
					onChange={handleChange}
				/>

				<hr />

				<Select
					type="basic"
					name="rounds"
					placeholder="Rounds"
					options={['PC', 'PS4', 'XBOX'].map((platform) => ({ name: platform, value: platform }))}
					value={formData.rounds}
					onChange={handleChange}
				/>
				<InputGroup
					type="text"
					name="map"
					placeholder="Map"
					value={formData.map}
					onChange={handleChange}
				/>
				<InputGroup
					type="text"
					name="banned_weapons"
					placeholder="Banned weapons"
					value={formData.banned_weapons}
					onChange={handleChange}
				/>
			</form>

			<div>
				<Button onClick={handleSubmit} variant="primary" size="large">
					Create Game
				</Button>
			</div>
		</div>
	);
};

export default FormTwo;

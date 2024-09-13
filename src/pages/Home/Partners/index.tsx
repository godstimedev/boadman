import {
	PartnerLogo1,
	PartnerLogo2,
	PartnerLogo3,
	PartnerLogo4,
	PartnerLogo5,
	PartnerLogo6,
	PartnerLogo7,
	PartnerLogo8,
} from '../../../assets/images';
import { Container } from './styles';

const Partners = () => {
	return (
		<Container>
			<div className="logo-container">
				<div className="logo-slider">
					<img src={PartnerLogo1} alt="/" />
					<img src={PartnerLogo2} alt="/" />
					<img src={PartnerLogo3} alt="/" />
					<img src={PartnerLogo4} alt="/" />
					<img src={PartnerLogo5} alt="/" />
					<img src={PartnerLogo6} alt="/" />
					<img src={PartnerLogo7} alt="/" />
					<img src={PartnerLogo8} alt="/" />

					<img src={PartnerLogo1} alt="/" />
					<img src={PartnerLogo2} alt="/" />
					<img src={PartnerLogo3} alt="/" />
					<img src={PartnerLogo4} alt="/" />
					<img src={PartnerLogo5} alt="/" />
					<img src={PartnerLogo6} alt="/" />
					<img src={PartnerLogo7} alt="/" />
					<img src={PartnerLogo8} alt="/" />
				</div>
			</div>
		</Container>
	);
};

export default Partners;

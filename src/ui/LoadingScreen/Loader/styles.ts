import styled, { keyframes } from 'styled-components';
import { BallContainerPropType, SpinnerContainerPropType } from './Loader.types';

const spinning = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(3600deg);
}
`;
const bouncing = keyframes`
    from{   transform: translateY(0px);   }
    to{   transform: translateY(-100px);   }
`;

export const StyledLoader = styled.div``;

export const StyledSpinner = styled.div<SpinnerContainerPropType>`
	width: ${({ $size }) => $size || '4rem'};
	height: ${({ $size }) => $size || '4rem'};
	border-radius: 50%;
	border: 0.4rem solid #fff;
	border-top-color: #4060ea;
	animation: ${spinning} 7s infinite linear;
	box-shadow: 0 0px 4px rgba(18, 18, 18, 0.15);
`;

export const StyledBalls = styled.div<BallContainerPropType>`
	position: relative;
	width: 100px;
	height: 100px;
	display: flex;
	align-items: flex-end;
	justify-content: space-around;

	> div {
		background-color: #0000ff;
		border-radius: 50%;
		width: ${({ $size }) => $size || '1.25rem'};
		height: ${({ $size }) => $size || '1.25rem'};
		animation: ${bouncing} 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;

		&:nth-child(2) {
			animation-delay: 0.1s;
			opacity: 0.8;
		}
		&:nth-child(3) {
			animation-delay: 0.2s;
			opacity: 0.6;
		}
		&:nth-child(4) {
			animation-delay: 0.3s;
			opacity: 0.4;
		}
	}
`;

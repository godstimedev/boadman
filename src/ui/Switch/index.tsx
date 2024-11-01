import styled, { css } from 'styled-components';

type SwitchProps = {
	$active: boolean;
};

const Switch = styled.button.attrs({
	type: 'button',
})<SwitchProps>`
	width: 2rem;
	height: 1.2rem;
	background: #e7eaee;
	border-radius: 14px;
	position: relative;
	flex-shrink: 0;

	&::before {
		content: '';
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		left: 0.25rem;
		top: 50%;
		transform: translate(0, -50%);
		background: #a0abbb;
		border-radius: 50%;
		transition: all 0.1s ease-out;
	}

	${({ $active }) =>
		$active &&
		css`
			background: #4060ea;

			&::before {
				background: #fff;
				left: 100%;
				transform: translate(calc(-100% - 0.25rem), -50%);
			}
		`}
`;

export default Switch;

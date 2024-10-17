import styled, { css } from 'styled-components';
import { StyledModalProps } from './Modal.types';
import { maxQuery } from '@/utilities';

export const StyledModal = styled.div<StyledModalProps>`
	background-color: #000000b2;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	transition: all 0.3s ease-in-out;

	${({ $isOpen }) =>
		!$isOpen &&
		css`
			opacity: 0;
			visibility: hidden;
		`}
	${({ $isOpen }) =>
		$isOpen &&
		css`
			opacity: 1;
			visibility: visible;
		`}

	.modal-con {
		position: relative;
		background-color: ${({ theme }) => theme.colors.accent500};
		width: max-content;
		max-width: 40%;
		min-height: 40%;
		max-height: 90%;
		border-radius: 5px;
		transition: all 0.3s ease-in-out;
		overflow-y: auto;
		display: flex;
		flex-direction: column;

		${maxQuery('lg')} {
			max-width: 65%;
		}
		${maxQuery('md')} {
			max-width: 85%;
		}

		${({ $isOpen }) =>
			$isOpen &&
			css`
				scale: 1;
			`}
		${({ $isOpen }) =>
			!$isOpen &&
			css`
				scale: 0;
			`}

		.close-btn {
			position: absolute;
			right: 1rem;
			top: 1rem;
		}
	}
`;

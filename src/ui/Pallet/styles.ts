import styled from 'styled-components';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.accent500};
	padding: 1rem 0.85rem;
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 0.5rem;
	min-width: max-content;
	width: 100%;
	border-radius: 4px;

	span {
		color: ${({ theme }) => theme.colors.accent200};

		font-size: 14px;
		font-weight: 400;
		line-height: 18.48px;
		text-transform: capitalize;
	}

	p {
		font-size: 1rem;
		font-weight: 500;
		line-height: 21.12px;
		text-transform: capitalize;
	}
`;

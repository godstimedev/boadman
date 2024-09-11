import { CtaBackground } from '@/assets/images';
import styled from 'styled-components';

export const Container = styled.section`
	padding: 0.5rem 1.5rem;

	> div {
		background-image: url(${CtaBackground});
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		padding-top: 12rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 2rem;

		h2 {
			font-weight: 700;
		}
	}
`;

import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.section`
	.logo-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: 2rem 0;
		/* flex-wrap: wrap; */
		overflow: hidden; /* Hides the overflow */
		white-space: nowrap; /* Prevents line breaks */
		position: relative;
	}

	.logo-slider {
		display: inline-flex;
		align-items: center;
		animation: scroll 20s linear infinite; /* Continuous scroll */
		animation-play-state: running;
	}

	.logo-slider img {
		width: 128px;
		margin-right: 2rem;

		${maxQuery('md')} {
			width: 96px;
			margin-right: 0.5rem;
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0); /* Start at the initial position */
		}
		100% {
			transform: translateX(-100%); /* Scroll the entire width */
		}
	}

	/* Pausing the animation on hover */
	.logo-container:hover .logo-slider {
		animation-play-state: paused; /* Pauses the scroll on hover */
	}
`;

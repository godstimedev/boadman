import { Banner1, Banner1Mobile } from '@/assets/images';
import { StyledButton } from '@/ui/Button/styles';
import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	.banner {
		background-image: url(${Banner1});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 5px 5px 0 0;
		height: 161px;
		width: 100%;

		${maxQuery('lg')} {
			background-image: url(${Banner1Mobile});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
		}
	}

	.head {
		display: flex;
		align-items: center;
		justify-content: space-between;

		${maxQuery('md')} {
			flex-direction: column;
			align-items: start;
			gap: 1.5rem;
		}

		span {
			font-size: 12px;
			font-weight: 400;
			line-height: 15.84px;
			color: ${({ theme }) => theme.colors.accent200};
		}

		h6 {
			font-size: 24px;
			font-weight: 500;
			line-height: 31.68px;
		}

		> div:first-child {
			display: flex;
			align-items: center;
			gap: 1rem;

			.icon {
				width: 29px;
				height: 29px;
				> img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					object-fit: cover;
				}
			}

			> div:last-child {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;
			}
		}

		> div:last-child {
			display: flex;
			align-items: center;
			gap: 1rem;

			${maxQuery('md')} {
				width: 100%;
				justify-content: space-between;
				gap: 1rem;

				${StyledButton} {
					width: 100%;
				}
			}
		}
	}

	.team-con {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		ul {
			display: flex;
			align-items: center;
			gap: 2rem;

			border-bottom: 1px solid ${({ theme }) => theme.colors.accent100};

			${maxQuery('sm')} {
				gap: 1rem;
			}

			a {
				padding: 0.75rem 0.5rem;
				border-bottom: 2px solid transparent;
				color: ${({ theme }) => theme.colors.accent200};
				font-size: 14px;
				line-height: 18.48px;
				font-weight: 500;

				${maxQuery('sm')} {
					font-size: 10px;
					line-height: 13.2px;
				}

				&.active {
					border-bottom: 2px solid ${({ theme }) => theme.colors.primary500};
					color: ${({ theme }) => theme.colors.white};
				}
			}
		}
	}
`;

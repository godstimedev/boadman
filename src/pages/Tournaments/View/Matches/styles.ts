import { maxQuery } from '@/utilities';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 3rem;

	h6 {
		font-size: 16px;
		font-weight: 500;
		line-height: 21.12px;
	}

	.matches {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.team-match {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: ${({ theme }) => theme.colors.accent500};
		border-radius: 5px;

		${maxQuery('md')} {
			padding: 1rem 0.5rem;
		}

		> .team {
			display: flex;
			align-items: center;
			gap: 1rem;

			${maxQuery('md')} {
				gap: 0.5rem;
			}

			&:last-child {
				flex-direction: row-reverse;

				> div:last-child {
					align-items: end;
				}
			}

			.img-con {
				width: 32px;
				height: 32px;

				${maxQuery('md')} {
					width: 20px;
					height: 20px;
				}

				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
					object-fit: cover;
				}
			}

			> div:last-child {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;

				${maxQuery('md')} {
					gap: 0.3rem;
				}

				p {
					font-size: 14px;
					font-weight: 500;
					line-height: 16.8px;

					${maxQuery('md')} {
						font-size: 11px;
						line-height: 12.6px;
					}
				}

				> div {
					display: flex;
					align-items: center;

					img {
						width: 16px;
						height: 16px;
						border-radius: 50%;
						object-fit: cover;
						border: 1px solid #22252c;

						${maxQuery('md')} {
							width: 12px;
							height: 12px;
						}
					}

					img:not(:first-child) {
						margin-left: -0.3rem;
					}
				}
			}
		}

		.versus {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;

			h6 {
				font-size: 16px;
				font-weight: 500;
				line-height: 19.2px;

				${maxQuery('md')} {
					font-size: 12px;
					line-height: 14.4px;
				}
			}

			p {
				font-size: 12px;
				font-weight: 400;
				line-height: 14.4px;

				${maxQuery('md')} {
					font-size: 8px;
					line-height: 9.6px;
				}
			}
		}
	}
`;

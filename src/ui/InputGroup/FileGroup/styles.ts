import styled from 'styled-components';

export const StyledFileGroup = styled.div`
	overflow: hidden;

	:focus-within {
		label {
			color: #4060ea;
		}
		.file-group {
			border: 1px solid #4060ea;
		}
	}
	label {
		color: #494848;
		font-weight: 500;
		font-size: 0.875rem;
		line-height: 120%;
		margin-bottom: 0.5rem;
		display: flex;
		align-items: center;

		.asterisk {
			color: #ea2d2e;
			font-size: 1.1rem;
			transform: translateY(0.14em);
			margin-left: 0.3rem;
		}
		.info-con {
			position: relative;
			margin-left: auto;

			&:focus-within .outer {
				opacity: 1;
			}

			svg {
				cursor: pointer;
				outline: none;
			}

			.outer {
				position: absolute;
				bottom: calc(100% + 0.75rem);
				right: -0.4rem;
				width: max-content;
				max-width: 12.5rem;
				display: flex;
				opacity: 0;
				transition: opacity 0.5s ease-in;
				pointer-events: none;

				::before {
					content: '';
					position: absolute;
					background-color: #ffffff;
					z-index: 1;
					border-radius: 0.25rem;
					border: 1px solid #dadada;
					width: 1rem;
					height: 1rem;
					right: 1.25rem;
					top: 100%;
					transform: rotate(45deg) translateY(calc(-50% - 0.5rem));
				}

				span {
					position: relative;
					z-index: 2;
					background: #ffffff;
					border: 1px solid #dadada;
					font-weight: 500;
					font-size: 0.6875rem;
					line-height: 1.73;
					color: #494848;
					padding: 0.8125rem 1rem;
					border-radius: 0.25rem;

					::before {
						content: '';
						position: absolute;
						background-color: #ffffff;
						z-index: 1;
						border-radius: 0.25rem;
						border: 1px solid transparent;
						width: calc(1rem - 1px);
						height: calc(1rem - 1px);
						right: calc(1.25rem - 1px);
						top: 100%;
						transform: rotate(45deg) translateY(calc(-50% - 0.5rem));
					}
				}
			}
		}
	}

	.file-group {
		display: flex;
		position: relative;
		/* border-radius: 0.25rem; */
		/* border: 1px solid rgba(229, 229, 229, 0.7);
		background: #fff; */

		input {
			position: absolute;
			inset: 0;
			opacity: 0;
			z-index: -1;
		}

		/* .icon-con {
			border-radius: 0.25rem;
			border: 1px solid rgba(51, 51, 51, 0.1);
			background: rgba(227, 232, 252, 0.1);
			padding: 0 1rem;
			display: grid;
			place-items: center;
		} */

		/* .text-con {
			padding: 0.569rem 0.7rem;
			color: #828282;
			font-size: 0.625rem;
			line-height: 120%;
			letter-spacing: -0.00306rem;
			margin-right: auto;
			overflow: hidden;

			p {
				color: #11071a;
				font-weight: 600;
				margin-bottom: 0.5rem;
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;

				&.selected {
					font-size: 0.875rem;
					margin: 0.432rem 0;
					line-height: 130%;
				}
			}
			span {
				display: -webkit-box;
				overflow: hidden;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
		} */

		.remove {
			position: absolute;
			right: 0;
			top: -0.5rem;
			font-size: 0.6185rem;
			font-weight: 800;
			letter-spacing: -0.0025rem;
			padding: 0 0.25rem;
			border-radius: 0.25rem;
			background-color: transparent;

			color: ${({ theme }) => theme.colors.error500};
		}
	}
`;

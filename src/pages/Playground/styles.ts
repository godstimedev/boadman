import styled from 'styled-components';

export const Container = styled.div`
	padding: 1rem 4rem;

	> h1,
	> h3,
	form > h3,
	> p {
		text-align: center;
	}
`;

type FlexPropTypes = {
	$direction?: string;
	$wrap?: string;
	$align?: string;
	$justify?: string;
	$flex?: number;
};

export const Flex = styled.div<FlexPropTypes>`
	display: flex;
	gap: 1rem;

	flex-direction: ${({ $direction }) => $direction || 'row'};
	flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
	align-items: ${({ $align }) => $align || 'initial'};
	justify-content: ${({ $justify }) => $justify || 'center'};

	> * {
		flex: ${({ $flex }) => $flex};
	}
`;

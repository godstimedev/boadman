import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 100;
	display: grid;
	place-items: center;
	background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(4px);
	box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

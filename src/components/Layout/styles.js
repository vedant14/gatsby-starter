import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	margin: 0 auto;
	max-width: 1200px;
	box-sizing: border-box;
	padding: 0 20px 40px 20px;
`;

export const Gradient = styled.div`
	background: ${props =>
		props.color
			? 'linear-gradient(180deg, #231D20 19.71%, #4A4A4A 34.33%, #C4C4C4 54.39%, rgba(255, 255, 255, 0.51) 80.79%)'
			: 'white'};
`;

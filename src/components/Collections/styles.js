import styled from 'styled-components';
import Img from 'gatsby-image';

export const CollectionsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
`;

export const CollectionTile = styled.div`
	min-width: 100%;
	position: relative;
	@media screen and (min-width: 768px) {
		min-width: 50%;
	}
	@media screen and (min-width: 1024px) {
		min-width: 33%;
	}
`;
export const CollectionImage = styled(Img)``;
export const CollectionContent = styled.div`
	position: absolute;
	top: 0%;
	left: 0%;
	width: 100%;
	height: 100%;
	background: rgba(234, 219, 85, 0.27);
	> h1:first-child {
		font-size: 2rem;
	}
	> h1 {
		font-size: 1rem;
	}
`;

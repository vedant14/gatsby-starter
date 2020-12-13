import React from 'react';
import { Title } from 'components';
import {
	CollectionsWrapper,
	CollectionTile,
	CollectionImage,
	CollectionContent,
} from './styles';

export function Collections({ collections }) {
	return (
		<div>
			<Title>Vedant</Title>
			<CollectionTile>
				<Title>Main Components</Title>
			</CollectionTile>
			<CollectionsWrapper>
				{collections.map(collection => (
					<CollectionTile>
						<CollectionImage
							fluid={collection.image.localFile.childImageSharp.fluid}
						/>
						<CollectionContent>
							<Title>{collection.title}</Title>
						</CollectionContent>
					</CollectionTile>
				))}
			</CollectionsWrapper>
		</div>
	);
}

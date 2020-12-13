import React from 'react';
import { Link } from 'gatsby';
import { Nav } from './styles';

export function Menu({ items }) {
	return (
		<Nav>
			{items.map(item => (
				<li key={item.id}>
					<Link to={item.link} activeClassName="active">
						{item.name}
					</Link>
				</li>
			))}
		</Nav>
	);
}

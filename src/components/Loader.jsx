import React from 'react';
import ContentLoader from 'react-content-loader';

export const MyLoader = (props) => (
	<ContentLoader
		className="pizza-block"
		speed={2}
		width={280}
		height={377}
		viewBox="0 0 280 377"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="446" y="350" rx="0" ry="0" width="39" height="20" />
		<rect x="0" y="236" rx="17" ry="17" width="280" height="84" />
		<rect x="2" y="334" rx="0" ry="0" width="56" height="42" />
		<rect x="208" y="328" rx="23" ry="23" width="72" height="44" />
		<rect x="0" y="16" rx="0" ry="0" width="280" height="173" />
		<rect x="0" y="198" rx="0" ry="0" width="280" height="24" />
	</ContentLoader>
);

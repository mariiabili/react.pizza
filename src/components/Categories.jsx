import React, {useState} from 'react';
const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];

export const Categories = () => {
	const [activeCategory, setActiveCategory] = useState(0);
	const onClickCategory = (index) => {
		setActiveCategory(index);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((category, index) => (
					<li
						onClick={() => onClickCategory(index)}
						key={index}
						className={index === activeCategory ? 'active' : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

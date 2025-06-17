import React from 'react';
import {Categories, MyLoader, PizzaBlock, Sort} from '../components';

export const Home = () => {
	const [pizzas, setPizzas] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const fetchPizzas = async () => {
			try {
				const response = await fetch('https://681b5b5817018fe5057b360b.mockapi.io/items');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPizzas(data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error fetching pizzas:', error);
			}
		};
		fetchPizzas();
	}, []);

	return (
		<>
			<div className="content__top">
				<Categories />
				<Sort />
			</div>
			<h2 className="content__title">All pizzas</h2>
			<div className="content__items">
				{isLoading
					? Array.from({length: 8}, (_, index) => <MyLoader key={index} />)
					: pizzas.map((pizza) => (
							<PizzaBlock
								key={pizza.id}
								title="Cheeseburger Pizza"
								price="5"
								{...pizza}
							/>
					  ))}
			</div>
		</>
	);
};

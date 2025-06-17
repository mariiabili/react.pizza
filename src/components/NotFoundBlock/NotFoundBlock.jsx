import React from 'react';
import {Link} from 'react-router-dom';
import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
	return (
		<div className={styles.root}>
			<h1>
				<span>😕</span>
				<br />
				Nothing was found at this location
			</h1>

			<p>
				You can go back to the main{' '}
				<strong>
					<Link to="/"> page</Link>
				</strong>
			</p>
		</div>
	);
};

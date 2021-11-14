import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<section className='section'>
			<h1 className='section-header notfound-header'>404 - Not Found</h1>
			<div className='section-content'>
				<article>
					<h3 style={{ marginBottom: '1rem' }}>
						There is nothing to see here.
					</h3>

					<Link to='/' className='btn'>
						Back To Home
					</Link>
				</article>
			</div>
		</section>
	);
};

export default NotFound;

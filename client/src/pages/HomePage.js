import React from 'react';
import PollList from '../components/PollList';
import { useGlobalContext } from '../utils/context';

const HomePage = () => {
	return (
		<section className='section'>
			<h1 className='section-header'>Home</h1>
			<div className='section-content'>
				<PollList />
			</div>
		</section>
	);
};

export default HomePage;

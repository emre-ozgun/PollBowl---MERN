import React from 'react';
import PollForm from '../components/PollForm';

const CreatePoll = () => {
	return (
		<section className='section'>
			<h1 className='section-header'>Create a Poll</h1>
			<div className='section-content'>
				<PollForm />
			</div>
		</section>
	);
};

export default CreatePoll;

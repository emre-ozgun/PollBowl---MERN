import React, { useEffect } from 'react';
import { useGlobalContext } from '../utils/context';

const Poll = ({ pollTitle, pollAuthor, choices, date }) => {
	const { calculateVoteCount } = useGlobalContext();

	const [vote, setVote] = React.useState('');

	// useEffect(() => {
	// 	if (vote) {
	// 		calculateVoteCount(vote);
	// 	}
	// }, [vote]);

	// do i need useeffect to handle vote count logic ?
	// whenever vote state changes, I can just send the data with the date
	// why am I using data too?
	// In order to find the main  object that hold every info

	const handleVote = (c) => {
		setVote(c.value);
		calculateVoteCount(vote, date);
		// TODO: how to set count ? -> find the object from the data
	};

	return (
		<article className='single-poll-container' key={date}>
			<div className='single-poll-header'>
				<h2>{pollTitle}</h2>
				<small className='single-poll-author'>
					by <strong>{pollAuthor}</strong>
				</small>
				<p className='single-poll-count'>178k votes</p>
			</div>

			<form className='radio-btn-container'>
				{choices.map((c, i) => {
					return (
						<label key={i} className='radio-container'>
							{c.value}
							<input
								type='radio'
								value={vote}
								name={c.name}
								checked={vote === c.value}
								onChange={() => {
									handleVote(c, date);
								}}
							/>
							<span className='checkmark'></span>
						</label>
					);
				})}
			</form>
			<small className='single-poll-date'>{date}</small>
		</article>
	);
};

export default Poll;

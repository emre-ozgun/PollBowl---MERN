import React from 'react';
import { useGlobalContext } from '../utils/context';
import Poll from '../components/Poll';

const PollList = () => {
	const { polls } = useGlobalContext();

	if (polls.length < 1) {
		return <h4>No polls to be displayed...</h4>;
	}

	// console.log(polls);

	return polls?.map((poll) => {
		return <Poll {...poll} />;
	});
};

export default PollList;

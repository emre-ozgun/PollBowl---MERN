import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';

const PollContext = React.createContext();

export const AppProvider = ({ children }) => {
	const history = useHistory();

	const [polls, setPolls] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [vote, setVote] = useState({ name: '', value: '' });

	const [totalVoteCount, setTotalVoteCount] = useState(0);

	const [choices, setChoices] = useState([
		{ index: 1, name: 'choice1', value: '', count: 0 },
		{ index: 2, name: 'choice2', value: '', count: 0 },
	]);

	const [pollAuthor, setPollAuthor] = useState('');
	const [pollTitle, setPollTitle] = useState('');

	const handleDelete = (e) => {
		if (choices.length < 3) {
			const el = e.target.previousElementSibling;
			el.style.border = "1px solid 'red'";
			console.log(el);
			return;
		}

		setChoices(
			choices
				.filter((c) => c.name !== e.target.previousElementSibling.name)
				.map((c, i) => ({ ...c, index: i + 1, name: `choice${i + 1}` }))
		);
	};

	const addChoice = () => {
		let nextIndex = choices.length + 1;

		const newChoice = {
			index: nextIndex,
			name: `choice${nextIndex}`,
			value: '',
			count: 0,
		};

		const newChoices = [...choices, newChoice];

		setChoices(newChoices);
	};

	// this should setPolls -> then mongoDB connection
	const handleSubmit = (e) => {
		e.preventDefault();

		//consolidate form form fields
		const pollFinal = {
			pollTitle,
			pollAuthor,
			choices,
			date: new Date().toLocaleString(),
		};

		//set aggregate polls
		setPolls((prev) => [pollFinal, ...prev]);

		// clear fields
		setPollTitle('');
		setPollAuthor('');
		setChoices([
			{ index: 1, name: 'choice1', value: '', count: 0 },
			{ index: 2, name: 'choice2', value: '', count: 0 },
		]);

		//navigate to home
		history.push('/');
	};

	const calculateVoteCount = (vote) => {
		console.log(true);
		// console.log(polls);
		const newPolls = polls.map((p) => p);
		console.log(newPolls);
	};

	return (
		<PollContext.Provider
			value={{
				pollTitle,
				setPollTitle,
				pollAuthor,
				setPollAuthor,
				choices,
				setChoices,
				handleDelete,
				handleSubmit,
				addChoice,
				polls,
				calculateVoteCount,
			}}
		>
			{children}
		</PollContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(PollContext);
};

export default AppProvider;

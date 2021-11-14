import React from 'react';
import { useGlobalContext } from '../utils/context';

function FormInput({ index, name, value, setChoices, handleDelete }) {
	return (
		<div className='choice-container'>
			<input
				className='choice-input'
				type='text'
				placeholder={`Choice ${index}`}
				name={name}
				value={value}
				onChange={(e) =>
					setChoices((prev) => {
						let newChoices = prev.map((p) => {
							if (p.name === e.target.name) {
								return { ...p, value: e.target.value };
							} else {
								return p;
							}
						});
						return newChoices;
					})
				}
			/>

			<span className='choice-delete' onClick={(e) => handleDelete(e)}>
				x
			</span>
		</div>
	);
}
const PollForm = () => {
	const {
		pollTitle,
		setPollTitle,
		pollAuthor,
		setPollAuthor,
		choices,
		setChoices,
		handleDelete,
		addChoice,
		handleSubmit,
	} = useGlobalContext();

	const inputRef = React.useRef();

	React.useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form className='poll-form'>
			<p>Create as many choices as you can</p>

			<div className='form-control title'>
				<input
					ref={inputRef}
					type='text'
					id='title'
					name='title'
					placeholder='Poll Title'
					value={pollTitle}
					onChange={(e) => setPollTitle(e.target.value)}
				/>
			</div>
			<div className='form-control'>
				<input
					type='text'
					id='title'
					name='title'
					placeholder='Author'
					value={pollAuthor}
					onChange={(e) => setPollAuthor(e.target.value)}
				/>
			</div>
			<div className='form-control choices'>
				<h3>POLL CHOICES</h3>
				{choices.map((choice) => {
					return (
						<FormInput
							{...choice}
							key={choice.index}
							setChoices={setChoices}
							handleDelete={handleDelete}
						/>
					);
				})}
			</div>

			<div className='poll-form-footer'>
				<button onClick={addChoice} type='button' className='btn add'>
					Add another choice
				</button>
				<button className='btn create' type='submit' onClick={handleSubmit}>
					Publish!
				</button>
			</div>
		</form>
	);
};

export default PollForm;

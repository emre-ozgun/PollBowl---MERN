import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RandomPoll from './pages/RandomPoll';
import CreatePoll from './pages/CreatePoll';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';
import './App.css';
function App() {
	return (
		<main className='container'>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route exact path='/poll/random'>
					<RandomPoll />
				</Route>
				<Route exact path='/poll/create'>
					<CreatePoll />
				</Route>
				<Route exact path='/profile'>
					<UserProfile />
				</Route>
				<Route exact path='*'>
					<NotFound />
				</Route>
			</Switch>
		</main>
	);
}

export default App;

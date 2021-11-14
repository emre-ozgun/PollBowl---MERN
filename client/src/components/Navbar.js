import React from 'react';
import { Link } from 'react-router-dom';
import { GiCardRandom } from 'react-icons/gi';
import { MdHomeFilled, MdOutlineAddchart, MdPerson } from 'react-icons/md';
import { GrProductHunt } from 'react-icons/gr';

const Navbar = () => {
	return (
		<header>
			<nav>
				<ul>
					<li className='nav-item'>
						<Link to='/' className='logo nav-link'>
							<GrProductHunt className='icon logo' />
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/' className='nav-link'>
							<MdHomeFilled className='icon' />
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/poll/random' className='nav-link'>
							<GiCardRandom className='icon' />
						</Link>
					</li>
					<li className='nav-item add'>
						<Link to='/poll/create' className='nav-link add'>
							<MdOutlineAddchart className='icon add' />
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/profile' className='nav-link'>
							<MdPerson className='icon' />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;

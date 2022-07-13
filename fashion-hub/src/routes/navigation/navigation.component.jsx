import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className='navigation'>
				<Link className='logo-container' to='/'>
					<div>
						<Logo className='logo' />
					</div>
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						Shop
					</Link>
					<Link className='nav-link' to='/sign-in'>
						Sign In
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

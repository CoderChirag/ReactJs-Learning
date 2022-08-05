import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { selectCurrentUser } from '../../store/user/user.selector';

import {
	NavigationContainer,
	NavLinks,
	NavLink,
	LogoContainer,
} from './navigation.styles';

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<div>
						<Logo className='logo' />
					</div>
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>Shop</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;

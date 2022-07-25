import { createContext, useReducer } from 'react';

const addCartItem = (cartItems, itemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === itemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === itemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === itemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
	}

	return cartItems.map(cartItem =>
		cartItem.id === itemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};

const clearCartItem = (cartItems, itemToClear) => {
	return cartItems.filter(cartItem => cartItem.id !== itemToClear.id);
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	clearItemFromCart: () => {},
	cartCount: 0,
	cartTotal: 0,
});

const CART_ACTION_TYPES = {
	TOGGLE_CART_OPEN: 'TOGGLE_CART_OPEN',
	SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const INITIAL_STATE = {
	isCartOpen: false,
	cartCount: 0,
	cartTotal: 0,
	cartItems: [],
};

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
			return {
				...state,
				isCartOpen: payload,
			};
		case CART_ACTION_TYPES.SET_CART_ITEMS:
			return {
				...state,
				...payload,
			};
		default:
			throw new Error(`Unhandled action type: ${type} in cartReducer`);
	}
};

export const CartProvider = ({ children }) => {
	const [{ isCartOpen, cartCount, cartTotal, cartItems }, dispatch] =
		useReducer(cartReducer, INITIAL_STATE);

	const updateCartItemsReducer = newCartItems => {
		const newCartCount = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity,
			0
		);

		const newCartTotal = newCartItems.reduce(
			(total, cartItem) => total + cartItem.quantity * cartItem.price,
			0
		);

		dispatch({
			type: CART_ACTION_TYPES.SET_CART_ITEMS,
			payload: {
				cartItems: newCartItems,
				cartCount: newCartCount,
				cartTotal: newCartTotal,
			},
		});
	};

	const addItemToCart = itemToAdd => {
		const newCartItems = addCartItem(cartItems, itemToAdd);
		updateCartItemsReducer(newCartItems);
	};

	const removeItemFromCart = itemToRemove => {
		const newCartItems = removeCartItem(cartItems, itemToRemove);
		updateCartItemsReducer(newCartItems);
	};

	const clearItemFromCart = itemToClear => {
		const newCartItems = clearCartItem(cartItems, itemToClear);
		updateCartItemsReducer(newCartItems);
	};

	const setIsCartOpen = bool => {
		dispatch({ type: CART_ACTION_TYPES.TOGGLE_CART_OPEN, payload: bool });
	};

	const value = {
		isCartOpen,
		setIsCartOpen,
		cartItems,
		addItemToCart,
		removeItemFromCart,
		clearItemFromCart,
		cartCount,
		cartTotal,
	};

	return (
		<CartContext.Provider value={value}>{children}</CartContext.Provider>
	);
};

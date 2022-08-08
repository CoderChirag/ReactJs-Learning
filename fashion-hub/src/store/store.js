import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// Custom Middleware
// const loggerMiddleware = store => next => action => {
// 	// Function Currying
// 	if (!action.type) {
// 		return next(action);
// 	}

// 	console.log('type: ', action.type);
// 	console.log('payload: ', action.payload);
// 	console.log('currentState: ', store.getState());

// 	next(action);

// 	console.log('next state: ', store.getState());
// };

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

export const persistor = persistStore(store);

import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
	async function handleGoogleRedirectResult() {
		const response = await getRedirectResult(auth);
		console.log(response);
		if (response) {
			createUserDocumentFromAuth(response.user);
		}
	}
	useEffect(() => {
		handleGoogleRedirectResult();
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		createUserDocumentFromAuth(user);
	};

	const logGoogleRedirectUser = async () => {
		const { user } = await signInWithGoogleRedirect();
		createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1>Sign In Page</h1>
			<button onClick={logGoogleUser}>Sign In With Google Popup</button>
			<button onClick={logGoogleRedirectUser}>
				Sign In With Google Redirect
			</button>
		</div>
	);
};

export default SignIn;

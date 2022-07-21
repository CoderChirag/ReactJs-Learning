import SignUpForm from '../../components/signup-form/signup-form.component';
import SignInForm from '../../components/signin-form/signin-form.component';

import { AuthenticationContainer } from './authentication.styles.jsx';

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<SignInForm />
			<SignUpForm />
		</AuthenticationContainer>
	);
};

export default Authentication;

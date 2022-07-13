import SignUpForm from '../signup-form/signup-form.component';
import SignInForm from '../signin-form/signin-form.component';
import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<SignInForm />
			<SignUpForm />
		</div>
	);
};

export default Authentication;

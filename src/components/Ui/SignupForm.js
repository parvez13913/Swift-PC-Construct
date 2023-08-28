import SocialAuthentication from './SocialAuthentication';


const SignupForm = () => {

    return (
        <div className="border border-info shadow-lg mx-8 w-1/7 mb-8 rounded-lg px-9 py-4">
            <h6 className="text-center my-6 text-xl font-bold border-b-2 border-spacing-3 border-info">
                Sign Up
            </h6>
            <SocialAuthentication />
        </div>
    );
};

export default SignupForm;
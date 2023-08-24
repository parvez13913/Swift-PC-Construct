import Image from 'next/image';
import React from 'react';
import SignupForm from '../components/Ui/SignupForm';
import Head from 'next/head';
import signUpImage from '../images/signup.png';

const SignUpPage = () => {
    return (
        <div className='min-h-screen flex justify-around items-center'>
            <Head>
                <title>Sign Up</title>
            </Head>
            <div>
                <Image src={signUpImage} alt="signUpImage" />
            </div>

            <SignupForm />
        </div>
    );
};

export default SignUpPage;
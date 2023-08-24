import Image from 'next/image';
import React from 'react';
import SignupForm from '../components/Ui/SignupForm';
import Head from 'next/head';
import signUpImage from '../images/signup.png';
import RootLayout from '../components/shared/Layouts/RootLayout';

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


SignUpPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}
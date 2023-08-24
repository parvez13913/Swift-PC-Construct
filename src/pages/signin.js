/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import RootLayout from '../components/shared/Layouts/RootLayout';
import SigninForm from '../components/Ui/SigninForm';
import loginImage from '../images/login.png'
import Image from 'next/image';

const SigninPage = () => {
    return (
        <div className='min-h-screen flex justify-around items-center'>
            <Head>
                <title>Sign in</title>
            </Head>
            <div>
                <Image src={loginImage} alt="loginImage" />
            </div>

            <SigninForm />
        </div>
    );
};

export default SigninPage;


SigninPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}
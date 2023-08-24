/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import RootLayout from '../components/shared/Layouts/RootLayout';
import LoginForm from '../components/Ui/LoginForm';
import loginImage from '../images/login.png'
import Image from 'next/image';

const LoginPage = () => {
    return (
        <div className='min-h-screen flex justify-around items-center'>
            <Head>
                <title>Login</title>
            </Head>
            <div>
                <Image src={loginImage} alt="loginImage" />
            </div>

            <LoginForm />
        </div>
    );
};

export default LoginPage;


LoginPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}
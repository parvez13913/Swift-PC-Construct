import Head from 'next/head';
import { FaGoogle, FaGithub } from "react-icons/fa6";
import RootLayout from '../components/shared/Layouts/RootLayout';

const LoginPage = () => {
    return (
        <div className='min-h-screen'>
            <Head>
                <title>Login</title>
            </Head>
            <div className='w-1/2 mx-auto py-8 shadow-xl lg:mt-40'>
                <div>
                    <h3 className='text-3xl text-info font-serif font-semibold text-center my-8'>LOGIN</h3>
                </div>
                <div className='flex items-center justify-center space-x-5'>
                    <div>
                        <button>
                            <FaGoogle className='text-[#3cba54] text-4xl' />
                        </button>
                    </div>
                    <hr />
                    <div>
                        <button>
                            <FaGithub className='text-4xl text-[#4078c0]' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


LoginPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}
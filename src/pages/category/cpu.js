import React from 'react';
import RootLayout from '../../components/shared/Layouts/RootLayout';
import ChooseCard from '../../components/Ui/ChooseCard';
import Head from 'next/head';

const CpuPage = ({ cardProduct }) => {
    return (
        <div>
            <Head>
                <title>CPU</title>
            </Head>
            <h1 className='text-4xl text-center my-4 font-serif'>Choose <span className='text-info'>CPU</span></h1>
            <div className='grid col-span-1 lg:grid-cols-5 gap-4 px-4 mb-2 mt-6'>
                {
                    cardProduct.map(product => <ChooseCard key={product?.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default CpuPage;


CpuPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {
    const res = await fetch("https://swift-pc-construct-server.vercel.app/api/v1/products");
    const products = await res.json();
    const cardProduct = await products?.data?.filter((product) => product?.category === "CPU");
    return {
        props: {
            cardProduct
        },
        revalidate: 30,
    }
}
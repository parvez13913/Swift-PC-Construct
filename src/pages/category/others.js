import React from 'react';
import ChooseCard from '../../components/Ui/ChooseCard';
import RootLayout from '../../components/shared/Layouts/RootLayout';

const OthersPage = ({ cardProduct }) => {
    return (
        <div>
            <h1 className='text-4xl text-center my-4 font-serif'>Choose <span className='text-info'>Others</span></h1>
            <div className='grid grid-cols-5 gap-4 px-4 mb-2 mt-6'>
                {
                    cardProduct.map(product => <ChooseCard key={product?.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default OthersPage;

OthersPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

export const getStaticProps = async () => {
    const res = await fetch("https://swift-pc-construct-server.vercel.app/api/v1/products");
    const products = await res.json();
    const cardProduct = await products?.data?.filter((product) => product?.category === "Others");

    return {
        props: {
            cardProduct
        },
        revalidate: 30,
    }
}
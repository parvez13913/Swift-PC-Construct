/* eslint-disable @next/next/no-img-element */
import CategoryCard from "../../components/Ui/CategoryCard";
import SelectedComponent from "../../components/Ui/SelectedComponent";
import RootLayout from "../../components/shared/Layouts/RootLayout";
import { useSelector } from "react-redux";

const PcBuilderPage = ({ categories }) => {
    const products = useSelector((state) => state.component?.components);
    return (
        <div>
            <h1 className='text-center text-4xl font-serif font-semibold text-info my-8'>Build Your Own Computer</h1>
            <div className='w-9/12 mx-auto'>
                {
                    products?.map(product => <SelectedComponent key={product.id} product={product} />)
                }
            </div>
            <div className='w-9/12 mx-auto'>
                {
                    categories?.data?.map(productcategory => <CategoryCard key={productcategory.id} productcategory={productcategory} />)
                }
            </div>

        </div>
    );
};

export default PcBuilderPage;


PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

export const getServerSideProps = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/categories`);
    const categories = await res.json();

    return {
        props: {
            categories,
        }
    }
}

/* eslint-disable @next/next/no-img-element */
import RootLayout from "../../components/shared/Layouts/RootLayout";

const ProductsDetailsPage = ({ product }) => {
    const { image, rating, status, category, productName, price } = product?.data;
    return (
        <div>
            <div className="flex justify-center font-serif">
                <div className="card lg:card-side bg-base-100 shadow-xl mt-8  p-4 border border-info">
                    <figure>
                        <img
                            style={{ aspectRatio: "300 / 200" }}
                            className=" w-[500px] h-[400px]"
                            src={image}
                            alt="product image"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Product Name: {productName}</h2>
                        <div className="flex items-center space-x-8">
                            <h2 className="badge badge-info">category: {category}</h2>
                            <h2 className="badge badge-info">Price: {price}</h2>
                            <h2 className="badge badge-info">Status: {status}</h2>
                            <h2 className="badge badge-info">Rating: {rating}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetailsPage;


ProductsDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}


export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/v1/products");
    const products = await res.json();

    const paths = await products?.data?.map((product) => ({
        params: { productId: product._id }
    }))

    return {
        paths,
        fallback: false,
    }
}


export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/api/v1/products/${params?.productId}`);
    const product = await res.json();

    return {
        props: {
            product,
        }
    }
}
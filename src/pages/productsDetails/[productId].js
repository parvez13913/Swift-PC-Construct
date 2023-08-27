/* eslint-disable @next/next/no-img-element */
import RootLayout from "../../components/shared/Layouts/RootLayout";

const ProductsDetailsPage = ({ product }) => {
    const { image, productName, category, price, status, averageRating, keyFeatures, reviews, description } = product?.data;
    return (
        <div className="my-8">
            <div className="flex justify-center font-serif">
                <div className="card lg:card-side bg-base-100 shadow-xl my-4 p-4 border border-info">
                    <figure>
                        <img
                            style={{ aspectRatio: "300 / 200" }}
                            className=" w-[500px] h-[400px]"
                            src={image}
                            alt="product image"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-info">{productName}</h2>
                        <h2 className="badge badge-info">category: {category}</h2>
                        <h2 className="badge badge-info">Price: {price}</h2>
                        <h2 className="badge badge-info">Status: {status}</h2>
                        <h2 className="badge badge-info">Average Rating: {averageRating}</h2>
                        <div className="space-x-7">
                            <h2 className="badge badge-info">Model: {keyFeatures[0]?.model}</h2>
                            <h2 className="badge badge-info">Brand: {keyFeatures[0]?.brand}</h2>
                            <h2 className="badge badge-info">Type: {keyFeatures[0]?.type}</h2>
                        </div>
                        <h2 className="badge badge-info">Reviews: {reviews.length}</h2>
                    </div>
                </div>
            </div>
            <div className="shadow-xl my-4 p-4 border border-info w-9/12 mx-auto">
                <h1 className="text-info text-2xl py-2 font-serif font-semibold">Description</h1>
                <p>{description}</p>
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

    const paths = products?.data?.map((product) => ({
        params: { productId: product._id },
    }));

    return { paths, fallback: false };
};


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
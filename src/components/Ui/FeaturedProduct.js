/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const FeaturedProduct = ({ product }) => {
    const { image, productName, category, price, status, rating, id } = product;
    return (
        <Link href={`/productsDetails/${id}`} className="card bg-base-100 shadow-xl flex flex-col border border-info my-8">
            <figure>
                <img
                    src={image}
                    alt="Product"
                    style={{ aspectRatio: "300 / 200" }}
                    className=" w-[300px] h-[200px]"
                />
            </figure>
            <div className="card-body">
                <h2 className=" text-sm md:text-md lg:text-xl">
                    {productName} <span className="badge badge-xs badge-warning">{category}</span>
                </h2>
                <p className="text-sm text-gray-400">Price: {price}</p>
                <p className="text-sm text-gray-400">Status: {status}</p>
                <p className="text-sm text-gray-400">Rating: {rating}</p>
            </div>
        </Link >
    );
};

export default FeaturedProduct;
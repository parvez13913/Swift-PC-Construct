/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const FeaturedCategories = ({ category }) => {
    return (
        <Link
            href={`/category/${category?.category}`}
        >
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img src={category?.categoryIcon} alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-serif font-semibold text-info">{category?.name}</h2>
                </div>
            </div>
        </Link>

    );
};

export default FeaturedCategories;
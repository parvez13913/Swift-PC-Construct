/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const FeaturedCategories = ({ category }) => {
    return (
        <div className='flex justify-between p-4 my-3 shadow-lg'>
            <div className='flex items-center space-x-8'>
                <div>
                    <img src={category?.categoryIcon} alt="category Icon" />
                </div>
                <h1 className='font-serif'>{category?.name}</h1>
            </div>

            <div>
                <Link
                    href={`/category/${category?.category}`}
                    className='btn btn-info btn-outline font-serif normal-case'
                >Choose</Link>
            </div>
        </div>

    );
};

export default FeaturedCategories;
/* eslint-disable @next/next/no-img-element */
const CategoryCard = ({ category }) => {
    const { categoryIcon, name } = category
    return (

        <div className='flex justify-between p-4 my-3 shadow-lg'>
            <div className='flex items-center space-x-8'>
                <div>
                    <img src={categoryIcon} alt="category Icon" />
                </div>
                <h1 className='font-serif'>{name}</h1>
            </div>

            <div>
                <button className='btn btn-info btn-outline font-serif normal-case'>Choose</button>
            </div>
        </div>

    );
};

export default CategoryCard;
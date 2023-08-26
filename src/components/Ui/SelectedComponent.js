/* eslint-disable @next/next/no-img-element */

const SelectedComponent = ({ product }) => {
    const { image, productName, price } = product;
    return (
        <div className='flex justify-between p-4 my-3 shadow-lg'>
            <div className='flex items-center space-x-8'>
                <div>
                    <img
                        src={image}
                        alt="product image"
                        style={{ aspectRatio: "300 / 200" }}
                        className=" w-[80px] h-[50px]"
                    />
                </div>
                <h1 className='font-serif'>{productName}</h1>
                <h1 className='font-serif'>Price: {price}</h1>
            </div>
        </div>
    );
};

export default SelectedComponent;
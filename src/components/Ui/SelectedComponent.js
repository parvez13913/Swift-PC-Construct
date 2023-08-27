/* eslint-disable @next/next/no-img-element */
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeFromComponent } from "../../redux/features/componentSlice";

const SelectedComponent = ({ product }) => {
    const { image, productName, price, quantity } = product;
    const dispatch = useDispatch();
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
                <h1 className='font-serif'>Quantity: {quantity}</h1>
            </div>
            <button
                className="text-red-400 text-3xl"
                onClick={() => dispatch(removeFromComponent(product))}
            >
                <FaXmark />
            </button>
        </div>
    );
};

export default SelectedComponent;
/* eslint-disable @next/next/no-img-element */

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { selectComponent } from "../../redux/features/componentSlice";

const ChooseCard = ({ product }) => {
    const { productName, category, image, price, status, averageRating } = product;
    const dispatch = useDispatch();
    const router = useRouter();

    const handelAddToBuilder = (product) => {
        dispatch(selectComponent(product));
        router.push("/builder/pcbuilder");
    }

    return (
        <div className="card bg-base-100 shadow-xl flex flex-col border border-info my-8">
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
                <p className="text-sm text-gray-400">Rating: {averageRating}</p>
            </div>
            <div className='mx-auto my-4'>
                <button
                    className='btn btn-info btn-outline normal-case'
                    onClick={() => handelAddToBuilder(product)}
                >
                    Add To Builder
                </button>
            </div>
        </div >
    );
};

export default ChooseCard;
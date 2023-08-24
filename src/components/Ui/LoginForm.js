import Link from 'next/link';
import { FaGoogle, FaGithub } from "react-icons/fa6";
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="border border-info shadow-lg mx-8 w-1/7 mb-8 rounded-lg px-9 py-4"
            >
                <h6 className="text-center my-6 text-xl font-bold border-b-2 border-spacing-3 border-info">
                    Sign In
                </h6>

                {/* email*/}
                <label className="block font-medium mb-1 text-left">Email</label>
                <input
                    className="border py-2 px-4 rounded-lg my-2 w-full"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is Required",
                        },
                    })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                {/* password */}
                <label className="block font-medium mb-1 text-left">Password</label>
                <input
                    className="border py-2 px-4 rounded-lg my-2 w-full"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is Required",
                        },
                    })}
                />

                {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                )}

                <button
                    className="bg-blue-900 text-white p-2 rounded-lg w-full mt-2"
                    type="submit"
                >
                    Sign In
                </button>
                {/* <p className="my-3 text-center">
                    New to Bick Hero??{" "}
                    <Link to="/signup" className="text-red-500">
                        Please Signup
                    </Link>
                </p> */}
            </form>
        </div>
    );
};

export default LoginForm;
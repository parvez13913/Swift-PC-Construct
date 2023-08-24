import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa6";

const SocialAuthentication = () => {
    return (
        <div className='flex items-center justify-center space-x-10'>
            <FaGoogle
                className='text-4xl link text-[#3cba54]'
            />
            <FaGithub
                className='text-4xl link text-[#171515]'
                onClick={() => signIn("github", {
                    callbackUrl: "http://localhost:3000/"
                })}
            />
        </div>
    );
};

export default SocialAuthentication;
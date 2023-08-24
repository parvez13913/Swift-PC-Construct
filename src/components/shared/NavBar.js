import Link from "next/link";
import { BsDisplayFill } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react"

const NavBar = () => {
    const { data: session } = useSession();
    console.log(session);
    return (
        <div className="navbar bg-neutral sticky top-0 border-b-2 border-info z-30 backdrop-blur bg-transparent shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <Link
                    href="/"
                    className="btn btn-info btn-outline normal-case text-xl">
                    <BsDisplayFill />
                    Swift PC Construct
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li>
                                    <a>CPU</a>
                                </li>
                                <li>
                                    <a>Motherboard</a>
                                </li>
                                <li>
                                    <a>RAM</a>
                                </li>
                                <li>
                                    <a>Power Supply Unit</a>
                                </li>
                                <li>
                                    <a>Storage Device</a>
                                </li>
                                <li>
                                    <a>Monitor</a>
                                </li>
                                <li>
                                    <a>Others</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-10">
                <Link
                    href="/builder/pcbuilder"
                    className="btn btn-info btn-outline normal-case ">PC Builder
                </Link>
                {
                    session?.user ? <button className="btn btn-info btn-outline normal-case"
                        onClick={() => signOut()}
                    >Sign Out</button> : <Link href="/signin" className="btn btn-info btn-outline normal-case">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;
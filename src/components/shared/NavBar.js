import Link from "next/link";
import { BsDisplayFill } from "react-icons/bs";
import { useSession, signOut } from "next-auth/react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";

const NavBar = () => {
    const { data: session } = useSession();
    const { user } = useAuthState(auth);
    const isAuthenticated = session?.user || user;
    return (
        <div className="navbar bg-neutral sticky top-0 border-b-2 border-info z-30 backdrop-blur bg-transparent shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li tabIndex={0}>
                            <details>
                                <summary>Categories</summary>
                                <ul className="p-2">
                                    <li>
                                        <Link href="/category/cpu">CPU</Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/category/motherboard">Motherboard</Link>
                                    </li>
                                    <li>
                                        <Link href="/category/ram">RAM</Link>
                                    </li>
                                    <li>
                                        <Link href="/category/psu">Power Supply</Link>
                                    </li>
                                    <li>
                                        <Link href="/category/storage">Storage</Link>
                                    </li>
                                    <li>
                                        <Link href="/category/monitor">Monitor</Link>
                                    </li>
                                    <li>
                                        <Link href="/category/others">Others</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                <Link
                    href="/"
                    className="btn btn-info btn-outline normal-case text-xl hidden lg:flex">
                    <BsDisplayFill />
                    Swift PC Construct
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2">
                                <li>
                                    <Link href="/category/cpu">CPU</Link>
                                </li>
                                <li>
                                    <Link
                                        href="/category/motherboard">Motherboard</Link>
                                </li>
                                <li>
                                    <Link href="/category/ram">RAM</Link>
                                </li>
                                <li>
                                    <Link href="/category/psu">Power Supply</Link>
                                </li>
                                <li>
                                    <Link href="/category/storage">Storage</Link>
                                </li>
                                <li>
                                    <Link href="/category/monitor">Monitor</Link>
                                </li>
                                <li>
                                    <Link href="/category/others">Others</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-end space-x-10">
                <Link
                    href="/builder/pcbuilder"
                    className="btn btn-info btn-outline normal-case ">PC Builder
                </Link>
                {
                    isAuthenticated ? <button className="btn btn-info btn-outline normal-case"
                        onClick={() => signOut()}
                    >Sign Out</button> : <Link href="/signin" className="btn btn-info btn-outline normal-case">Sign In</Link>
                }
            </div>
        </div>
    );
};

export default NavBar;
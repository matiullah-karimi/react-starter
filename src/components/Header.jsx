import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout, useAuth } from '../services/auth.service';
import { setAuthUser } from '../redux/user/user.slice';

export default function Header() {
    const [showMenu, setShowMenu] = useState(true);
    const dispatch = useDispatch();

    const authUser = useAuth();

    const signout = () => {
        dispatch(setAuthUser(null));
        logout();
    }

    return (
        <header className="bg-gray-800">
            <nav
                className="
                    flex flex-wrap
                    items-center
                    justify-between
                    w-full
                    py-4
                    md:py-0
                    px-4
                    text-lg
                    bg-gray-800">
                <div>
                    <Link to="/" className="text-gray-200">
                        Afghan Shoppify
                    </Link>
                </div>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="menu-button"
                    className="h-6 w-6 cursor-pointer md:hidden block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>

                <div className={`w-full md:flex md:items-center md:w-auto ${showMenu ? 'block' : ' hidden'}`} id="menu">
                    <ul className=" pt-4 text-base text-gray-200 md:flex md:justify-between md:pt-0">
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/contact">Contact</Link>
                        </li>
                        {
                            authUser && <li>
                                <a className="md:p-4 py-2 block hover:text-purple-400 cursor-pointer" onClick={signout}>Sign out</a>
                            </li>
                        }
                        {
                            !authUser &&
                            <div className="flex">
                                <li>
                                    <Link className="md:p-4 py-2 block hover:text-purple-400" to="/register">Signup</Link>
                                </li>
                                <li>
                                    <Link className="md:p-4 py-2 block hover:text-indigo-400 text-indigo-500" to="/login">Sign In</Link>
                                </li>
                            </div>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

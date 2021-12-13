import { useState } from "react"
import { Link } from "react-router-dom";

export default function Header() {
    const [showMenu, setShowMenu] = useState(true);

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
                        React Starter Project
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
                            <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                            >Features</a
                            >
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                            >Pricing</a
                            >
                        </li>
                        <li>
                            <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
                            >Customers</a
                            >
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-purple-400" to="/register">Signup</Link>
                        </li>
                        <li>
                            <Link className="md:p-4 py-2 block hover:text-indigo-400 text-indigo-500" to="/login">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

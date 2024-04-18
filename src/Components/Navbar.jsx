import { Link } from 'react-router-dom'

import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
export default function Header() {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            {/* Desktop Navbar */}
            <div className="sticky top-0 w-full h-20 shadow-md z-[100] nav-bg text-white">
                <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
                    <div class="flex items-center justify-center w-28 h-9 md:ml-10 px-12 pt-2 pb-2 rounded-2xl logo">
                        <span class="text-white font-base text-sm font-poppins">Logo</span>
                    </div>

                    <div>
                        <ul className="hidden md:flex items-center font-Inter font-medium">
                            <li className="border-b border-transparent ml-16 text-sm uppercase hover:border-b hover:border-gray">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="border-b border-transparent ml-16 text-sm uppercase hover:border-b hover:border-gray">
                                <Link to={'/about'}>About</Link>
                            </li>
                            <li className="border-b border-transparent ml-16 text-sm uppercase hover:border-b hover:border-gray">
                                <Link to={'/experience'}>Experience</Link>
                            </li>
                            <li className="border-b border-transparent ml-16 text-sm uppercase hover:border-b hover:border-gray">
                                <Link to={'/projects'}>Projects</Link>
                            </li>

                            <Link to="/skills">
                                <button className="bg-white text-black ml-16 rounded-3xl py-1 px-3 text-sm font-bold font-Inter">
                                    Skills
                                </button>
                            </Link>

                        </ul>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size="20" />
                        </div>
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`${nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                        : ''
                        }`}
                >
                    <div
                        className={`${nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-blue p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                            }`}
                    >
                        <div className="flex w-full items-center justify-between">
                            <div class="flex items-center justify-center w-28 h-9  md:px-12 pt-2 pb-2 rounded-2xl logo">
                                <span class="text-white font-base text-sm font-poppins">Logo</span>
                            </div>
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className="py-4 flex flex-col font-Inter font-medium">
                            <ul className="uppercase">
                                <Link to='/'>
                                    <li className="py-4">Home</li>
                                </Link>

                                <Link to={'/about'}>
                                    <li className="py-4">About</li>
                                </Link>

                                <Link to={'/experience'}>
                                    <li className="py-4">Experience</li>
                                </Link>
                                <Link to={'/projects'}>
                                    <li className="py-4">Projects</li>
                                </Link>
                                <Link to={'/skills'}>
                                    <li className="py-4">Skills</li>
                                </Link>


                            </ul>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: "index",
            text: "Inicio",
        },
        {
            id: 2,
            link: "",
            text: "Contacto",
        },
        {
            id: 3,
            link: "galeria",
            text: "Galeria",
        }
        , {
            id: 4,
            link: "",
            text: "Archivos",
        },
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-pink-400 bg-white'>
            <div>
                <h1 className='text-5xl ml-2'>KocoPink</h1>
            </div>

            <ul className='hidden md:flex'>
                {links.map(({ id, link, text }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-pink-400 hover:scale-105 duration-200">
                        <Link to={`/${link}`}>
                            {text}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-pink-300 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-pink-100 text-pink-400'>
                    {links.map(({ id, link, text }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                onClick={() => setNav(!nav)}
                                to={`/${link}`}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Navbar
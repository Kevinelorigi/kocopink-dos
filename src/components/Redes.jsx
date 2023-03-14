import React from 'react'
import {FaFacebookF, FaInstagram, FaWhatsapp} from 'react-icons/fa'

const Redes = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Facebook <FaFacebookF size={30} />
                </>
            ),
            href: "https://www.facebook.com/profile.php?id=100063562120831",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: "https://www.instagram.com/koco.pink/",
        },
        {
            id: 3,
            child: (
                <>
                    Whatsapp <FaWhatsapp size={30} />
                </>
            ),
            href: "https://wa.link/rlvyce",
            style: "rounded-br-md"
        },
        
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        key={id}
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-pink-500" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Redes
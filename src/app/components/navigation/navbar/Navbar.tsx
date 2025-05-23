import React from 'react';
import Link from 'next/link';


const Links = [
    {href: "/home", text: "Projects"},
    {href: "/projects", text:  " Bar"}
];



const Navbar = () => {
  return (
    <nav className='bg-sky-900'>
        <div className="max-w-6xl mx-auto flex sm:flex-row py-4 px-6">
            <Link href="/" className="font-bold text-xl">Home</Link>
        <ul className= "md:ml-8 flex text-xl sm:flex-row space-x-6">
            {
                Links.map((link) => (
                    <li key={link.href}> 
                        <Link href={link.href} className="capitalize">
                            {link.text}
                        </Link>
                    </li>
                ))
            }
        </ul>

        </div>
    </nav>
  )

}

export default Navbar
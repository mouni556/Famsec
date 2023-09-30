"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from '../../../../public/image/logo.abc0bf27.svg';
import { useState } from 'react'; // Corrected the import statement for useState
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const links = [
    {
        id: 1,
        display: "Home",
        path: '#home'
    },
    {
        id: 2,
        display: "How We Work",
        path: '#work'
    },
    {
        id: 3,
        display: "Mission",
        path: '#mission'
    },
    {
        id: 4,
        display: "About",
        path: '#about'
    },
    {
        id: 5,
        display: "Contact",
        path: '#contact'
    },
];

const Page = () => {
    const [close, setClose] = useState(true); // Corrected the variable name

    const handleicon = ()=>{
        if(close === false){
            setClose(true)
        }else{
            setClose(false)
        }
    }

    return (
        <header className={`container    mx-auto px-4 lg:px-[83px]  py-5 lg:h-20 lg:flex justify-between items-center ${close === true ? 'h-[0px] z-99999' : ' h-[100vh] bg-white z-199999999'}`}>
            <div>
                <Link href='/'>
                    <Image src={Logo} alt="Logo" width={100} height={100} /> {/* Added alt attribute and width/height */}
                </Link>
            </div>
            <div>
                <ul className={`gap-10 grid justify-center w-[100%] mt-20 items-center lg:gap-6 lg:mt-0 lg:flex lg:items-center lg:justify-between ${close === true ? 'hidden ' : ''}`}>
                    {links.map(item => (
                        <li key={item.id} className="text-center">
                            <Link href={item.path}>{item.display}</Link>
                        </li>
                    ))}
                    <button className="lg:inline-block bg-cyan-950 px-5 py-2 text-white rounded-lg">Get started</button>
                </ul>
            </div>
            <div className="text-3xl absolute cursor-pointer right-6 top-6 lg:hidden" onClick={handleicon}>
                {close === true ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>
        </header>
    );
};

export default Page; // Updated the component name to start with an uppercase letter

"use client";

import Link from "next/link";
import MainNav from "@/components/ui/navbar/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/ui/navbar/navbar-actions";
import { useEffect, useState } from "react";
import { Category } from "@/types";
import { FaShoppingCart } from 'react-icons/fa';

export const revalidate = 0;

const Navbar = ({ categories }: { categories: Category[] }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl"> BOUTIQUE </p>
                    </Link>
                    {/* <div className="flex-grow text-right lg:flex lg:justify-end">
                        <MainNav data={categories} />
                    </div> */}
                    <button
                        onClick={toggleDrawer}
                        className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isDrawerOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                    <div
                        className={`lg:flex  lg:w-full ${isDrawerOpen ? " block bg-white z-10 text-black absolute right-0 top-20 py-4 w-60 h-screen" : "hidden relative"}`}
                    >
                        <MainNav data={categories} />
                    </div>
                    
                    <div className={" absolute right-14"}>
                    <NavbarActions />
                    </div>
                    <div className={" absolute right-36"}>
                    <FaShoppingCart size={24} /> 
                    </div>
                    
                </div>
            </Container>
        </div>
    );
};

export default Navbar;

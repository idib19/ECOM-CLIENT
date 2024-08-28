"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { categories } from "@/lib/statics";
import NavbarActions from "./navbar-actions";


interface MainNavProps {
    data?: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
    data = [...categories]
}) => {
    const pathname = usePathname();

    const routes = data && data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    return (
        <nav
            className="mx-6 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:space-x-6 "
        >
            { routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        'text-sm font-medium transition-colors hover:text-black',
                        route.active ? 'text-black' : 'text-neutral-500'
                    )}
                >
                    {route.label}
                </Link>
                
            ))}
            
        </nav>
    )
};

export default MainNav;
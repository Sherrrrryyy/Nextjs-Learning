'use client';

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Header() {
    const pathname = usePathname()

    return (
        <nav className="bg-blue-400 flex justify-center items-center py-2 gap-5 font-bold">
            <Link className={`link ${pathname === '/' ? "active underline" : ""}`} href='/'>
                Home
            </Link>

            <Link className={`link ${pathname === '/about' ? "active underline" : ""}`} href='/about'>
                About
            </Link>

            <Link className={`link ${pathname === '/blogs' ? "active underline" : ""}`} href='/blogs'>
                Blogs
            </Link>

            <Link className={`link ${pathname === '/dashboard' ? "active underline" : ""}`} href='/dashboard'>
                Dashboard
            </Link>

            <Link className={`link ${pathname === '/contact' ? "active underline" : ""}`} href='/contact'>
                ContactUs
            </Link>
        </nav>
    )
}
'use client';

import { usePathname } from "next/navigation"
import Link from "next/link"

export function Header() {
    const pathname = usePathname()

    return (
        <nav className="bg-gray-300 flex justify-between p-2 items-center gap-5 font-bold">
            <div>
            <h1 className="text-2xl">SE.BLOG</h1>
            </div>
            <div className="flex gap-5 pr-10">
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
            </div>
        </nav>
    )
}
import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (
        <section className="min-h-screen flex">
            <div className="w-1/3 border-r-2 border-purple-800">
                <Link className="p-2 text-center w-full block hover:bg-purple-300" href='/dashboard/settings'>
                    Setting
                </Link>
                <Link className="p-2 text-center w-full block hover:bg-purple-300" href='/dashboard/profile'>
                    Profile
                </Link>
            </div>
            <div className="w-2/3">{children}</div>
        </section>
    )

}
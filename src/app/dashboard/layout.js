export default function DashboardLayout({children}){
    return (
        <section className="min-h-screen flex">
            <div className="w-1/3 bg-gray-500"></div>
            <div className="w-2/3">{children}</div>
        </section>
    )
    
}
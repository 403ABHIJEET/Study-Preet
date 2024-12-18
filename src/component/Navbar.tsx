import Link from "next/link";

export default function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center items-center h-20">
            <div className="w-1/3 flex justify-around text-2xl text-white font-extrabold">
                <Link href="/" className="hover:text-black " >Home</Link>
                <Link href="/" className="hover:text-black">Dashboard</Link>
                <Link href="/" className="hover:text-black">About</Link>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"

function Navbar() {

    const links = <>
        <li><Link>Home</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Dashboard</Link></li>
        <li><Link>Our Menu</Link></li>
        <li><Link>Our Shop</Link></li>
        <li><Link>Cart</Link></li>
        <li><Link>Sign Out</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <h1>Bistro Boss</h1><br />
                    {/* <p>Restaurant</p> */}
                </a>
            </div>
            <div className="flex-none gap-2">
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    {links}
                </ul>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
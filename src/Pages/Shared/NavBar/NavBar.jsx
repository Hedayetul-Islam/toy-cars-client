
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navItem = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-toy">Add Toy</Link></li>
        <li><Link to="/all-toys">All Toys</Link></li>

        <li><Link to="/blogs">Blogs</Link></li>
        {
            user && <img className="w-16 h-16 rounded-full" title={user?.displayName} src={user?.photoURL} alt="" />
        }

        {user ?
            <>
                <li><Link to="/my-toys">My Toys</Link></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
            </> :
            <li><Link to="/login">
                <button>Login</button>
            </Link></li>
        }

    </>

    return (
        <>
            <div className="navbar text-base-content">
                <div className="navbar-start">
                    <div className="dropdown z-30">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-red-600 text-white rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost font-serif text-4xl text-indigo-900">Baby Shop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-lg font-serif font-medium menu-horizontal px-1 text-indigo-900">
                        {navItem}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
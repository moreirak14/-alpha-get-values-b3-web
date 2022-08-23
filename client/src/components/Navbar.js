import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "features/user_auth";

const Navbar = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.user);

    const authLinks = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                    Dashboard
                </NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#!" onClick={() => dispatch(logout())}>Logout</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My Actions
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#!">PETR4</a></li>
                    <li><a className="dropdown-item" href="#!">ITSA4</a></li>
                    <li><a className="dropdown-item" href="#!">MGLU3</a></li>
                </ul>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                    Register
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Alpha Invest
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>

                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
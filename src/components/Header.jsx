import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink className="mr-3 btn" to="/">Home</NavLink>
            <NavLink className="mr-3 btn" to="/users">User</NavLink>
            <NavLink className="mr-3 btn" to="/signup">Sign Up</NavLink>
            <NavLink className="mr-3 btn" to="/signin">Sign In</NavLink>
        </div>
    );
};

export default Header;
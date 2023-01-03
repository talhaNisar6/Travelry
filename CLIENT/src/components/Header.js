import "./Header.css";
import logo from './../images/logo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <ul>
                    <li> <img src={logo} alt="logo" /> </li>
                    <li>Travel</li>
                    <li>Hotels</li>
                    <li>Places</li>
                    <li>Weather</li>
                    <li>To Do's</li>
                    <li>Uploads</li>
                    <li>Sign In</li>
                    <li>Register</li>
                </ul>
            </nav>

        </div>
    )
}

export default Header;
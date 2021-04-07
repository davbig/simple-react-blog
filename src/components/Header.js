import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {

    let location = useLocation();

    return (
        <header className={location.pathname === '/' ? 'transparent-header' : ''}>
            <div className="container">
                <h1>My simple Blog</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/blog/add">New Post</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;
import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-4">
            <Link to="/">
                <ArrowLeftCircle className="w-6 h-6" />
            </Link>
        </nav>
    );
}

export default Navbar;
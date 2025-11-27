import { UserCircleIcon } from "lucide-react";

const Header = () => {
    return (
        <header className="p-4">
            <div className="flex gap-x-1 items-center">
                <UserCircleIcon className="w-6 h-6" />
                <h2 className="font-medium">Sahil Saroj</h2>
            </div>
        </header>
    );
}

export default Header;
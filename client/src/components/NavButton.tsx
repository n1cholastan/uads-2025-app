import { NavLink } from "react-router";
import { NavButtonProps } from "../utils/FrontendTypes";
function NavButton({ linkto, buttontext} : NavButtonProps) {
    return (
        <div>
            <NavLink
                to={linkto}
                className= "px-5 sm:px-10 md:px-5 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
            >
                {buttontext}
            </NavLink>
        </div>
    );
}

export default NavButton;
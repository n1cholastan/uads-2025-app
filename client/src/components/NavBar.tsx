import sal from "../assets/sal.png";
import { NavLink } from "react-router";
function NavBar() {
    return (
        <div className="w-screen">
        <div className="bg-cream m-4 p-2 text-black rounded-4xl flex flex-row items-center justify-between align-center">
            <div className="w-1/6 flex align-content-center">
                <div>
                <img src={sal} className="w-2/3 m-1 ml-4"/>
                </div>
                <NavLink to="/" className="text-red font-title text-5xl self-center h-fit transition-colors duration-300 ease-in-out hover:text-brown">UADS</NavLink>
            </div>
            
            <div className="flex flex-row pr-4 w-fit">
                <div className="px-8">
                    <NavLink to="/sponsors" className="font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl text-red hover:text-brown transition-colors duration-300 ease-in-out">Sponsors</NavLink>   
                </div>
                <div className="px-8">
                    <NavLink to="/events" className="font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl text-red hover:text-brown transition-colors duration-300 ease-in-out">Events</NavLink>   
                </div>
                <div className="px-8">
                    <NavLink to="/about" className="font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl text-red hover:text-brown transition-colors duration-300 ease-in-out">About</NavLink>   
                </div>
                <div className="pl-8">
                <Button linkto="/join" buttontext="Join Us"></Button>
                </div>
            </div>
            
          </div>
        </div>
      );

}

function Button({ linkto, buttontext }) {
    return (
        <div>
            <NavLink
                to={linkto}
                className= "px-5 sm:px-10 md:px-6 lg:px-10 py-3 rounded-full font-body font-bold sm:text-xl md:text-lg lg:text-xl xl:text-2xl w-fit transition-colors duration-300 ease-in-out bg-red text-cream hover:bg-brown"
            >
                {buttontext}
            </NavLink>
        </div>
    );
}

export default NavBar;
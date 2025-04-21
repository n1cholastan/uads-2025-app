import star from "../assets/star.svg";
function StarSeparator() {
    return (
        <div className="my-16 flex justify-center items-center animate-sway">
            <img src={star} className="w-16"></img>
        </div>
    )
}

export default StarSeparator;
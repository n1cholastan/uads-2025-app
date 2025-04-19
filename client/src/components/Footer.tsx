function Footer() {
    return (
        <div className="bg-green-500 w-screen text-black py-4 flex flex-col items-center">
          <div className="w-4/12 md:w-2/12 mt-5 text-center">
            <p className="font-inter font-bold">&copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      );

}

export default Footer;
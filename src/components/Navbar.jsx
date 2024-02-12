import logo from "../assets/images/logo.png";

export const Navbar = () => {
    return (
        // navbar parent component
        <div className="bg-gradient-to-r from-light-red to-red p-2 flex flex-row justify-between sticky top-0 z-10 backdrop-blur-sm">
            {/* logoside */}
            <div className="flex">
                <div className="">
                    <img
                        className="h-16 w-auto"
                        src={logo}
                        alt="Pokédex logo"
                    />
                </div>
                <h1 className="text-5xl mt-2">Pokédex</h1>
            </div>

            {/* control side */}
            <div className="flex">
                {/* Search box */}
                <div className="input-wrapper">
                    <button className="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            height="25px"
                            width="25px"
                        >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                stroke="#fff"
                                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                            ></path>
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                stroke="#fff"
                                d="M22 22L20 20"
                            ></path>
                        </svg>
                    </button>
                    <input
                        placeholder="Search..."
                        className="input"
                        name="text"
                        type="text"
                    />
                </div>
            </div>
        </div>
    );
};

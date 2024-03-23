import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CardList } from "./components/CardList";
import { Loader } from "./components/Loader";
import { Modal } from "./components/Modal";

function App() {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]); // array of pokemon data on the site.
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    async function getpokemonList() {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
            );
            const res = await response.json();

            setTimeout(() => {
                setData((prevData) => {
                    return [...prevData, ...res.results];
                });
            }, 1000);
            setPage((prevPage) => prevPage + 20);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
        console.log(page);
    }
    useEffect(() => {
        getpokemonList();
    }, []);

    function checkIfScrolledToBottom() {
        // Calculate how far the user has scrolled down the page
        const scrollTop =
            window.scrollY !== undefined
                ? window.scrollY
                : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                  ).scrollTop;
        const windowHeight =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
        const documentHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        // Check if the user has scrolled to the bottom
        if (scrollTop + windowHeight === documentHeight) {
            // If scrolled to bottom, log something to the console
            getpokemonList();
            console.log(scrollTop, windowHeight, documentHeight);
        }
    }
    console.log(isLoading);

    useEffect(() => {
        // const debouncedScrollCheck = debounce(checkIfScrolledToBottom, 200);
        window.addEventListener("scroll", checkIfScrolledToBottom);
        return () =>
            window.removeEventListener("scroll", checkIfScrolledToBottom);
    }, [isLoading]);

    return (
        <>
            <Navbar />
            {isLoading && <Loader />}
            <div className={`${isLoading ? "hidden" : ""} abc`}>
                <CardList data={data} />
            </div>
            {error && <p>Error: {error.message}</p>}
            <Modal id={1}/>
        </>
    );
}

export default App;

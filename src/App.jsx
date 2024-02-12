import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CardList } from "./components/CardList";

function App() {
    const [limit, setCount] = useState(0);
    const [data, setData] = useState([]); // array of pokemon data on the site.

    return (
        <>
            <Navbar/>
            <CardList/>
        </>
    );
}

export default App;

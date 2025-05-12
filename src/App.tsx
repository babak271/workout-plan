import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <a href="#"><img src="logo" alt="logo"/></a>
            </div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
}

export default App;

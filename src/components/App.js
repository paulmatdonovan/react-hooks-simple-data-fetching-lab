// create your App component here
// import React from 'react';
import React, { useEffect, useState } from "react";

function App() {
    const [dog, setDog] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDog(data.breeds);
                setIsLoaded(true);
            })
    }, [])
    if (!isLoaded) return <p> Loading...</p>

    return (
        <div>
            <img src={data.breeds.image} alt="A Random Dog" />
        </div>
    )
        ;
}

export default App;
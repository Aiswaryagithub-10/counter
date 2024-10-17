import { useState } from "react";

function Randomnumber() {
    const [num, setNum] = useState(0);

    function rdn() {
        const randomNumber = Math.floor(Math.random() * 100); 
        setNum(randomNumber);
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={rdn}>Click me</button>
        </div>
    );
}

export default Randomnumber;

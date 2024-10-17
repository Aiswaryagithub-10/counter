import { useState } from "react";

function Formadd(){
    const [num1,setNum1]= useState(" ")
    const [num2,setNum2]= useState(" ")
    const [result,setResult]= useState("Result")


    function handleNum1(event)
    {
        setNum1(event.target.value);
    }
    function handleNum2(event)
    {
        setNum2(event.target.value);
    }
    function handleResult(event){
        event.preventDefault()
        setResult(Number(num1)+Number(num2))
    }
    return(
        <>
        <form onSubmit={handleResult}>
            <input type="number" value={num1} onChange={handleNum1}></input><br/><br/>
            <input type="number" value={num2} onChange={handleNum2}></input><br/><br/>
            <button type="submit">Add Numbers</button>
        </form>
        <h1>{result}</h1>
        </>
    )
}
export default Formadd
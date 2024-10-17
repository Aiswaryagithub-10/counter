import { useState } from "react";

function Form(){
    const [fname,setFname]= useState(" ")
    const [lname,setLname]= useState(" ")
    const [Result,setResult]= useState("Result")


    const  handleFname=(event)=>
    {
        setFname(event.target.value)
    }
    const handleLname=(event)=>
    {
        setLname(event.target.value)
    }
    const handleResult=(event)=>
        {
        event.preventDefault()
        setResult(fname+" "+lname)
    }
    return(
        <>
        <form onSubmit={handleResult}>
            <input value={fname} onChange={handleFname}></input><br/><br/>
            <input value={lname} onChange={handleLname}></input><br/><br/>
            <button type="submit">Submit</button>
        </form>
        <h1><ResultComp result = {Result}/></h1>
        </>
    )
    function ResultComp({result}){
        return<>{result} </>;
    }
}
export default Form
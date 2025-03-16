import React,{useState} from "react"

function myCarapp(){
    const [car,setCar] = useState({year:2024,
        make:"Ford",
        model:"mustang"
    });

    function handleYearChange(event)
    {
        setCar({...car,year:event.target.value});
    }
    function handleMakeChange(event)
    {
        setCar({...car,make:event.target.value});
    }
    function handleModelChange(event)
    {
        setCar({...car,model:event.target.value});
    }

    
    return (<div>
        <p>YoUR fAVORITE car is : {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={handleYearChange}/><br></br>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br></br>
        <input type="text" value={car.model} onChange={handleModelChange}/><br></br>
    </div>);
}
export default myCarapp
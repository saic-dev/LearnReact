import React,{useState} from "react";
function arrofobj(){
    const [cars,setcars]=useState([])
    const [carYear,setCarYear]=useState([]);
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");
    function handleaddCar(event)
    {
        const newCar={year:carYear,make:carMake,model:carModel};
        setcars(cars=>[...cars,newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setcars(c=>c.filter((_,i) => i!== index));    
    }
    function handleYearChange(event)
    {
        setCarYear(event.target.value);
    }
    function handleMakeChange(event){
        setCarMake(event.target.value);
    }
    function handleModelChange(event)
    {
        setCarModel(event.target.value);
    }
    return (<div>
        <h2>
            List Of Car Objects
        </h2>
        <ul>
            {cars.map((car,index)=>
            <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearChange}/><br></br>
        <input type="text" value={carMake} onChange={handleMakeChange}  placeholder="Enter car make"/><br/>
        <input type="text" value={carModel} onChange={handleModelChange}  placeholder="Enter car model"/><br/>
        <button onClick={handleaddCar}>Add Car</button>
    </div>);
}
export default arrofobj
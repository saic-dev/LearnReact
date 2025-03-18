import React,{useState} from "react";
function Array(){
    const styles={
        cursor : "pointer"
    }
    const [foods,setFoods]=useState(["Apple","Banana","berry"]);
    function handleAddFood(){
        const newFood=document.getElementById("foodinput").value;
        document.getElementById("foodinput").value="Thanks";
        setFoods(foods=>[...foods,newFood]);
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!==index));
    }
    return (
        <div>
            <h2>List Of Food</h2>
            <ul>
                {foods.map((food,index)=>
                <li key={index} onClick={()=>handleRemoveFood(index)} style={styles}>{food}</li>)}
            </ul>
            <input type="text" id="foodinput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}
export default Array
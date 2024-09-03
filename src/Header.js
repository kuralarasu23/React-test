import React, { useState } from "react";

const Header = () => {

    const[count,setCount]=useState(99);
    
    function incrementfunction() {
        setCount(count+1);
        
    }
    function decreamentfunction() {
        setCount(count-1);
        
    }
    if (count<=0) {
      decreamentfunction = () => setCount(1);
    }
    if (count>=10) {
      incrementfunction = () => setCount(10);
      
    }
    const [color, setColor] = useState("yellow");

    
        const[brand,setBrand]=useState("Mahendra")
        const[colors,setColors]=useState("Black")
        const[model,setModel]=useState("Thor")
        const[year,setYear]=useState("2003")
        

        const[car,setCar]=useState({
            brand:"Mahendra",
            model:"Thor",
            year:"2003",
            color:"Black"

        }
        )
        const[click,setClick]=useState(0);
        const[geeks]=useState('Geeksforgeeks')

  return (
    <div>
        <p>Lets earn money</p>
        <button onClick={incrementfunction}>+</button>
        <button>{count}</button>
        <button onClick={decreamentfunction}>-</button>
        <h1>My favorite color is {color}!</h1>
        <button
        type="button"
        onClick={() => setColor("Black")}
      >Black</button>
      <h1>my {brand}</h1>
      <p>It is a {colors} {model} from {year}</p>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <p>You clicked {click} times</p>

            <button onClick={() => setClick(click + 1)}>
                Click me
            </button>
            <h1>Welcome  to {geeks}</h1>
       
    </div>
  )
}

export default Header
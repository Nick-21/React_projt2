import React,{useState} from 'react';
import "./App.css";



function App() {

  const [name , setName] = useState("");
  const [listofName , setlistofName] = useState([]);


  return (
    <div className="App">
      <input type = "text"
       onChange = {(e) => {
      setName(e.target.value);
    }}/>
      <button onClick = {() => {
        setlistofName([...listofName , name])
        setName("")
      }}>Add Name</button>


      {listofName.map((value , key) =>{
        return <h1 key={key}>{value}</h1>;
      })}
     
    </div>
  );
}

export default App;
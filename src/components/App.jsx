import React, {useState} from "react";
import ToDoitem from "../ToDoitems";

function App() {
  const [inputText, setInputtext] = useState();
  const [items, setItems] = useState([]);

  function handleChange(event){
    const newValue = event.target.value;
    setInputtext(newValue)
  }
function addItem(){
  setItems(prevValue =>{
    return [...prevValue, inputText]
  })
   setInputtext("");
}

function deleteItem(id){
  setItems(prevValue => {
    return prevValue.filter(
      (item, index)=>{
      return index !== id 
      })    
  })

}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick = {addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        
         <ul>
         {items.map((todoItem, index) => ( <ToDoitem
          key = {index}
          id ={index}
          text={todoItem}
          onChecked ={deleteItem} />) )}
          
        
        </ul>
      </div>
    </div>
  );
}

export default App;

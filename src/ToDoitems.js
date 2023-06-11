import React, {useState} from "react";

function ToDoitem(props){

   
    function handleChange(){
     

    }
     return(
         <div onClick ={() => {
            props.onChecked(props.id)
         }
         }>
             <li> {props.text}</li>
            
         </div>
    );
   
}

export default ToDoitem;
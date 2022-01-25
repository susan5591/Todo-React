import React from 'react';

function TodoList(props) {

    //edit items
    const editItem = (id) =>{
        //get the id and name of the data which user clicked to edit
        //get the toggle mode to change the submit button into edit button
        //now update the value of the input with the new updated value to edit
        //to pass the current element id to new state variable for reference
        props.setText(props.items[id].value)
        props.setToggle(true)  
        props.setItemId(id)        
    }

    //delete items from the list
    const deleteItem = (id) =>{
        const updatedItems = props.items.filter((element,index)=>{
            return index!==id
            }            
        )
        props.setItems(updatedItems)
    }

    //completed items 
    const completedItem = (id) =>{    
        props.setItems(props.items.map((item,index)=>{ 
            if(index===id){
                item.completed = !item.completed
            }  
            return item    
        }))
    }
    return(
        <div key={props.index} id={props.index} style={{textDecoration: props.element.completed? "line-through": 'none'}} >
            <h2 >{props.element.value}</h2> 
            <button onClick={()=>editItem(props.id)}><i className="fas fa-edit add-btn" title="Edit"></i></button>
            <button onClick={()=>completedItem(props.id)}><i className="far fa-check-double add-btn" title="Completed"></i></button>
            <button onClick={()=>deleteItem(props.id)}><i className="fas fa-trash-alt add-btn" title="Delete" ></i></button>
        </div>                       
    ) 
}

export default TodoList;

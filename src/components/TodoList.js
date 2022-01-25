import React from 'react';

function TodoList(props) {

    const {setText, setItems, setToggle, setItemId, items, element,id} = props

    //edit items
    const editItem = (id) =>{
        setText(items[id].value)
        setToggle(true)  
        setItemId(id)        
    }

    //delete items from the list
    const deleteItem = (id) =>{
        const updatedItems = items.filter((element,index)=>{
            return index!==id
            }            
        )
        setItems(updatedItems)
    }

    //completed items 
    const completedItem = (id) =>{    
        setItems(items.map((item,index)=>{ 
            if(index===id){
                item.completed = !item.completed
            }  
            return item    
        }))
    }
    return(
        <div style={{textDecoration: element.completed? "line-through": 'none'}} >
            <h2 >{element.value}</h2> 
            <button onClick={()=>editItem(id)}><i className="fas fa-edit add-btn" title="Edit"></i></button>
            <button onClick={()=>completedItem(id)}><i className="far fa-check-double add-btn" title="Completed"></i></button>
            <button onClick={()=>deleteItem(id)}><i className="fas fa-trash-alt add-btn" title="Delete" ></i></button>
        </div>                       
    ) 
}

export default TodoList;

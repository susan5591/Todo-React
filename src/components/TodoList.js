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
        <div className='list' style={{textDecoration: element.completed? "line-through": 'none'}} >
            <div className='left'>
                <h2 className='listItems'>{element.value}</h2>
            </div>
            <div className='button-list'>
                <i onClick={()=>editItem(id)} className=" submit fas fa-edit add-btn" title="Edit"></i>
                <i onClick={()=>completedItem(id)} className="submit far fa-check-double add-btn" title="Completed"></i>
                <i onClick={()=>deleteItem(id)} className="submit fas fa-trash-alt add-btn" title="Delete" ></i>
            </div>            
        </div>                       
    ) 
}

export default TodoList;

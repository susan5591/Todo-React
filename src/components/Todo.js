import React,{useState} from 'react';
import TodoList from './TodoList';

function Todo() {
    
    const [text,setText] = useState('')
    const [items,setItems] = useState([])

    //adding items to the items array
    const addItem = () =>{
        if(!text){

        }else{           
            setItems([...items, {value: text, completed: false}]) 
            setText('')
        }
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

    return <div>
        <div>
            <h2>Write Your Todo.</h2>
            <input type="text" 
                placeholder="Enter Your Item" 
                value={text} 
                onChange={e=>setText(e.target.value)}/>
            <button onClick={addItem}>Add Item</button>
        </div>
        <div>            
            {
            items.map((item,index)=>{
                return(
                    <div key={index} id={index} style={{textDecoration: item.completed? "line-through": 'none'}} >
                        <h2 >{item.value}</h2> 
                        <button><i className="fas fa-edit add-btn" title="Edit"></i></button>
                        <button onClick={()=>completedItem(index)}><i className="far fa-check-double add-btn" title="Completed"></i></button>
                        <button onClick={()=>deleteItem(index)}><i className="fas fa-trash-alt add-btn" title="Delete" ></i></button>
                    </div>                              
                ) 
            })}
        </div>
    </div>;
}

export default Todo;


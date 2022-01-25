import React,{useState} from 'react';
import Edit from './Edit';
import TodoList from './TodoList';

function Todo() {
    
    const [text,setText] = useState('')
    const [items,setItems] = useState([])
    const [toggle,setToggle] = useState(false)
    const [itemId,setItemId] = useState(null)

    //adding items to the items array
    const addItem = () =>{
        
        if(!text){

        }else if(text && toggle){
            setItems(items.map((item,index)=>{
                if(index === itemId){
                    item.value = text
                }
                return item
            })) 
            setText('')
            setToggle(false)
            setItemId(null)
        }
        else{     
            console.log("third");      
            setItems([...items, {value: text, completed: false}]) 
            setText('')
        }
    }

    //edit items
    const editItem = (id) =>{
        //get the id and name of the data which user clicked to edit
        //get the toggle mode to change the submit button into edit button
        //now update the value of the input with the new updated value to edit
        //to pass the current element id to new state variable for reference
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
    return <div>
        <div>
            <h2>Write Your Todo.</h2>
            <input type="text" 
                placeholder="Enter Your Item" 
                value={text}
                onChange={e=>setText(e.target.value)}
            />
            {toggle ? <button onClick={addItem}>Update Item</button> : <button onClick={addItem}>Add Item</button>}            
        </div>
        <div>            
            {
            items.map((item,index)=>{
                return(
                    <div key={index} id={index} style={{textDecoration: item.completed? "line-through": 'none'}} >
                        <h2 >{item.value}</h2> 
                        <button onClick={()=>editItem(index)}><i className="fas fa-edit add-btn" title="Edit"></i></button>
                        <button onClick={()=>completedItem(index)}><i className="far fa-check-double add-btn" title="Completed"></i></button>
                        <button onClick={()=>deleteItem(index)}><i className="fas fa-trash-alt add-btn" title="Delete" ></i></button>
                    </div>                              
                ) 
            })}
        </div>
    </div>;
}

export default Todo;


import React,{useState} from 'react';
import TodoList from './TodoList';

function Todo() {
    
    const [text,setText] = useState('')
    const [items,setItems] = useState([])
    const [complete,setComplete] = useState(false)       

    //adding items to the items array
    const addItem = () =>{
        if(!text){

        }else{            
            setItems([...items,text])  
            setText('')
            console.log(items);
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
        console.log(id);
        setComplete(!complete)
        // let completedItems = items.map(item=>{
        //     console.log(item[id].complete);
        //     if(item.id===id){
        //         console.log(complete);
        //         item.setComplete(!item.complete)
        //     }
        //     return item
        // })
        // setItems(completedItems)
        // console.log(id);
        // console.log(items[id]);

        // items.map(item=>{
        //     if(item.id===id){
        //         item.setComplete(!complete)
        //     }
        // })

        // console.log(complete);
        
        // console.log(complete);
    }

    return <div>
        <div>
            <h2>Write Your Todo.</h2>
            <input type="text" 
                placeholder="Enter Your Item" 
                value={text} 
                onChange={e=>setText(e.target.value)}/>
            <button onClick={addItem}>Add Item</button>
            <h2>{text}</h2>
        </div>
        <div>            
            {items.map((item,index)=>{
                return(
                    <div key={index} id={index} style={{textDecoration: complete? "line-through": 'none'}} >
                        <h2 >{item}</h2> 
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

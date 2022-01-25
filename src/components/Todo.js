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
            items.map((element,index)=>{
                return(
                        <TodoList element={element} key={index} id={index} text={text} items={items} toggle={toggle} itemId={itemId} 
                            setText={setText} setItemId={setItemId} setItems={setItems} setToggle={setToggle}
                        />                            
                ) 
            })}
        </div>
    </div>;
}

export default Todo;


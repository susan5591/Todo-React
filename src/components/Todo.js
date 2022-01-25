import React,{useState} from 'react';
import TodoList from './TodoList';
import '../App'

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
    return <div className="main-div">
        <div className="div-first">
            <h2 className='heading'>Write Your Todo.</h2>
            <input className='inputField' type="text" 
                placeholder="Enter Your Item" 
                value={text}
                onChange={e=>setText(e.target.value)}
            />
            <div className='button'>
                {toggle ? <i onClick={addItem} className="submit fas fa-edit add-btn" title="Edit"></i> 
                    : <i onClick={addItem} class="submit fas fa-plus add-btn"></i>}          
            </div>
        </div>
        <div className='div-second'>            
            {
            items.map((element,index)=>{
                return(
                        <TodoList element={element} key={index} id={index} items={items} 
                            setText={setText} setItemId={setItemId} setItems={setItems} setToggle={setToggle}
                        />                            
                ) 
            })}
        </div>
    </div>;
}

export default Todo;


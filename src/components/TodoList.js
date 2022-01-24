import React from 'react';

function TodoList(props) {
    props.items.map((item,index)=>{
        return(
            <div>
                <li key={index}>{item}</li>
            </div>            
        ) 
    })
}

export default TodoList;

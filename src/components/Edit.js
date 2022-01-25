import React,{useState} from 'react';

function Edit(props) {
    const[temp,tempData] = useState(props.value)
    return <div>
        <input type="text" 
            placeholder="Enter new Item" 
            value={temp}
            onChange={e=>tempData(e.target.value)}
        />
    </div>;
}

export default Edit;

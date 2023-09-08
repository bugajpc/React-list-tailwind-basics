import React, { useState } from "react";

function NameList()
{
    const [name, setName] = useState("");
    const [nameList, setNameList] = useState([])

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    const handleAddName = () => {
        if(name !== "")
        {
            setNameList([...nameList, name]);
            setName("");
        }
    };

    return(
        <div>
            <h1 className="font-bold underline">Name List</h1>
            <div>
                <input type="text" placeholder="Enter Name" value={name} onChange={handleInputChange}/>
                <button onClick={handleAddName}> Add Name </button>
            </div>
            <ul className="flex justify-center gap-2">
                {nameList.map((item, index)=> (
                    <li className="border-2" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default NameList;
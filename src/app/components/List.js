"use client"
import ListItem from "./ListItem";
import React, { useState } from 'react';

export default function List(){
    const DEFAULT_LIST_ITEM = "click \"Add to List\" to start your to-do list";
    const [list, setList] = useState([
        DEFAULT_LIST_ITEM
    ]);

    const [userInput, setUserInput] = useState(
        ""
    );

    let handleChange = (event) =>{
        setUserInput(event.target.value);
    }

    const handleClick = () => {
            // Your event handling logic here
            if(list[0] == DEFAULT_LIST_ITEM){
                setList([userInput]);
            }else{
                setList((prev) => {return [...prev, userInput]});
            }
            setUserInput("");
          };

    function deleteItem(id){
        console.log(id);
        setList((prev) => prev.filter((items, index) => index != id));
    }
      
      return (
          <div>
            <div>
                {list && list.map((item, index) => <ListItem delete={deleteItem} id={index} item={item} key={index}></ListItem>)}
            </div>
            <div className = "flex min-h-screen flex-col items-center">
            <label for="input">What would you like to add to the list?:</label>
            <input value={userInput} type="text" id="listInput" name="input" onChange={handleChange}></input>
            <button onClick={handleClick} className="bg-[#FC4A1A] hover:bg-red-600 text-white font-bold py-2 px-4 rounded" label = "Add to List">Add to List</button>
            </div>
          </div>
      );
}
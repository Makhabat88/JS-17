import React, { useState } from 'react'
import styles from "./Component.module.css"

const Component = () => {
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState ([]);
    console.log(todo);
    

const handleChange = (event)=>{
    setInputValue(event.target.value)
}

const handleClick = ()=>{
    if (inputValue.trim() === ""){
        return alert ("Zapolnite pole");
    }
    const data = {
        title:inputValue,
        id: Date.now(),
    }
    setTodo([...todo, data])
    setInputValue("")
}

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>This is input:</h1>
<input type="text" 
placeholder='Enter a new text' 
onChange={handleChange} 
value = {inputValue}
className={styles.input}
/>

<button onClick={handleClick} className={styles.button}>Add</button>

<ul className={styles.list}>
    {todo.map((elem, i)=>(
<li key={elem.id} className={styles.listItem}>{i+1}{ elem.title}</li>
    ))}
</ul>
    </div>
  )
}

export default Component;
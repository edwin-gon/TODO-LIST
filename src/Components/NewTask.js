import React, { useState, useEffect, useRef } from 'react';

//Click on button and adds new if item is empty delete it

export default function NewTask({ insertItem }) {
  const [adding, setAdd] = useState(false);
  const [item, enterItem] = useState("");
  const myInput = useRef();


  useEffect(() => {
    myInput.current && myInput.current.focus()
  }, [adding])

  const handleChange = (event) => {
    const value = event.target.value
    enterItem(value)
    console.log(value)
  }
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log('Press Enter')
      if (item.length > 0) {
        insertItem(item)
        enterItem("")
      }
      setAdd(false)
    }
  }


  return (<div className="new-task-contains">
    {(!adding) ? <h2 id="add-item"
      style={{ "fontFamily": "Arial" }}
      onClick={() => setAdd(true)}><span>+</span> New Item</h2> :
      <input type="text-area"
        ref={myInput}
        placeholder="New Item"
        value={item}
        onChange={handleChange}
        onKeyPress={handleKeyPress} />}

  </div>)

}
import React, { useState, useEffect, useRef } from 'react';

//Click on button and adds new if item is empty delete it

export default function NewTask({ insertItem }) {
  const [adding, setAdd] = useState(false);
  const [item, enterItem] = useState("");
  const myInput = useRef();

  // console.log(myInput)

  useEffect(() => {
    // console.log("Current: ", adding)
    // console.log("Length: ", item.length)
    myInput.current && myInput.current.focus()
  }, [adding])

  const handleChange = (event) => {
    const value = event.target.value
    enterItem(value)
    // console.log(value)
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

  const handleBlur = () => {
    if (item.length > 0) {
      insertItem(item)
      enterItem("")
    }
    setAdd(false)
  }


  return (<div className="new-task-contains">
    {(!adding) ? <span id="add-item"
      onClick={() => setAdd(true)}>+ New Item</span> :
      <input className="list-text-field"
        ref={myInput}
        onBlur={handleBlur}
        placeholder="New Item"
        value={item}
        onChange={handleChange}
        onKeyPress={handleKeyPress} />}

  </div>)

}
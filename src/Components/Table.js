import React, { useState } from 'react';
import Item from './Item';
// import Modal from './Modal';
import NewTask from './NewTask'

const LIST = {
  category: "School Work", count: 3,
  items: [{ completed: false, title: "Math 101 Hw" },
  { completed: true, title: "CS 102 Project" }, { completed: false, title: "Buy Labcoat" }]
}

export default function Table() {
  // list, filter, 
  const [list, setList] = useState(LIST);
  const [filter, setFilter] = useState("All")
  // const [showModal, setShow] = useState(false);
  const [item, edititem] = useState({ title: '', completed: false })
  const { category, items } = list


  const filteredItems = items.filter(item => {
    if (filter === "All") return true
    else if (filter === "Active") return item.completed === false
    return item.completed === true
  })

  //--------------------- CRUD Operations -------------------------
  //CREATE
  const submitItem = (title) => {
    setList(prevList => ({
      ...prevList, items: [...prevList.items,
      { completed: (filter === "Completed" ? true : false), title }]
    }))
  }
  //UPDATE
  const updateItem = (index) => {

  }
  //DELETE
  const deleteItem = (item) => {
    //Copy array and remove item in copy
    const index = list.items.findIndex(x => x.title === item.title)
    setList(prevList => {
      const newList = [...items];
      newList.splice(index, 1);
      return ({ ...prevList, items: newList })
    })
  }

  const handleStatusChange = (item) => {
    const index = list.items.findIndex(x => x.title === item.title)
    list.items[index].completed = !list.items[index].completed
  }
  const handleTitleChange = (item, title) => {
    const index = list.items.findIndex(x => x.title === item.title)
    console.log(item)
    list.items[index].title = title
  }
  const handleFilter = (event) => {
    const value = event.target.id;
    //if all ignore filter 
    setFilter(value)
  }
  return (
    <>
      <div className="category-header">
        <h2>{category}</h2>
        <div className="filter-titles">
          <p className={filter === "All" ? "active-filter" : ""} onClick={handleFilter} id="All">All</p>
          <p className={filter === "Active" ? "active-filter" : ""} onClick={handleFilter} id="Active">Active</p>
          <p className={filter === "Completed" ? "active-filter" : ""} onClick={handleFilter} id="Completed">Completed</p>
        </div>
      </div>
      <div className="category-list">
        <ul>
          {filteredItems.map((item) => <li key={item.title}>
            <Item item={item}
              showDetails={(i) => {
                // setShow(true)
                edititem({ title: i.title })
              }}
              changeStatus={() => handleStatusChange(item)}
              changeTitle={(i) => handleTitleChange(item, i)}
              delete={() => deleteItem(item)} />
          </li>)}
          <li><NewTask insertItem={(it) => submitItem(it)} /></li>
        </ul>
        {(filteredItems.length > 0) ? <p className="items-counter">Count: {filteredItems.length}</p> :
          null}
        {/* <Modal show={showModal}
          close={() => setShow(false)}
          title="Item Details">
          <div> <b>Title: </b> {item.title}</div>
        </Modal> */}
      </div>
    </>
  )
}
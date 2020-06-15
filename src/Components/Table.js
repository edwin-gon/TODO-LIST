import React, { useState } from 'react';
import Item from './Item';
import Modal from './Modal';
// import NewTask from './NewTask'

const list = {
  category: "School Work", count: 3,
  items: [{ completed: false, title: "Math 101 Hw" },
  { completed: true, title: "CS 102 Project" }, { completed: false, title: "Buy Labcoat" }]
}

export default function Table() {
  const { category, items } = list
  const [filter, setFilter] = useState(false)
  const [showModal, setShow] = useState(false);
  const [item, edititem] = useState({ title: '', completed: false })
  // Rotate three options of completed, incomplete
  const filteredItems = items.filter(item => item.completed === filter)


  return (
    <>
      <div className="category-header">
        <h2>{category}</h2>
        <div className="filter-titles">
          <p onClick={() => setFilter(!filter)}>{filter ? "Completed" : "Incompleted"}</p>
        </div>
      </div>
      <div className="category-list">
        <ul>
          {filteredItems.map((item) => <li key={item.title}>
            <Item item={item}
              showDetails={(i) => {
                setShow(true)
                edititem({ title: i.title })
              }} changeStatus={() => {
                const index = list.items.findIndex(x => x.title === item.title)

                list.items[index].completed = !list.items[index].completed
              }} />
          </li>)}
          {/* <li><NewTask /></li> */}
        </ul>
        {(filteredItems.length > 0) ? <p className="items-counter">Count: {filteredItems.length}</p> :
          <h1 style={{ "color": "white", "fontStyle": "italic" }}>No Items!</h1>}
        <Modal show={showModal}
          close={() => setShow(false)}
          title="Item Details">
          <div> <b>Title: </b> {item.title}</div>
        </Modal>
      </div>
    </>
  )
}
import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState({show: false,type: "",message: ""});
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')));

  const [editing, setEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    //check if input is empty
    if (!input) {
      //show alert
      alertFunction(true, "danger", "please enter todo item");
    }
    //check if input not empty
    else if(input && editing){
      setItems(
        items.map((item)=>{
          if(item.id === editId){
          return {...item, title:input}
        }
        return item
      })
      )
setInput('')
alertFunction(true, "success", "Item editted successfully");
    }
    else {
      //show alert
      alertFunction(true, "success", "Item added successfully");
      const newItem = { id: new Date().getTime().toString(), title: input };
      setItems([...items, newItem]);
      setInput("");

      //add item to list
    }
    //action if valid
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const clearItems = () => {
    setItems([]);
    //show alert
    alertFunction(true, "danger", "Todo Items cleared");
  };

  const alertFunction = (show = false, type = "", message = "") => {
    setShowAlert({ show: show, type: type, message: message });
  };

  //delete Todo Item
const deleteItem = (id)=>{
 const newItems = items.filter(item=> item.id !== id)
 setItems(newItems)
}
  //edit Todo Item
const editItem = (id)=>{
  const specificItem = items.find(item=> item.id === id)
  setEditing(true)
  setEditId(id)
setInput(specificItem.title)
}

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]);
  return (
    <section className="section">
      <div className="section-center">
        {showAlert && <Alert showAlert={showAlert} />}
        <div className="grocery-form">
          <h3>Grocery Bud</h3>
          <form className="form-control" onSubmit={handleSubmit}>
            <input
              className="grocery"
              placeholder="e.g eggs"
              value={input}
              onChange={handleInput}
            />
            <button className="submit-btn">{editing?'edit': 'submit'}</button>
          </form>
        </div>

        {items.length > 0 &&<div className="grocery-container">
          <List items={items} deleteItem={deleteItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearItems}>
            clear items
          </button>
        </div> }

      </div>
    </section>
  );
}

export default App;

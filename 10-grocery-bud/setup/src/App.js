import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
//get the data from local storage
const getLocalStorage = () => {
let list = JSON.parse(localStorage.getItem("list"));
  if(list){
    return list
  }
  else{
  return []
     }
  

}
function App() {
  const [name, setName] = useState(""); //input hold current name
  const [list, setList] = useState(getLocalStorage()); //list map items show
  const [isEditing, setIsEditing] = useState(false); //edit tracking
  const [editId, setEditId] = useState(""); // to trace item id
  const [alert, setAlert] = useState({ show: true, msg: "", type: "" }); //alert if item added or delted type ca be added or delted
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    if (!name) {
      // display alert
      showAlert(true, "danger", "please enter a Item/Value");
    } else if (name && isEditing) {
      //deal with edit
      setList(
        list.map((item)=>{
          if(item.id === editId){
           return({...item,title:name})
          }
          return item
        })
      )
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "Item Updated");

    } else {
      //show alert when item added
      showAlert(true, "success", `${name} is added to the list !!`);
      const newItem = { id: new Date().getTime(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "All items are deleted");
    setList([]);
  };
  //remove individual item
  const removeItem = (id) => {
    showAlert(true, "danger", " deleted");
    const newList = list.filter((item) => item.id !== id); //infornt arow no return tespachi return bc id mismatch
    setList(newList);
  };
  //edit individual item
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);//return item whose id mathches
  setIsEditing(true);
  setEditId(id);
  //display selected item in input 
  setName(specificItem.title);
};
//local storage ma save in type string so we need to convert it to json
useEffect(() => {
localStorage.setItem("list", JSON.stringify(list));//set item is fun

}, [list]);


  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">{isEditing ? "edit" : "add"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list}
           removeItem={removeItem} 
           editItem={editItem}/>
          <button className="clear-btn" onClick={clearList}>
            clear item
          </button>
        </div>
      )}
    </section>
  );
}

export default App;

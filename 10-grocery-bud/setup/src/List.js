import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem ,editItem}) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button className="edit-btn" type="button" onClick={() => {}}>
                <FaEdit onClick={()=>editItem(id)}/>
              </button>
              <button className="delete-btn" type="button" onClick={() => {}}>
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;

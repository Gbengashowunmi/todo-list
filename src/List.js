import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({items, deleteItem, editItem}) => {
  return (
    <>
      {items && items.map(item=>{
        return (
          <div className="grocery-item" key={item.id}>
          <p className="title">{item.title && item.title}</p>
          <div className='btn-container'>
                <button
                  type='button'
                  className='edit-btn'
                  onClick={()=>editItem(item.id)}
                >
                  <FaEdit />
                </button>
                <button
                  type='button'
                  className='delete-btn'
                  onClick={()=>deleteItem(item.id)}
                >
                  <FaTrash />
                </button>
              </div>
        </div>
        )
      })}

      </>
  );
};

export default List;

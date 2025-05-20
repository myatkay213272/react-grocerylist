import React, { useRef } from 'react';

const AddItem = ({newItem,setNewItem,handleSubmit}) => {

const inputRef = useRef()
  

  return (
    <form className="row g-2 align-items-center" onSubmit={handleSubmit}>
      <div className="col-auto">
        <label htmlFor="addItemInput" className="col-form-label">
          Add Item
        </label>
      </div>
      <div className="col-auto">
        <input
          autoFocus
          ref={inputRef}
          id="addItemInput"
          type="text"
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
          className="form-control"
          placeholder="Enter new item"
          required
        />
      </div>
      <div className="col-auto">
        <button 
          type="submit" 
          className="btn btn-primary"
          onClick={()=>inputRef.current.focus()}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddItem;

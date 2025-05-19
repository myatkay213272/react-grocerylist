import React from 'react'

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
   
    <li key={item.id} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                className="form-check-label ms-2"
                style={{ textDecoration: item.checked ? 'line-through' : 'none' }}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
            </div>
            <button 
                className="btn btn-danger btn-sm" 
                onClick={()=>handleDelete(item.id)}
            >Delete</button>
          </li>

  )
}

export default LineItem
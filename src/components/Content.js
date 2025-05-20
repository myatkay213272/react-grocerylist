import ItemList from "./ItemList"

const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <div className="container my-4">
      {
        items.length 
        ? <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
        : <p className="text-muted">Your shopping list is empty.</p>
        
      }
    </div>
  )
}

export default Content

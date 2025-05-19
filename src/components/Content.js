import ItemList from "./ItemList"

const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <main className="container my-4">
      {
        items.length 
        ? <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
        : <p className="text-muted">Your shopping list is empty.</p>
        
      }
    </main>
  )
}

export default Content

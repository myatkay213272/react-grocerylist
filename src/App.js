import React,{ useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'

const App = () => {

   const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))

  const [newItem,setNewItem] = useState('')
  const [search,setSearch] = useState('')

  const setAndSaveItems = (newItems)=>{
    setItems(newItems)
    localStorage.setItem('shoppinglist',JSON.stringify(newItems))
  }

 
  const addItem = (item)=>{
    const id =items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id,checked : false, item}
    const listItems = [...items,myNewItem]
    setAndSaveItems(listItems)
  }
//       index
// id = items[2].id + 1


  // items = [{ id: 1, item: "Apple" }, { id: 2, item: "Banana" }];
// addItem("Orange");
// → id = items[1].id + 1 → 2 + 1 = 3



   const handleCheck = (id) => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setAndSaveItems(listItems)
  }


  const handleDelete = (id)=>{
    const listItems = items.filter(item=>item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!newItem) return
    addItem(newItem)
    setNewItem('')

    console.log('submit')

  }


  return (

    <>

      <Header 
        title="Groceries List"
      />  
      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />  

      <SearchItem
        search = {search}
        setSearch={setSearch}
      />

      <Content 
        items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>

    </>

  )

}

export default App
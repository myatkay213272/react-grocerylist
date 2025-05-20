import React,{ useEffect, useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import AddItem from './components/AddItem'
import SearchItem from './components/SearchItem'
import apiRequest from './hooks/apiRequest'

const App = () => {

  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([])
  const [newItem,setNewItem] = useState('')
  const [search,setSearch] = useState('')
  const [fetchError,setFetchError] = useState(null)
  const [isLoading,setIsLoading] = useState(true)


  useEffect(()=>{

    const fetchItems = async()=>{
      try{
        const response = await fetch(API_URL)
         if(!response.ok) throw new Error('Did not received expected data')
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
      }catch(err){
        setFetchError(err.message)
      }finally{
        setIsLoading(false)
      }
    }

    setTimeout(()=>{
      fetchItems()
    },2000)

  },[])



  const addItem = async (item)=>{
    const id =items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id,checked : false, item}
    const listItems = [...items,myNewItem]
    setItems(listItems)

    const postOptions = {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(myNewItem)
    }
    // You want to tell the server: “Hey, add this new item.”
    // Method: POST = to create new data.
    // Header: tells the server you're sending JSON.
    // Body: the new item, converted to a JSON string.

    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
  }

//       index
// id = items[2].id + 1


  // items = [{ id: 1, item: "Apple" }, { id: 2, item: "Banana" }];
// addItem("Orange");
// → id = items[1].id + 1 → 2 + 1 = 3



   const handleCheck = async (id) => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)

    
    const myItem = listItems.map(item=>item.id === id)
    const updatedOptions = {
      method : 'PATCH',
      headers : {
        'COntent-Type' : 'application/json'
      },
      bosy : JSON.stringify({checked : myItem[0].checked})
    }

    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,updatedOptions)
      if(!result) setFetchError(result)
  }


  const handleDelete =async (id)=>{
    const listItems = items.filter(item=>item.id !== id)
    setItems(listItems)

    const deleteOptions = {method : 'DELETE'}
    const reqUrl = `${API_URL}/${id}`
    const result =await apiRequest(reqUrl,deleteOptions)
      if(!result) setFetchError(result)


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

       <SearchItem
        search = {search}
        setSearch={setSearch}
      />

      
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />  

     
      <main>

       {isLoading && (
       <div className='d-flex justify-content-center align-items-center my-4'>
        <div className='spinner-border tex-primary me-3' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
        <strong>Loading items....</strong>
       </div>
      )}


        {fetchError 
        ? (
          <p className="alert alert-danger p-3">
            {`Error: ${fetchError}`}
          </p>
        )
        :(
          <Content 
        items={items.filter((item)=>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />
        )
      }
        
      </main>
      <Footer length={items.length}/>

    </>

  )

}

export default App
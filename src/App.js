import React,{ useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {

   const [items, setItems] = useState([
    { id: 1, checked: false, item: 'Milk' },
    { id: 2, checked: false, item: 'Bread' },
    { id: 3, checked: false, item: 'Eggs' }
  ])


   const handleCheck = (id) => {
    const listItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }


  const handleDelete = (id)=>{
    const listItems = items.filter(item=>item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist',JSON.stringify(listItems))
  }


  return (

    <>

      <Header 
        title="Groceries List"/>     
      <Content 
        items={items} 
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer/>

    </>

  )

}

export default App
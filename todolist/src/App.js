import Content  from './Content';
import Footer from './Footer';
import Header from './Header';
import React, { useState, useEffect } from 'react'
import Search from './Search';
import AddItem from './AddItem';
import apiRequest from './apiRequest';
function App() {
  const API_URL ="http://localhost:3500/items";
  const [items, setItem] = useState([]);

const [newItem, setNewItem]= useState('');

const [search , setSearch] = useState('');

const handleClick = async (id) => {
  const listItems = items.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );
  setItem(listItems);

  const currItem = items.find((item) => item.id === id);
  if (!currItem) {
    console.log(`Item with ID ${id} not found`);
    return;
  }

  const updatedCheckedStatus = !currItem.checked; // toggled checked status

  const updateObject = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ checked: updatedCheckedStatus })
  };

  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateObject);

  if (result && result.error) {
    console.log(result.error);
  }
};


 useEffect (()=>{
  const fetchItems = async() => {
    try{
      const response =  await fetch(API_URL);
      const listItems = await response.json();
      setItem(listItems);
    }catch (err){
      console.log(err);
    }
  }
  ( async() => await fetchItems())()
  
 },[])

const handleDelete= async(id) => {
    const listItems = items.filter((item) => 
       item.id !== id
    );
    setItem(listItems);

    const deleteOption={
      method :'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = apiRequest(reqUrl,deleteOption);
    if(result){
      console.log(result);
    }
}

const handleAdd = async(e) => {
  if(newItem != null){
        e.preventDefault();
      if (!newItem.trim()) return;

      const newItemObj = {
          id: items.length ? items[items.length - 1].id + 1 : 1,
          checked: false,
          item: newItem
      };

      setItem([...items, newItemObj]); 
      setNewItem("");

      const postObject ={
        method : 'POST',
        header :{
          'Content-Type':'appliction/json'
        },
        body: JSON.stringify(newItemObj)
      }
      const result = await apiRequest(API_URL, postObject);

      if(result){
        console.log(result);
      }
  }

  
  
};
  return (
    <div className='App'>
      <Header  title ="To Do List"/>
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleAdd={handleAdd}
      />
      <Search 
      search = {search}
      setSearch= {setSearch}
      />
      <Content 
       items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}/**/
       handleClick={handleClick}
       handleDelete={handleDelete}
       newItem={newItem}
       setNewItem={setNewItem}
       handleAdd ={handleAdd }
       
       />

       <Footer 
       length={items.length}
       />
      
    </div>
  );
}

export default App;

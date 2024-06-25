import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem, handleAdd}) => {
  return (
    <div>
        <form onSubmit={handleAdd} className="add-form">
                    <input
                        type="text"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Add a new item"
                        className="input-field"
                    />
                    <button
                    className='add-button'
                    type='submit'>
                    <FaPlus />
                    </button>

       </form>
    </div>
  )
}

export default AddItem
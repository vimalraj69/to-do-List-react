import React from 'react'

const Search = ({search , setSearch}) => {
  return (
    <div>
        <form  className='add-form' onSubmit={(e) => e.preventDefault()}>
            <input type="text" 
                className='input-field'
                value={search}
                placeholder='Serach'
                onChange={(e)=> setSearch(e.target.value)}
            />
        </form>
    </div>
  )
}

export default Search
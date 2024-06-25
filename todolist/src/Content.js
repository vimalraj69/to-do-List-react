
import { FaTrash } from "react-icons/fa";

const Content = ({items,handleClick,handleDelete, newItem,setNewItem,handleAdd }) => {
    
  return (
    <div className="container">
      
    <main>
    
       
            {(items.length) ? (
            <ul>
               
                    {items.map((item) => (
                        <li className='list' key = {item.id}>
                            <input type="checkbox" 
                            onChange={()=>handleClick(item.id)}
                            checked= {item.checked}

                            className='checkbox'/>
                            <label
                            onDoubleClick={()=>handleClick(item.id) }
                            style={(item.checked) ? {textDecoration :'line-through'} : null}
                            > {item.item}</label>
                            <FaTrash 
                            onClick={()=> handleDelete(item.id)}
                            role='button'
                            className='trash'
                            
                            />

                        </li>
                    ))}
               
            </ul>
            ) : 
            (<p className='pfinish'>Succesfully Completed all the tasks!...</p>)}
        
    
    </main>
    </div>
  )
}

export default Content
import React from 'react'
//onDelete ko destruct kiya hai it is an js method.
export const TodoItem = ({todo, onDelete}) => {
    console.log("xyz",todo)
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
        </div>
        <hr/> 
        </>
    )
}
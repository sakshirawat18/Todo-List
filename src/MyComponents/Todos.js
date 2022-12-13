import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = ({todos,onDelete}) => {
    console.log("DJDJDJDJD",todos) 
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {todos.length===0? "No Todos to display":  
           todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>   
                )
            })
              } 
        </div>
    )
}
/* map() include 3 parameters at once and is a js fn */
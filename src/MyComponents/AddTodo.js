import React, { useState } from 'react';
import { Todos } from './Todos';

export const AddTodo = ({ addTodo, todos, onDelete}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const adidas= (e)=> {setTitle(e.target.value)} 
    // e is an event(which we are typing,
    // onchange will get triggered once we type something
    //target will target the the written value to Title and then it will simply set the title

    const submit = (e) => {
        e.preventDefault(); //prevent page from loading
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            {/* FROM BOOTSTRAP (FORM DOC) */}
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={adidas} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
            <Todos todos={todos} onDelete={onDelete}/>
        </div>
    )
}

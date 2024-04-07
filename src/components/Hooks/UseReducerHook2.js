import { useReducer, useState } from "react";

const reducer = (todos, action) => {
    switch(action.type){
       case 'add-todo':
        return [...todos, {id: Date.now(), name: action.payload.name, complete: false}]
       case 'toggle-todo':
         return todos.map(todo => {
            if(todo.id === action.payload.id){
                return {...todo, complete:!todo.complete}
            }
            return todo
         })
       case 'delete-todo': 
         return todos.filter(todo=>todo.id!==action.payload.id)
    }
}
const UseReducerHook2 = () =>{
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'add-todo', payload: {name:name}});
        setName('')
    }
    const toggleTodo=(id)=>{
        dispatch({type: 'toggle-todo', payload: {id}})
    }
    const deleteTodo=(id)=>{
        dispatch({type: 'delete-todo', payload: {id}})
    }
    return <>
        <form onSubmit={onSubmitHandler}>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </form>
        <ul style={{listStyle: 'none', }}>
        {todos.map(item => <li>
            <span style={{fontSize: 20, fontWeight: 'bold', textDecoration: item?.complete ? 'line-through' : ''}}>{item.name}</span> 
            <button onClick={()=>toggleTodo(item.id)}>Toggle</button>
            <button onClick={()=>deleteTodo(item.id)}>Delete</button>
        </li>)}
        </ul>
        
    </>
}

export default UseReducerHook2;
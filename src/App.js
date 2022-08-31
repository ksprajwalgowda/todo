import React, { useState } from 'react';

import Navbar from "./components/Navbar";
import { Todos } from "./components/Todos";
import { Addtodo } from "./components/Addtodo";
function App() {

  const ondelete = (todo) =>{
    // console.log(todo);
    setTodos(
      todos.filter((e)=>{
        return e !== todo;
      })
    );

  }

  const onadd = (title, desc) =>{
    // console.log(title);
    let todo = {}
    todo.title = title;
    todo.desc = desc;
    if(todos.length > 0 ){
      todo.sno= todos[todos.length -1].sno +1
    }else{
      todo.sno = 0
    }
    console.log(todo)
    setTodos([...todos,todo])
  }

  const [todos,setTodos] = useState([
    

  ]);



  return (
    <>
      <Navbar />
      <Addtodo onadd= {onadd} />
      <Todos todos = {todos} ondelete= {ondelete} />
    </>
  );
}

export default App;

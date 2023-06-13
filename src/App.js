import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import Input from "./components/Input";

function App() {
  const [todo, setTodo] = useState([]);
  const removeToDo = (id) => {
    console.log(id);
    const newTodos = todo.filter(
       (d,index) => {
          if(index !== id){
            return true;
          }else{
            return false;
          }
       }
    )
    setTodo(newTodos); // state update
  }
  
  //add handler
  const addTodoHandler = (item) => {
    console.log(item);
    setTodo([
      ...todo,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };
  return (
    <div className="bg-black h-screen p-3">
        <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
            <Input handler={addTodoHandler} />
            <Box data={todo} removeHandler={removeToDo}/>
        </div>
    </div>
  );
}

export default App;

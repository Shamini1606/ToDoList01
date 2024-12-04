import React from "react";
import AddTask from "../AddTask/AddTask";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = React.useState([]);
  // Add to do function
  const Addtodo = (todo) => {
    if (!todo.text) {
      return;
    }
    const newtodo = [...todos, todo];
    console.log(newtodo);
    setTodos(newtodo);
  };
  // complete funtion
  const isComplete = (index) => {
    const updatelist = [...todos];

    updatelist[index].isComplete = !updatelist[index].isComplete;
    console.log(updatelist);
    setTodos(updatelist);
  };
  // remove function
  const remove = (index) => {
    const filterarr = [...todos];
    filterarr.splice(index, 1);
    setTodos(filterarr);
  };
  // edit function
  const Edit = (index, newval) => {
    if(!newval){
      return;
    }
    const updatelist = [...todos];
    updatelist[index].text = newval;
    setTodos(updatelist);
  };

  return (
    <div className="Todo-List">
      <AddTask submit={Addtodo} />
      <Todo todo={todos} isComplete={isComplete} remove={remove} edit={Edit} />
    </div>
  );
};
export default TodoList;

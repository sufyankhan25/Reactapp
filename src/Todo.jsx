import React, {useState} from "react"
function Todo(){
const [tasks, setTask] = useState(["Eat a BreakFast", "Take a Shower", "GO to GYM"]);
const [newTask , setNewtask]=useState("");
function handleChangeTask(event){
setNewtask(event.target.value);
}

function addTask(){
 if(newTask.trim() !== ""){
    setTask(t => [...t,newTask]);
 setNewtask("");
}}

function handleUp(index){
if(index > 0){
const updateTask=[...tasks];
[updateTask[index],updateTask[index - 1]]=
[updateTask[index - 1],updateTask[index]];
setTask(updateTask);
}



}
function handleDelete(index){
 const newTasks=tasks.filter((_,i) => i !== index);
setTask(newTasks);
}
function handleDown(index){
    if(index < tasks.length - 1){
        const updateTask=[...tasks];
        [updateTask[index],updateTask[index + 1]]=
        [updateTask[index + 1],updateTask[index]];
        setTask(updateTask);
}
}
function keyDown(event){
if(event.key === "Enter"){
    addTask();
}

}
return(
<div className="todo-container">
<h1>TO-Do-List</h1>
<div className="input-container" >
<input type="text" placeholder="Enter a text ...."  value={newTask} onChange={handleChangeTask}  onKeyDown={keyDown}/>
<button className="add-button" onClick={addTask}>Add</button>
</div>
<ol>

{tasks.map((task,index)=> <li key={index} className="task-item"> 
<span className="task">{task}</span>
<button className="delete-button" onClick={() =>handleDelete(index)} >
Delete
</button>
<button className="up-button" onClick={() => handleUp(index)}> ⬆️</button>
<button className="down-button" onClick={() => handleDown(index)}> ⬇️</button>


</li>)




}


</ol>




</div>



);
}


export default Todo;


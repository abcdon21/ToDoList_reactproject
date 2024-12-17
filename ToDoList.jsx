import React,{useState} from "react";

function ToDoList(){
    const[task,setTasks]=useState(["Task 1","Task 2","Task 3"]);
    const [newtask,setnewtask]=useState("");
    function handleInputChange(event){
setnewtask(event.target.value);//to see the text when we write in the input element
}
 function addTask()
{  if(newtask.trim() !==""){
setTasks(t=>[...t,newtask]);
setnewtask("");//to clear the input element after adding the task
}
}

function deleteTask(index){
const update=task.filter((_,i)=>i!==index); 
setTasks(update);
}

function moveTaskUp(index){
    if(index>0){
    const update=[...task];
    [update[index],update[index-1]]=[update[index-1],update[index]];//to swap two elements
    setTasks(update);
    }


}
function moveTaskdown(index){
    if(index<task.length-1){
    const update=[...task];
    [update[index],update[index+1]]=[update[index+1],update[index]];//to swap two elements
    setTasks(update);


    }
}


    return(<div className="todolist">
<h1>TO-DO-LIST</h1>
<input type="text"
placeholder="Enter a task" value={newtask}
onChange={handleInputChange}/>
<button className="add" onClick={addTask}> ADD</button> 

<ol>

    {task.map((task,index)=>
    <li key={index}>
<span className="text">{task}</span>
<button 
className="delete" 
onClick={()=>deleteTask(index)}>Delete
</button>
<button 
className="move" 
onClick={()=>moveTaskUp(index)}>⬆
</button>
<button 
className="move" 
onClick={()=>moveTaskdown(index)}>⬇
</button>
</li>)}
</ol>



</div> );


}

export default ToDoList;
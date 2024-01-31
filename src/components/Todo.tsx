import { useState } from 'react';
import FormDialog from './Dialoghandler';

export default function Todo() {
    const [editIndex, setEditIndex] = useState<null | Number>(null);
    const [open, setOpen] = useState(false);
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([ "Task 1", "Task 2"]);


    const handleEditTask = (newTask : string) => {
        setTasks(tasks.map((task, i) => i === editIndex ? newTask : task));
      }
    
    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask("");
        }
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
            <div className="bg-white w-auto h-auto p-6 rounded shadow-lg flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Todo List</h1>
                <div className="w-full flex items-center">
                    <input type="text" className="appearance-none border-2 border-gray-300 rounded p-2 flex-grow mr-4" placeholder="Add task" value={task} onChange={(e) => setTask(e.target.value)}  />

                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => addTask()}>Add</button>
                </div>
                <div className='mt-4 w-full'>
                    <ul>
                        {
                            tasks.map((task, index) => (
                                
                                <li key={index} className="transition focus:bg-black hover:bg-slate-200 border-b-2 flex justify-between cursor-pointer border-gray-200 p-2" onClick={() => {
                                    setOpen(true);
                                    setEditIndex(index);
                                  }} >{task}
                            <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600" onClick={(event) => {
            event.stopPropagation();
             let newTasks = [...tasks];
                newTasks.splice(index, 1);
setTasks(newTasks);
}}>Delete</button>
                                </li>
                            ))
                        }
                     { open? <FormDialog title="Edit task" contentText="Edit your task by typing a new name." open={open} handleClickOpen={() => setOpen(true)} handleClose={() => setOpen(false)} onConfirm={handleEditTask} /> : null }
                    </ul>
                </div>
            </div>
        </div>
    );
}
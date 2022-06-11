import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {v4 as uuidv4} from 'uuid'

import "../../css/taskList.css";
// import Task from "./Task";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [edit, setEdit] = useState(false);
  const [error, setError] = useState('');

  const handleClose = (id) => {
    const newList = listTasks.filter(item => item.id !== id)
    setListTasks(newList)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("elemento vacio");
      return;
    }
    setListTasks([
      ...listTasks,
      {id: uuidv4(), taskName:task}
    ]);

    console.log("enviado");
    setTask("");
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-center">Task list</h2>
      <hr />
      <div className="row mt-2">
        <div className="col-12 text-center mb-4">
          <form
            className="d-flex flex-column justify-content-center align-items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="form-control input-task"
              placeholder="Enter a task"
              id="inputTask"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />

            {edit ? (
              <button
                type="submit"
                className="btn-edit"
                onClick={(e) => setEdit(false)}
              >
                edit
              </button>
            ) : (
              <button type="submit" className="btn-add">
                add
              </button>
            )}
          </form>
        </div>
        {listTasks.map(item => (
          <div className="col-12 d-flex justify-content-center mb-1" key={item.id}>
            <div className="tasks-container">
              <div className="list-tasks">{item.taskName}</div>
              <div className="buttons-task">
                <div className="icon-edit">
                  <FiEdit2
                    onClick={(e) => setEdit(true)}
                    className="cursor-pointer"
                  />
                </div>
                <div className="icon-close">
                  <AiOutlineCloseCircle
                    onClick={e =>handleClose(item.id)}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;

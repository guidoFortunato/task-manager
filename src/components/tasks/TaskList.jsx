import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../../css/taskList.css";
// import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit)
  };
  const handleClose = () => {
    console.log("click close");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('enviado')
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-center">Listado Tareas</h2>
      <hr />
      <div className="row mt-2">
        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
          <form
            className="d-flex flex-column justify-content-center align-items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="form-control input-task"
              placeholder="Enter a task"
              id="inputTask"
              onChange={(e) => setTasks(e.target.value)}
              value={tasks}
            />

            {
              edit ? <button type="submit" className="btn btn-warning">Edit</button> : <button type="submit" className="btn btn-primary">Add</button>
            }
            
          </form>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <div className="tasks-container">
            <div className="list-tasks">react</div>
            <div className="buttons-task">
              <div className="button-edit">
                <FiEdit2 onClick={handleEdit} className="cursor-pointer" />
              </div>
              <div className="button-close">
                <AiOutlineCloseCircle
                  onClick={handleClose}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskList;

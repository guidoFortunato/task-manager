import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import "../../css/taskList.css";
import Task from "./Task";

const localTasks = JSON.parse(localStorage.getItem('tasks'))

const TaskList = () => {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState(localTasks || []);
  const [error, setError] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(listTasks))
  }, [listTasks]);

  const handleClose = (id) => {
    const newList = listTasks.filter((item) => item.id !== id);
    setListTasks(newList);
  };

  const edit = (item) => {
    setEditMode(true);
    setTask(item.taskName);
    setId(item.id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (error) {
      setError(false);
    }
    if (!task.trim()) {
      setError(true);
      return;
    }
    const newList = listTasks.map((item) =>
      item.id === id ? { id, taskName: task, complete: false } : item
    );
    setListTasks(newList);
    setTask("");
    setEditMode(false);
    setId("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError(true);
      return;
    }
    setListTasks([
      ...listTasks,
      { id: uuidv4(), taskName: task, complete: false },
    ]);
    setTask("");
    setError(false);
  };

  const taskCompleted = (id) => {
    const newList = listTasks.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setListTasks(newList);
  };

  return (
    <div className="container mt-5 text-center">
      <h2 className="text-center">TASK LIST</h2>
      <hr />
      <div className="row mt-2">
        <div className="col-12 text-center mb-4">
          <form
            className="d-flex flex-column justify-content-center align-items-center"
            onSubmit={editMode ? handleEdit : handleSubmit}
          >
            <input
              type="text"
              className={
                error
                  ? "form-control input-task error-input-focus"
                  : "form-control input-task"
              }
              placeholder="Enter a task"
              id="inputTask"
              onChange={(e) => setTask(e.target.value)}
              value={task}
            />
            <div className="container-error">
              {error && <span>complete the field</span>}
            </div>
            <div className="container-buttons-tasklist">
              {editMode ? (
                <>
                  <div>
                    <button type="submit" className="btn-edit me-lg-3">
                      edit
                    </button>
                  </div>
                  <div>
                    <Link to="/dashboard" className="btn-add">
                      back to dashboard
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <button type="submit" className="btn-add me-lg-3">
                      add
                    </button>
                  </div>
                  <div>
                    <Link to="/dashboard" className="btn-add">
                      back to dashboard
                    </Link>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>

        {listTasks?.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            taskName={item.taskName}
            item={item}
            edit={edit}
            handleClose={handleClose}
            complete={item.complete}
            taskCompleted={taskCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

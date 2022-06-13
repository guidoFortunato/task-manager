import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../../css/taskList.css";

const Task = ({ id, taskName, item, edit, handleClose, complete, taskCompleted }) => {

  return (
    <div className="col-12 d-flex justify-content-center mb-1">
      <div className="tasks-container">
        <div className={complete ? "list-tasks completed" : "list-tasks"} onClick={()=>taskCompleted(id)}>{taskName}</div>
        <div className="buttons-task">
          <div className="icon-edit">
            <FiEdit2 onClick={() => edit(item)} className="cursor-pointer" />
          </div>
          <div className="icon-close">
            <AiOutlineCloseCircle
              onClick={() => handleClose(id)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;

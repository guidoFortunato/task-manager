import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../../css/taskList.css";

const Task = ({ id, taskName, item, edit, handleClose, complete, taskCompleted }) => {
  console.log(complete);

  return (
    <div className="col-12 d-flex justify-content-center mb-1">
      <div className={complete ? "tasks-container completed" : "tasks-container"} onClick={()=>taskCompleted(id)}>
        <div className="list-tasks">{taskName}</div>
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

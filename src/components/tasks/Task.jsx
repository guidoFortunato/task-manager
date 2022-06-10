import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../../css/taskList.css";

const Task = () => {
  const handleEdit = () => {
    console.log("click edit");
  };
  const handleClose = () => {
    console.log("click close");
  };

  return (
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
  );
};

export default Task;

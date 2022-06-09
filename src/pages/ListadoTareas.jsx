import React from "react";

const ListadoTareas = () => {
  return (
    <div className="container">
      <div className="row mt-2">
        <h2 className="text-center">Listado Tareas</h2>
        <div className="container-tasks">
          <div className="col-12 col-sm-6">
            <form className="text-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <label className="form-label">Enter a task</label>
                <input
                  type="email"
                  className="form-control w-50"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
          </div>
          <div className="col-12 col-sm-6">
            <div className="tasks-container">
              <div className="list-tasks">react</div>
              <div className="button-task">button cierre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoTareas;

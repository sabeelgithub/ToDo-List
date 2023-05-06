import React from "react"
const UpdateForm = ({updateData,updateTask,changeTask,cancelUpdate})=>{
    return (
        <>
        <div className='row'>
          <div className='col'>
            <input value={updateData && updateData.title} onChange={(e)=>changeTask(e)} type="text" className='form-control form-control-lg'/>
          </div>
          <div className='col-auto'>
            <button onClick={updateTask} className='btn btn-lg btn-success mr-20'>
              Update
            </button>
            <button onClick={cancelUpdate} className='btn btn-lg btn-warning mr-20'>
              Cancel
            </button>
          </div>
        </div>
       <br />
      </>

    )
}
export default UpdateForm
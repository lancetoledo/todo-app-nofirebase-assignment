import React from 'react'

function FilterControl({filterStatus, setFilterStatus}) {

    const handleStatus = (status) => {
        setFilterStatus(status)
    }

    return (
            <div className='item-statuses'>
              <span className={filterStatus === "all" ? "active" : ""}  onClick={()=>handleStatus("all")}>All</span>
              <span className={filterStatus === "active" ? "active" : ""} onClick={()=>handleStatus("active")}>Active</span>
              <span className={filterStatus === "completed" ? "active" : ""} onClick={()=>handleStatus("completed")}>Completed</span>
            </div>
    )
}

export default FilterControl

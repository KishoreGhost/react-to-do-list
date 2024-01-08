import React, { Component } from 'react'

class ToDoList extends Component {
  render() {
    let {e, index, updateItem, deleteItem} = this.props
    return (
        <>
            <div>
                <input type="text" onChange={(e) => {
                    updateItem(e.target.value,index)
                }} value={e} />
                <button onClick={(e)=>{
                    deleteItem(index)
                }}>Delete</button>
                
            </div>
        </>

    )
  }
}

export default ToDoList
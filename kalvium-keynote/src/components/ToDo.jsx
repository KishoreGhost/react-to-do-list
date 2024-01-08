import React, { Component } from 'react'
import ToDoList from './ToDoList'
class ToDo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input: "",
         toDo: []
      }
    }

    inputChange = (e) =>{
        this.setState({
            input: e.target.value
        })

    }

    formSubmit = (e) =>{
        e.preventDefault()
        if(this.state.input.length > 0){
            this.setState({
                input: "",
                toDo: [...this.state.toDo,this.state.input]
            })
        }

    }

    update = (newItem,index) => {
        let data = this.state.toDo
        data.splice(index , 1 , newItem)
        this.setState({
            toDo: data,
        })
    }

    delete = (index) => {
        let data = this.state.toDo
        data.splice(index, 1)
        this.setState({
            toDo: data,
        })
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
            <input type="text" value={this.state.input} placeholder="Enter any value" onChange = {this.inputChange} />
            <button>Add Item</button>
        </form>
        <div>
            <h2>To do list:</h2>
            {
                this.state.toDo.length === 0 ? (
                    <p>No task needed to be done</p>
                ) : (
                    this.state.toDo.map((item,i)=>{
                        return (
                            <>
                                <div>
                                    <ToDoList 
                                    e={item}
                                    index={i} 
                                    updateItem = {this.update}
                                    deleteItem = {this.delete}
                                    />
                                </div>
                            </>
                        )
                    })
                )
            }
        </div>
      </div>
    )
  }
}

export default ToDo
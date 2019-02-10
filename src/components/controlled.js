import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name:'2',
        lastname:'',

    }

    handleNameChange = (event) =>{
        this.setState({
            name:event.target.value
        })
    }

    handleLastNameChange = (event) =>{
        this.setState({
            lastname:event.target.value
        })
        
    }

    osHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.osHandler}>
                    <div className="form_element">
                        <label>Enter Name</label>
                            <input type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                            />

                    </div>
                    <div className="form_element">
                        <label>Enter Lastname</label>
                        <input type="text"
                        onChange={this.handleLastNameChange}
                        value={this.state.lastname}
                        />
                    </div>
                    <input type='submit'/>
                </form>
            </div>
        )
    }
}

export default Controlled;
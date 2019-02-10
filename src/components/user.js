import React, { Component } from 'react';
import FormFields from '../components/widgets/forms/formFileds'

class User extends Component {

    state = {
        formData : {
            name : {
                element : 'input',
                value:'',
                label:true,
                labelText:'Name',
                config:{
                    name:'name_input',
                    text:'text',
                    placeholder:'Enter your name'
                }
            },
            lastname : {
                element : 'input',
                value:'',
                label:true,
                labelText:'Last Name',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your Last name'
                }
            },
            something : {
                element : 'input',
                value:'',
                label:true,
                labelText:'sss Name',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your Last name'
                }
            }

        }
    }

    updateForm = (newState) =>{
        this.setState({
            formData:newState
        }
        )
    }

    submitForm = (event) =>{
        event.preventDefault();

        let dataToSubmit = {
        }

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }

        console.log(dataToSubmit);
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>

                    <FormFields 
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;
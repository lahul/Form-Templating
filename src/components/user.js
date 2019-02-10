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
                },
                validation : {
                    required:true,
                    minlen : 5
                },
                valid : false,
                touched : false,
                validationMessage : ""
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
                },
                validation : {
                    required:true
                },
                valid : false,
                touched : false,
                validationMessage : ""
            },
            message : {
                element : 'textarea',
                value:'',
                label:true,
                labelText:'Message',
                config:{
                    name:'message_input',
                    rows : 4,
                    cols : 36
                },
                validation : {
                    required:true
                },
                valid : false,
                touched : false,
                validationMessage : ""
            },
            age: {
                element : 'select',
                value:'',
                label:true,
                labelText:'Age',
                config:{
                    name:'age_input',
                    options : [
                        {val : '1',text : '10-20'},
                        {val : '2',text : '20-30'},
                        {val : '3',text : '30+'}
                    ]
                },
                validation : {
                    required:true
                },
                valid : false,
                touched : false,
                validationMessage : ""
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

        let formValid = true

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }

        for(let key in this.state.formData){
            formValid = this.state.formData[key].valid && formValid;
        }
            
        if(formValid){
        console.log(dataToSubmit);
        }
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>

                    <FormFields 
                        formData={this.state.formData}
                        onblur={(newState) => this.updateForm(newState)}
                        change={(newState) => this.updateForm(newState)}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default User;
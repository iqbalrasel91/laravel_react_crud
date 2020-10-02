import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default class AddUser extends Component {

    constructor(props){
        super(props);
        // Setting up functions
        this.inputChangeNameHandler = this.inputChangeNameHandler.bind(this);
        this.inputChangeEmailHandler = this.inputChangeEmailHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);



        this.state={
            name:"",
            email:"",
                  }
    
    }

    inputChangeNameHandler(event)
    {
        this.setState({
                name: event.target.value,
            }
        )
    }

    inputChangeEmailHandler(event){
        this.setState({
                ...this.state,
                email: event.target.value,
            }
        )
    }


    onSubmit(e) {
        e.preventDefault()
        const user = {
            name: this.state.name,
            email: this.state.email,
        };
        axios.post('/save_user', user)
            .then(res => console.log(res.data));
            Swal.fire(
                'Good job!',
                'User Added Successfully',
                'success'
            )

        this.setState({name: '', email: ''})
    }

    render(){
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Name:</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1"
                               placeholder="iqbal Rasel" onChange={ (event)=>this.inputChangeNameHandler(event)} value={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="name@example.com" onChange={ (event)=>this.inputChangeEmailHandler(event)} value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Example select</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>

            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";



export default class User extends Component {

    constructor(props)
    {
        super(props);
        this.state={
                users:[],
        }
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        axios.get('/get_users')
            .then((response) => {
                // handle success
                console.log(response.data);
                //now this refers to your vue instance and this can access you data property
                this.setState({
                    users:response.data
                });
            })

    }

    deleteUser(id) {

        console.log(id);
        axios.delete('/delete/' + id)
            .then((res) => {
                console.log('User removed deleted!')
            });
            Swal.fire(
                'Good job!',
                'User Deleted Successfully',
                'success'
            )
        this.componentDidMount()

    }

 

    render() {

        const contents = this.state.users.map(item => {
            return <tr key={item.id}>
                <td></td>
                <td>{item.name}</td>
                <td>{item.email} </td>
                <td>
                    <button onClick={() => this.deleteUser(item.id)} className="btn btn-sm btn-warning float-right">Delete</button>
                </td>

            </tr>
        })

        return (
            <div className="container">

                <table className="table">
                    <thead>
                    <tr >
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                       {contents}
                    </tbody>
                </table>

            </div>
        );
    }
}

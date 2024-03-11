import {Component} from 'react';

class LoginForm extends Component {
    state = {
        email: "",
        password: ""
    }

    setEmail = async (email) => {
        this.setState(state => ({
            email: email
        }))
    }
    setPassword = async (password) => {
        this.setState(state => ({
            password: password
        }))
    }


    render() {
        <div>
            <input
                onChange = {e => this.setEmail(e.target.value)}
                value = {email}
                type = "text"
                placeholder='Email'
            />
        </div>

    }
}

exports.default = new LoginForm();
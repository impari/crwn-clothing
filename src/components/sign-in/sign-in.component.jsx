import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name] : value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I alreday have an account</h2>
                <span>Sign with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        label='email'
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        required
                    />
                     <FormInput
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        handleChange = {this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign in</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
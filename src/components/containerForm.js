import React, { Component } from 'react';
import Form from "./form";
import OutputFormData from './outputFormData.js'

export default class ContainerForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fio: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            policy: false,
            arr: []
        };

        this.eventOnClickEnterChangeState = this.eventOnClickEnterChangeState.bind(this);
        this.eventOnClickResetChangeState = this.eventOnClickResetChangeState.bind(this);
        this.fioTextChange = this.fioTextChange.bind(this);
        this.emailTextChange = this.emailTextChange.bind(this);
        this.phoneTextChange = this.phoneTextChange.bind(this);
        this.passwordTextChange = this.passwordTextChange.bind(this);
        this.confirmPasswordTextChange = this.confirmPasswordTextChange.bind(this);
    }

    eventOnClickEnterChangeState(dataUserArr) {
        this.setState({arr: dataUserArr})
    }

    eventOnClickResetChangeState() {
        this.setState({
            fio: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            policy: false,
            test: []
        });
    }

    fioTextChange(event) {
        this.setState({fio: event.target.value});
    }

    emailTextChange(event) {
        this.setState({email: event.target.value});
    }

    phoneTextChange(event) {
        this.setState({phone: event.target.value});
    }

    passwordTextChange(event) {
        this.setState({password: event.target.value});
    }

    confirmPasswordTextChange(event) {
        this.setState({confirmPassword: event.target.value});
    }

    render(){
        return(
            <div className="container">

                <Form
                    eventOnClickEnterChangeState={ this.eventOnClickEnterChangeState }
                    eventOnClickResetChangeState={ this.eventOnClickResetChangeState }
                    dataUser={ this.state }
                    fioTextChange={ this.fioTextChange }
                    emailTextChange={ this.emailTextChange }
                    phoneTextChange={ this.phoneTextChange }
                    passwordTextChange={ this.passwordTextChange }
                    confirmPasswordTextChange={ this.confirmPasswordTextChange }
                />

                <OutputFormData data={this.state.arr} />

            </div>
        )
    }
}
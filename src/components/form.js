import React, { Component } from 'react';

export default class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            policyForm: this.props.dataUser.policy,
            notCheckedForm: true
        };

        this.handleMethodEventOnClickEnterChangeState = this.handleMethodEventOnClickEnterChangeState.bind(this);
        this.formCheckbox = this.formCheckbox.bind(this);
        this.handleMethodEventOnClickResetChangeState = this.handleMethodEventOnClickResetChangeState.bind(this);
    }

    formCheckbox(){
        this.setState({
            policyForm: !this.state.policyForm,
            notCheckedForm: !this.state.notCheckedForm
        })
    }

    handleMethodEventOnClickEnterChangeState(){
        const dataUserArr = [
            this.props.dataUser.fio,
            this.props.dataUser.email,
            this.props.dataUser.phone,
            this.props.dataUser.password,
            this.props.dataUser.confirmPassword,
            this.state.policyForm,
            this.state.notCheckedForm
        ];

        this.props.eventOnClickEnterChangeState(dataUserArr);
    }

    handleMethodEventOnClickResetChangeState(){
        this.props.eventOnClickResetChangeState();

        this.refs.fio.value="";
        this.refs.email.value="";
        this.refs.phone.value="";
        this.refs.password.value="";
        this.refs.confirm_password.value="";
    }

    render(){
        return(
            <aside className="aside_form">
                <form className="form">
                    <fieldset>
                        <legend>Форма ввода:</legend>
                        <p><label htmlFor="fio"/><input
                            placeholder="ФИО"
                            type="text"
                            value={ this.props.dataUser.fio }
                            onChange={this.props.fioTextChange}
                            ref="fio"
                        /></p>
                        <input
                            placeholder="Email"
                            type="text"
                            value={ this.props.dataUser.email }
                            onChange={this.props.emailTextChange}
                            ref="email"
                        />
                        <p><label htmlFor="phone"/><input
                            placeholder="Телефон"
                            type="text"
                            value={ this.props.dataUser.phone }
                            onChange={this.props.phoneTextChange}
                            ref="phone"
                        /></p>
                        <p><label htmlFor="password"/><input
                            placeholder="Пароль"
                            type="password"
                            value={ this.props.dataUser.password }
                            onChange={this.props.passwordTextChange}
                            ref="password"
                        /></p>
                        <p><label htmlFor="confirm_password"/><input
                            placeholder="Повторите пароль"
                            type="password"
                            value={ this.props.dataUser.confirmPassword }
                            onChange={this.props.confirmPasswordTextChange}
                            ref="confirm_password"
                        /></p>
                        <label className="policy">
                            <input
                                type="checkbox"
                                onClick={this.formCheckbox}
                                defaultChecked={this.policyForm}
                                ref="policy"
                            />
                            Политика конфиденциальности
                        </label>
                    </fieldset>
                    <p><input
                        className="form1_btn"
                        type="button"
                        value="Ввод"
                        id="button_enter"
                        disabled={this.state.notCheckedForm}
                        onClick={this.handleMethodEventOnClickEnterChangeState}
                    /></p>
                    <p><input
                        className="form1_btn_reset"
                        type="button"
                        value="Сброс"
                        id="button_reset"
                        onClick={this.handleMethodEventOnClickResetChangeState}
                    /></p>
                </form>
            </aside>
        )
    }
}
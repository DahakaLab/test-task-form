import React, { Component } from 'react';

export default class Form extends Component{
    render(){
        return(
            <aside className="aside_form">
                <form className="form">
                    <fieldset>
                        <legend>Форма ввода:</legend>
                        <p><label htmlFor="fio"/><input
                            placeholder="ФИО"
                            type="text"
                            ref="fio"
                        /></p>
                        <input
                            placeholder="Email"
                            type="text"
                            ref="email"
                        />
                        <p><label htmlFor="phone"/><input
                            placeholder="Телефон"
                            type="text"
                            ref="phone"
                        /></p>
                        <p><label htmlFor="password"/><input
                            placeholder="Пароль"
                            type="password"
                            ref="password"
                        /></p>
                        <p><label htmlFor="confirm_password"/><input
                            placeholder="Повторите пароль"
                            type="password"
                            ref="confirm_password"
                        /></p>
                        <label className="policy">
                            <input
                                type="checkbox"
                                defaultChecked={false}
                                ref="policy"
                            />
                            Политика конфиденциальности
                        </label>
                    </fieldset>
                    <p><input
                        className="form1_btn"
                        type="button"
                        value="Ввод"
                        id="button"
                    /></p>
                </form>
            </aside>
        )
    }
}
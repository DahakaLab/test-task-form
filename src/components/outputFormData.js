import React, { Component } from 'react';

export default class OutputFormData extends Component {
    constructor(props){
        super(props);

        this.validityFormFIO = this.validityFormFIO.bind(this);
        this.validityFormEmail = this.validityFormEmail.bind(this);
        this.validityFormPhone = this.validityFormPhone.bind(this);
        this.validityFormPassword = this.validityFormPassword.bind(this);
    }

    validityFormFIO(){

        if((this.props.data[0] === '') || (this.props.data[0] === undefined)){

            const text = <p>Вы не ввели ФИО!</p>;
            return(text);

        }else{
            const fio = this.props.data[0].split(' ');

            console.log(fio.length);

            if(fio.length === 3){


                const text = <p>Ваше ФИО: {this.props.data[0]}</p>;
                return(text);

            }else{

                const text = <p>Вы ввели некорректное ФИО! Оно должно состоять из 3-х слов разделенных пробелами!</p>;
                return(text);

            }
        }
    }

    validityFormEmail(){

        const email = 'вв@22.ru';
        const r = /^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i;

        if((this.props.data[1] === '') || (this.props.data[1] === undefined)){

            const text = <p>Вы не ввели Email!</p>;
            return(text);

        }else {

            if (r.test(this.props.data[1]) === true) {

                const text = <p>Ваше ФИО: {this.props.data[1]}</p>;
                return (text);

            } else {

                const text = <p>Вы ввели некорректный Email!</p>;
                return (text);

            }
        }

    }

    validityFormPhone(){

        if((this.props.data[2] === '') || (this.props.data[2] === undefined)){

            const text = <p>Вы не ввели телефон!</p>;
            return(text);

        }else{

            if((this.props.data[2].charAt(0) === '+') || (this.props.data[2].charAt(0) === '8') && (this.props.data[2].length < 30)) {

                if(isNaN(this.props.data[2] * 1) === false) {
                    const text = <p>Ваш телефон: {this.props.data[2]}</p>;
                    return (text);
                }else{
                    const text = <p>В телефоне могут быть только цифры!</p>;
                    return (text);
                }

            }else{

                const text = <p>Ваш телефон некорректен!</p>;
                return (text);

            }
        }
    }

    validityFormPassword(){

        if((this.props.data[3] !== this.props.data[4]) || (this.props.data[3] === '') || (this.props.data[3] === undefined)){

            const text = <p>Ваши пароли не совпадают либо ваш пароль пустой!</p>;
            return(text);

        }else{


            const text = <p>Ваш Пароль: {this.props.data[3]}</p>;
            return(text);
        }
    }

    render(){
        return(
            <div className="output_form_data">
                {this.validityFormFIO()}
                {this.validityFormEmail()}
                {this.validityFormPhone()}
                {this.validityFormPassword()}
            </div>
        )
    }
}
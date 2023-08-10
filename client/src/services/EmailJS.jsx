import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import InputMask from "react-input-mask";


export const EmailJS = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l060764', 'template_kv8nqtb', form.current, '8A12cqd3pgDl66O5n')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail} className=' h-3/5 lg:h-4/5 w-min flex flex-col items-end justify-center overflow-hidden'>
            <div className='h-full w-min flex flex-col justify-between items-start' >
                <input className='outline-none placeholder-white text-white w-full bg-transparent border-b-2 border-white' placeholder=' Nome' type="text" name="user_name" />
                <input className='outline-none placeholder-white text-white w-full bg-transparent border-b-2 border-white' placeholder=' E-mail' type="email" name="user_email" />
                <InputMask className='outline-none placeholder-white text-white w-full bg-transparent border-b-2 border-white' placeholder=' Telefone' type="text" name="user_phone" mask="(99) 99999-9999" onChange={props.onChange} value={props.value} />
                <select className='outline-none text-white w-full bg-transparent border-b-2 border-white' >
                    <option className='outline-none bg-transparent' value="title" title="Title for Select">Tipo de evento</option>
                    <option name="user_wedding" value="Wedding">Casamento</option>
                    <option name="user_birthday" value="birthday">Aniversário</option>
                </select>
                <label htmlFor="FormTextArea" className='text-white'  >Complemento
                    <textarea id='FormTextArea' className='outline-none placeholder-white text-white bg-transparent border-2 border-white rounded-[0.5rem]' rows={3} cols={30} name="user_message" /></label>
                <button type='submit' className="rounded-2xl shadow-md bg-[#faf9f6] text-black w-[10rem] py-0.5 flex items-center justify-center group hover:brightness-90 duration-500">
                    Enviar
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="currentColor"
                        className="ml-2 group-hover:ml-3 duration-500"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
};
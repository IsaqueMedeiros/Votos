import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import swal from "sweetalert";

export const EmailJS = (props) => {
  const form = useRef();
  function Events() {
    swal("Formulário Enviado");
    setTimeout(function () {
      location.reload();
    }, 2000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l060764",
        "template_kv8nqtb",
        form.current,
        "8A12cqd3pgDl66O5n"
      )
      .then(
        (result) => {
          console.log(result.text);
          Events();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className=" h-3/5 lg:h-4/5 w-min flex flex-col gap-4 items-end justify-center overflow-hidden"
    >
      <div className="h-full w-min flex flex-col gap-4 justify-between items-start">
        <input
          required
          className="outline-none placeholder-white text-white w-full bg-transparent border-b-2 border-white"
          placeholder=" Nome"
          type="text"
          name="user_name"
        />
        <input
          required
          className="outline-none placeholder-white text-white w-full bg-transparent border-b-2 border-white"
          placeholder=" E-mail"
          type="email"
          name="user_email"
        />
        <InputMask
          required
          className="outline-none placeholder-white text-white w-full bg-transparent border-b-2 border-white"
          placeholder=" Telefone"
          type="text"
          name="user_phone"
          mask="(99) 99999-9999"
          onChange={props.onChange}
          value={props.value}
        />
        <div className="outline-none text-white w-full bg-transparent border-b-2 border-white flex items-center">
          <input
            className=" appearance-none rounded-[0.5rem] border-2 border-white w-4 aspect-square checked:bg-white hover:cursor-pointer	"
            type="checkbox"
            value={"Casamento"}
            name="user_wedding"
          />
          <label className="ml-2">Aniversário</label>
          <input
            className="ml-6 appearance-none rounded-[0.5rem]	border-2 border-white w-4 aspect-square checked:bg-white hover:cursor-pointer	"
            type="checkbox"
            value={"Aniversário"}
            name="user_birthday"
          />
          <label className="ml-2">Casamento</label>
        </div>
        <label htmlFor="FormTextArea" className="text-white">
          Complemento
          <textarea
            id="FormTextArea"
            className="outline-none placeholder-white text-white bg-transparent border-2 border-white rounded-[0.5rem]"
            rows={3}
            cols={30}
            name="user_message"
          />
        </label>
        <button
          type="submit"
          className="rounded-2xl shadow-md bg-votosRed text-white w-[10rem] py-0.5 flex items-center justify-center group hover:brightness-90 duration-500 border-2 border-white"
        >
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

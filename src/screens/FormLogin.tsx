import React, { useState } from "react";
import DynamicForm from "../components/DynamicForm";
import * as Yup from "yup";
import DynamicButton from "../components/DynamicButton";
import '../styles/Modal/Modal.css'
import '../styles/Form/Form.css'


const FormLogin = () => {
  const formConfig = {
    fields: [
      {
        name: "email",
        label: "E-mail",
        type: "input",
        inputType: "email",
        component: "input",
        placeholder: "E-mail"
      },
      {
        name: "password",
        label: "Password",
        type: "input",
        inputType: "password",
        component: "input",
        placeholder: "Senha"
      }
    ],
    validationSchema: {
        email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
        password: Yup.string().required("Senha é obrigatória").min(6, "A senha deve ter pelo menos 6 caracteres")
    }
  };

  const initialValues = {
    email: "",
    password: ""
  };


const handleSubmit = (values: any, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
    // Manipular o envio do formulário (por exemplo, enviar dados para o servidor)
    console.log("Formulário enviado com valores:", values); 
    setSubmitting(false);
};

const [isOpen, setIsOpen] = useState(false);

const handleOpenModal = () => {
    setIsOpen(true);
};

const handleCloseModal = () => {
    setIsOpen(false);
};

  return (
    <div className="modal-login">
      {!isOpen && <DynamicButton onClick={handleOpenModal} className="modal-button">Entrar</DynamicButton>}
      {isOpen && (
        <div className="modal-content">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="form-person-icon"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" 
                />
            </svg>
            <DynamicForm
                formConfig={formConfig}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="form-email-icon"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" 
                />
            </svg>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="form-password-icon"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" 
                />
            </svg>
            <DynamicButton onClick={handleCloseModal} className="modal-button-back">Voltar a tela inicial</DynamicButton>
        </div>
    )}
    </div>
  );
};

export default FormLogin;
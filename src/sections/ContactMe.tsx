"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";
// import icon from "../../public/sprite.svg";
// interface

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          "service_pxiqmww",
          "contacto",
          formRef.current,
          "Q11HLeZ-bUosYT1nj"
        )
        .then(() => {
          setSent(true);
        })
        .catch((error: unknown) => {
          console.error("Error al enviar:", error);
        });
    }
  };
  return (
    <form id="contact" ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="bg-[#292F36]">

      <div className="flex flex-col colim items-center justify-center  text-center h-90">
        <svg className="flex-col gap-1 w-9 mb-5 mx-auto m-0  mt-20">
          <use href="/sprite.svg#mouse"/>
        </svg>
        <h2 style={{ color: "#12F7D6" }} className="w-228 text-5xl">
          Contacto
        </h2>
        <svg className="pt-4 h-10 w-60 ">
          <use href="/sprite.svg#linehorizontal" />
        </svg>
      </div>

      <div>
        <h3
          style={{ color: "#12F7D6" }}
          className="pt-3 pb-3 rounded-tl-4xl rounded-br-4xl mx-auto flex flex-col items-center mt-20 border-3 w-100 text-3xl mb-10 "
          >
          Enviame un Mensaje
        </h3>
      </div>
      <div className="mx-auto flex justify-center gap-20 w-3/4">
        <div className="w-1/2">
          <label className="" htmlFor="Nombre">
            Como te llamas
          </label>
          <input
            type="text"
            {...register("name", { required: "Su Nombre es requerido" })}
            placeholder="Nombre"
            className="placeholder-white placeholder:opacity-50 w-full border-b-2 border-neon px-4 py-2 focus:outline-none focus:ring-0"
          />
          {typeof errors.name?.message === "string" && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>
        <div className="w-1/2">
          <label className="text-neon" htmlFor="email">
            Correo para contactar
          </label>
          <input
            type="email"
            {...register("email", { required: "Su Nombre es requerido" })}
            placeholder="Email"
            className="placeholder-white placeholder:opacity-50 w-full border-b-2 border-neon px-4 py-2 focus:outline-none focus:ring-0"
            />
          {typeof errors.email?.message === "string" && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="mx-auto mt-10 w-3/4">
        <label className="pl-0" htmlFor="message">
          Mensaje
        </label>
        <textarea
          {...register("message", { required: "No olvide el mensaje" })}
          placeholder="Mensaje"
          className="text-white placeholder-white placeholder:opacity-50 w-full border-b-2 border-neon px-4 py-2 resize-none focus:outline-none focus:ring-0"
          />
        {typeof errors.message?.message === "string" && (
          <span className="text-red-500 text-sm">{errors.message.message}</span>
        )}
      </div>

      <div className="flex gap-5 p-2 mb-10 ">
        <button
          type="submit"
          className=" mx-auto rounded-xl w-40 p-2 bg-neon text-gray-600 m-20"
          disabled={isSubmitting}
          >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>

        {sent && (
          <p className="text-green-600 mt-2">
            Mensaje enviado con exito
            <svg>
              <use href="./sprite.svg#send" />
            </svg>
          </p>
        )}
      </div>
        </div>
    </form>
  );
}

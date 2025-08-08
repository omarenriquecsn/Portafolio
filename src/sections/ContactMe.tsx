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
    <section id="contact" className="min-h-screen">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 bg-[#292F36] pb-20 px-4 transition-all duration-500 ease-in-out"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center  text-center h-90 ">
            <svg className="flex-col gap-1 w-9 mb-5 mx-auto m-0  mt-20">
              <use href="/sprite.svg#mouse" />
            </svg>
            <h2 className="w-228 text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-neon ">
              Contacto
            </h2>
            <svg className="pt-4 h-10 w-60 ">
              <use href="/sprite.svg#linehorizontal" />
            </svg>
          </div>

          <div className="flex justify-center px-4">
            <h3 className="text-neon text-center px-6 py-3 text-2xl sm:text-3xl md:text-4xl font-bold rounded-tl-4xl rounded-br-4xl border-neon border-[3px] mx-auto mb-10 max-w-md sm:max-w-lg md:max-w-xl">
              Envíame un Mensaje
            </h3>
          </div>
          <div className="mx-auto w-full max-w-3xl flex flex-col sm:flex-row gap-8 sm:gap-10 px-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="Nombre">Cómo te llamas</label>
              <input
                type="text"
                {...register("name", { required: "Su Nombre es requerido" })}
                placeholder="Nombre"
                className="placeholder-white placeholder:opacity-50 w-full border-b-2 text-white border-neon px-4 py-2 focus:outline-none focus:ring-0"
              />
              {typeof errors.name?.message === "string" && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="w-full sm:w-1/2">
              <label className="text-neon" htmlFor="email">
                Correo para contactarte
              </label>
              <input
                type="email"
                {...register("email", { required: "Su Correo es requerido" })}
                placeholder="Email"
                className="placeholder-white placeholder:opacity-50 text-white w-full border-b-2 border-neon px-4 py-2 focus:outline-none focus:ring-0"
              />
              {typeof errors.email?.message === "string" && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>
          <div className="mx-auto mt-10 w-full max-w-3xl px-4">
            <label className="pl-0" htmlFor="message">
              Mensaje
            </label>
            <textarea
              {...register("message", { required: "No olvide el mensaje" })}
              placeholder="Mensaje"
              className="text-white placeholder-white placeholder:opacity-50 w-full border-b-2 border-neon px-4 py-2 resize-none focus:outline-none focus:ring-0"
            />
            {typeof errors.message?.message === "string" && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          <div className="flex gap-5 p-2 mb-10 ">
            <button
              type="submit"
              className="flex gap-3 justify-center mx-auto rounded-xl w-40 p-2 bg-neon text-gray-600 m-20"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
              <div className="h-6 w-6">
                <svg className="w-full h-full object-cover">
                  <use href="/sprite.svg#send" />
                </svg>
              </div>
            </button>

            {sent && (
              <p className="text-green-600 mt-2">Mensaje enviado con exito</p>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

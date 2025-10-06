"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    helpOptions: {
      uxDesign: false,
      digitalStrategy: false,
      research: false,
      uxAudit: false,
      marketing: false,
      coffee: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const { checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        helpOptions: { ...prev.helpOptions, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Envia os dados do formulário para a rota de API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('E-mail enviado com sucesso!');
        // Limpa o formulário após o envio bem-sucedido
        setFormData({
          name: "",
          email: "",
          message: "",
          helpOptions: {
            uxDesign: false,
            digitalStrategy: false,
            research: false,
            uxAudit: false,
            marketing: false,
            coffee: false,
          },
        });
      } else {
        console.error('Erro ao enviar e-mail.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <section className="relative mt-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900">
      <div className="absolute inset-2 -z-10">
        <div className={`bg-1`}></div>
        <div className={`bg-2`}></div>
        <div className={`bg-3`}></div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5 md:flex-row md:items-end justify-between">
          <div>
            <h2 className="isolate-color h3 h3__400 pb-6">
              Reach Out
            </h2>
          </div>
        </div>

        {/* Formulário */}
        <form
          className="flex w-full max-w-full sm:max-w-full md:max-w-lg lg:max-w-lg xl:max-w-lg flex-col justify-center gap-6 mt-8 px-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-full border-2 border-solid border-gray-900 font-normal bg-transparent shadow-md theme__bg-floral-white px-5 py-3.5"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-full border-2 border-solid border-gray-900 font-normal bg-transparent shadow-md theme__bg-floral-white px-5 py-3.5"
            required
          />

          <textarea
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-[15px] border-2 border-solid border-gray-900 font-normal bg-transparent shadow-md theme__bg-floral-white px-5 py-3.5"
            rows={5}
            required
          ></textarea>

          <fieldset className="w-full px-6">
            <legend className="isolate-color font-bold mb-2">How Can I Help?</legend>
            <div className="grid grid-cols-2 gap-4">
              {["UX Design", "Digital Strategy", "Research", "UX Audit", "Marketing", "Coffee!"].map(
                (label, index) => {
                  const name = label.toLowerCase().replace(/\s+/g, "");
                  return (
                    <label key={index} className=" isolate-color flex items-center gap-2">
                      <input
                        type="checkbox"
                        name={name}
                        checked={formData.helpOptions[name as keyof typeof formData.helpOptions]}
                        onChange={handleChange}
                        className=" w-4 h-4 border-solid border-gray-900 theme__bg-floral-white"
                      />
                      <span>{label}</span>
                    </label>
                  );
                }
              )}
            </div>
          </fieldset>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-950 text-white hover:bg-gray-800 font-semibold hoverable"
            >
              Make it happen!
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

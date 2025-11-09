"use client";

import { useState } from "react";

const HELP_OPTIONS = [
  { key: "uxDesign", label: "UX Design" },
  { key: "digitalStrategy", label: "Digital Strategy" },
  { key: "research", label: "Research" },
  { key: "uxAudit", label: "UX Audit" },
  { key: "marketing", label: "Marketing" },
  { key: "coffee", label: "Coffee!" },
] as const;

type HelpOptionKey = (typeof HELP_OPTIONS)[number]["key"];

type HelpOptions = Record<HelpOptionKey, boolean>;

type FormData = {
  name: string;
  email: string;
  message: string;
  helpOptions: HelpOptions;
};

type FormFieldKey = "name" | "email" | "message";

type StatusMessage = {
  text: string;
  type: "success" | "error" | "";
};

const getInitialHelpOptions = (): HelpOptions =>
  HELP_OPTIONS.reduce((acc, option) => {
    acc[option.key] = false;
    return acc;
  }, {} as HelpOptions);

const getInitialFormData = (): FormData => ({
  name: "",
  email: "",
  message: "",
  helpOptions: getInitialHelpOptions(),
});

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(getInitialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<StatusMessage>({
    text: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      const { checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        helpOptions: {
          ...prev.helpOptions,
          [name as HelpOptionKey]: checked,
        },
      }));
    } else {
      const fieldName = name as FormFieldKey;
      setFormData((prev) => ({ ...prev, [fieldName]: value }));
    }
  };

  // Envia os dados do formulário para a rota de API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ text: "", type: "" });
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage({
          text: "Message sent successfully! I will get back to you soon.",
          type: "success",
        });
        setFormData(getInitialFormData());
      } else {
        const errorData = await response.json().catch(() => null);
        setStatusMessage({
          text:
            (errorData && errorData.message) ||
            "Erro ao enviar a mensagem. Tente novamente.",
          type: "error",
        });
      }
    } catch (error) {
      setStatusMessage({
        text: "Erro de rede. Por favor, tente novamente.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative mt-12 flex flex-col justify-center py-12 overflow-hidden isolate bg-white border-t-4 border-b-4 border-solid border-gray-900 transition-colors duration-200">
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
            className="w-full rounded-full border-2 border-solid border-gray-900 font-normal bg-transparent shadow-md theme__bg-floral-white px-5 py-3.5 text-gray-900 placeholder-gray-500 transition-colors duration-200"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-full border-2 border-solid border-gray-900  font-normal bg-transparent shadow-md theme__bg-floral-white  px-5 py-3.5 text-gray-900 placeholder-gray-500  transition-colors duration-200"
            required
          />

          <textarea
            name="message"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-[15px] border-2 border-solid border-gray-900 font-normal bg-transparent shadow-md theme__bg-floral-white px-5 py-3.5 text-gray-900 placeholder-gray-500 transition-colors duration-200"
            rows={5}
            required
          ></textarea>

          <fieldset className="w-full px-6">
            <legend className="isolate-color font-bold mb-2">How Can I Help?</legend>
            <div className="grid grid-cols-2 gap-4">
              {HELP_OPTIONS.map(({ key, label }) => (
                <label
                  key={key}
                  className="isolate-color dark:text-gray-100 flex items-center gap-2 transition-colors duration-200"
                >
                  <input
                    type="checkbox"
                    name={key}
                    checked={formData.helpOptions[key]}
                    onChange={handleChange}
                    className="w-4 h-4 border-solid border-gray-900 theme__bg-floral-white dark:bg-gray-800 transition-colors duration-200"
                  />
                  <span>{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          {statusMessage.text && (
            <div
              className={`px-4 py-3 rounded-lg border ${
                statusMessage.type === "success"
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-red-100 text-red-800 border-red-200"
              }`}
            >
              {statusMessage.text}
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full bg-gray-950 text-white hover:bg-gray-800 font-semibold hoverable transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Enviando..." : "Make it happen!"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

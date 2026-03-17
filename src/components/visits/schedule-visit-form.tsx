"use client";

import { Calendar, CheckCircle, Clock, Mail, Phone, User, Users } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  visitors: string;
  type: "individual" | "grupo" | "escolar" | "corporativo";
  message: string;
};

export function ScheduleVisitForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      visitors: "1",
      type: "individual",
    },
  });

  const today = new Date().toISOString().split("T")[0];

  function onSubmit(data: FormValues) {
    console.log("Formulário enviado:", data);
    setSubmitted(true);
  }

  if (submitted) {
    const data = getValues();
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
            <CheckCircle className="size-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Visita Agendada com Sucesso!
            </h2>
            <p className="text-lg text-neutral-600 mb-6">
              Obrigado por agendar sua visita ao Museu das Forças Armadas.
              Enviamos uma confirmação para o e-mail{" "}
              <strong>{data.email}</strong>.
            </p>
            <div className="bg-neutral-100 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-lg mb-4">Detalhes da Visita:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="size-5 text-neutral-600" />
                  <span>{data.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="size-5 text-neutral-600" />
                  <span>
                    {new Date(data.date).toLocaleDateString("pt-AO")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-neutral-600" />
                  <span>{data.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="size-5 text-neutral-600" />
                  <span>
                    {data.visitors}{" "}
                    {parseInt(data.visitors) === 1 ? "visitante" : "visitantes"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="bg-yellow-500 hover:bg-yellow-600 text-neutral-900 font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Agendar Outra Visita
              </button>
              <a
                href="/"
                className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Voltar ao Início
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">
        Informações da Visita
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Nome */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-neutral-700 mb-2"
          >
            Nome Completo *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
            <input
              type="text"
              id="name"
              {...register("name", { required: "Nome é obrigatório" })}
              className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Digite seu nome completo"
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email e Telefone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              E-mail *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
              <input
                type="email"
                id="email"
                {...register("email", { required: "E-mail é obrigatório" })}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="seu@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Telefone *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: "Telefone é obrigatório" })}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                placeholder="(00) 00000-0000"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Data e Horário */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Data da Visita *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
              <input
                type="date"
                id="date"
                {...register("date", { required: "Data é obrigatória" })}
                min={today}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="time"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Horário *
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
              <select
                id="time"
                {...register("time", { required: "Horário é obrigatório" })}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none"
              >
                <option value="">Selecione um horário</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
              </select>
            </div>
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
        </div>

        {/* Tipo de Visita e Número de Visitantes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Tipo de Visita *
            </label>
            <select
              id="type"
              {...register("type", { required: true })}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="individual">Individual</option>
              <option value="grupo">Grupo</option>
              <option value="escolar">Escolar</option>
              <option value="corporativo">Corporativo</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="visitors"
              className="block text-sm font-semibold text-neutral-700 mb-2"
            >
              Número de Visitantes *
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
              <input
                type="number"
                id="visitors"
                {...register("visitors", {
                  required: "Número de visitantes é obrigatório",
                  min: { value: 1, message: "Mínimo de 1 visitante" },
                  max: { value: 50, message: "Máximo de 50 visitantes" },
                })}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {errors.visitors && (
              <p className="text-red-500 text-sm mt-1">{errors.visitors.message}</p>
            )}
          </div>
        </div>

        {/* Mensagem Adicional */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-neutral-700 mb-2"
          >
            Mensagem ou Necessidades Especiais
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Informe se você ou seu grupo tem alguma necessidade especial ou preferência..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-neutral-900 font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <Calendar className="size-5" />
          Confirmar Agendamento
        </button>
      </form>
    </div>
  );
}

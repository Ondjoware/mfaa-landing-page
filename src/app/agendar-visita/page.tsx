"use client";

import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function ScheduleVisitPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    visitors: "1",
    type: "individual",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulação de envio do formulário
    console.log("Formulário enviado:", formData);
  };

  if (submitted) {
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
              <strong>{formData.email}</strong>.
            </p>
            <div className="bg-neutral-100 rounded-lg p-6 mb-8 text-left">
              <h3 className="font-bold text-lg mb-4">Detalhes da Visita:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="size-5 text-neutral-600" />
                  <span>{formData.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="size-5 text-neutral-600" />
                  <span>
                    {new Date(formData.date).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-neutral-600" />
                  <span>{formData.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="size-5 text-neutral-600" />
                  <span>
                    {formData.visitors}{" "}
                    {parseInt(formData.visitors) === 1
                      ? "visitante"
                      : "visitantes"}
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
    <>
      <section className="bg-neutral-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Agendar Visita</h1>
          <p className="text-xl text-neutral-300">
            Planeie sua visita ao Museu das Forças Armadas
          </p>
        </div>
      </section>
      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Informações da Visita
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Digite seu nome completo"
                      />
                    </div>
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
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          placeholder="seu@email.com"
                        />
                      </div>
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
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
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
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                      </div>
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
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
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
                        name="type"
                        required
                        value={formData.type}
                        onChange={handleChange}
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
                          name="visitors"
                          required
                          min="1"
                          max="50"
                          value={formData.visitors}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                      </div>
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
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
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Horários de Funcionamento */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Horários de Funcionamento
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Segunda - Sexta</span>
                    <span className="font-semibold">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Sábado</span>
                    <span className="font-semibold">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Domingo</span>
                    <span className="font-semibold text-red-600">Fechado</span>
                  </div>
                </div>
              </div>

              {/* Informações Importantes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  Informações Importantes
                </h3>
                <ul className="space-y-2 text-neutral-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Entrada gratuita para todos os visitantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>É necessário apresentar documento de identidade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>
                      Visitas guiadas disponíveis mediante agendamento
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>
                      Grupos acima de 15 pessoas devem agendar com antecedência
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span>Estacionamento gratuito disponível</span>
                  </li>
                </ul>
              </div>

              {/* Contato */}
              <div className="bg-neutral-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Precisa de Ajuda?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="size-4" />
                    <span>(11) 3456-7890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="size-4" />
                    <span>contato@mfa.gov.br</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Exposição: 200 Anos da Independência",
    date: "15 de Março, 2026",
    time: "10:00 - 18:00",
    location: "Pavilhão Principal",
    description:
      "Uma exposição especial celebrando os 200 anos da independência com artefatos raros e documentos históricos.",
  },
  {
    id: 2,
    title: "Palestra: Estratégias Militares Históricas",
    date: "22 de Março, 2026",
    time: "14:00 - 16:00",
    location: "Auditório Central",
    description:
      "Historiadores militares discutem as principais estratégias que moldaram a história das Forças Armadas.",
  },
  {
    id: 3,
    title: "Cerimônia de Homenagem aos Veteranos",
    date: "10 de Abril, 2026",
    time: "11:00 - 13:00",
    location: "Jardim das Medalhas",
    description:
      "Evento especial em reconhecimento ao serviço e sacrifício dos veteranos das Forças Armadas.",
  },
];

export default function EventsSection() {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Próximos Eventos
          </h2>
          <p className="text-neutral-600 text-lg">
            Participe de nossas exposições e atividades especiais
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6"
            >
              <div className="shrink-0">
                <div className="bg-yellow-500 text-neutral-900 rounded-lg p-4 text-center w-24">
                  <div className="text-3xl font-bold">
                    {event.date.split(" ")[0]}
                  </div>
                  <div className="text-sm uppercase">
                    {event.date.split(" ")[2]}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {event.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-3 text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-neutral-600">{event.description}</p>
              </div>

              <div className="flex items-center">
                <button
                  type="button"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
                >
                  <Calendar className="size-5" />
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

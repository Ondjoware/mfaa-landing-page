import EventItem from "@/components/event/event-item";
import EventItemSkeleton from "@/components/event/event-item-skeleton";
import { getNextEvents } from "@/lib/strapi/services/events";
import { CalendarX } from "lucide-react";

export default async function EventsSection() {
  const { data: events } = await getNextEvents();
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
          {events.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-16 text-neutral-500">
              <CalendarX className="size-16 text-neutral-300" />
              <p className="text-xl font-semibold">Nenhum evento agendado</p>
              <p className="text-sm text-center max-w-sm">
                De momento não há eventos próximos. Volte em breve para
                descobrir as nossas próximas atividades e exposições.
              </p>
            </div>
          ) : (
            events.map((event) => <EventItem key={event.id} event={event} />)
          )}
        </div>
      </div>
    </section>
  );
}

export function EventsSectionSkeleton() {
  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-neutral-200 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="h-5 w-80 bg-neutral-200 rounded mx-auto animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {["skeleton-1", "skeleton-2", "skeleton-3"].map((key) => (
            <EventItemSkeleton key={key} />
          ))}
        </div>
      </div>
    </section>
  );
}

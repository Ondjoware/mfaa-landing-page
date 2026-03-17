import type { OpeningHours as OpeningHoursType } from "@/lib/strapi/types/museum-info";

type Props = {
  openingHours: OpeningHoursType[];
};

function formatTime(time: string): string {
  return time.slice(0, 5);
}

export function OpeningHours({ openingHours }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-neutral-900 mb-4">
        Horários de Funcionamento
      </h3>
      <div className="space-y-3">
        {openingHours.map((entry) => (
          <div key={entry.period} className="flex justify-between">
            <span className="text-neutral-600">{entry.period}</span>
            {entry.IsClosedForPublic ||
            !entry.oppeningTime ||
            !entry.closingTime ? (
              <span className="font-semibold text-red-600">Fechado</span>
            ) : (
              <span className="font-semibold">
                {formatTime(entry.oppeningTime)} -{" "}
                {formatTime(entry.closingTime)}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

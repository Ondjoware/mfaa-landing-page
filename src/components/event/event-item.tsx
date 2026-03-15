import type { StrapiData } from "@/lib/strapi/types/common";
import type { Event } from "@/lib/strapi/types/event";
import { formatTime, formatTimeRange, getMonthName } from "@/lib/utils";
import { Calendar, Clock, MapPin } from "lucide-react";

type Props = {
  event: StrapiData<Event>;
};

export default function EventItem({ event }: Props) {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);
  const isMultiDay = startDate.toDateString() !== endDate.toDateString();

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row gap-6">
      <div className="shrink-0">
        {isMultiDay ? (
          <div className="flex flex-row md:flex-col items-center gap-1">
            <div className="bg-yellow-500 text-neutral-900 rounded-lg p-4 text-center w-24">
              <div className="text-3xl font-bold">{startDate.getDate()}</div>
              <div className="text-sm uppercase">{getMonthName(startDate)}</div>
            </div>
            <span className="text-neutral-400 font-bold md:hidden">→</span>
            <span className="text-neutral-400 font-bold hidden md:block">
              ↓
            </span>
            <div className="bg-yellow-100 text-neutral-700 rounded-lg p-4 text-center w-24">
              <div className="text-3xl font-bold">{endDate.getDate()}</div>
              <div className="text-sm uppercase">{getMonthName(endDate)}</div>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-500 text-neutral-900 rounded-lg p-4 text-center w-24">
            <div className="text-3xl font-bold">{startDate.getDate()}</div>
            <div className="text-sm uppercase">{getMonthName(startDate)}</div>
          </div>
        )}
      </div>

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-neutral-900 mb-3">
          {event.title}
        </h3>
        <div className="flex flex-wrap gap-4 mb-3 text-neutral-600">
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            {isMultiDay ? (
              <span>
                {startDate.getDate()} {getMonthName(startDate)},{" "}
                {formatTime(startDate)} — {endDate.getDate()}{" "}
                {getMonthName(endDate)}, {formatTime(endDate)}
              </span>
            ) : (
              <span>{formatTimeRange(startDate, endDate)}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="size-4" />
            <span>{event.location}</span>
          </div>
        </div>
        <p className="text-neutral-600 line-clamp-3">{event.description}</p>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <Calendar className="size-5" />
          Adicionar
        </button>
      </div>
    </div>
  );
}

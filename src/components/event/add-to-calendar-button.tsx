"use client";

import { Calendar } from "lucide-react";

type Props = {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location?: string | null;
};

export default function AddToCalendarButton({
  title,
  startDate,
  endDate,
  description,
  location,
}: Props) {
  function handleClick() {
    const format = (d: Date) =>
      `${d.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates: `${format(startDate)}/${format(endDate)}`,
      details: description,
      ...(location && { location }),
    });
    window.open(
      `https://calendar.google.com/calendar/render?${params}`,
      "_blank"
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-neutral-900 cursor-pointer hover:bg-neutral-800 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
    >
      <Calendar className="size-5" />
      Adicionar
    </button>
  );
}

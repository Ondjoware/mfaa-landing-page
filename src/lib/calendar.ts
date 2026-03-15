type CalendarEvent = {
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  location?: string | null;
};

function formatIcs(d: Date) {
  return `${d.toISOString().replace(/[-:]/g, "").split(".")[0]}Z`;
}

export function buildGoogleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${formatIcs(event.startDate)}/${formatIcs(event.endDate)}`,
    details: event.description,
    ...(event.location && { location: event.location }),
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export function buildOutlookCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    subject: event.title,
    startdt: event.startDate.toISOString(),
    enddt: event.endDate.toISOString(),
    body: event.description,
    ...(event.location && { location: event.location }),
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params}`;
}

export function downloadIcsFile(event: CalendarEvent): void {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${formatIcs(event.startDate)}`,
    `DTEND:${formatIcs(event.endDate)}`,
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.description}`,
    event.location ? `LOCATION:${event.location}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean);

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${event.title.replace(/\s+/g, "-")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
}
